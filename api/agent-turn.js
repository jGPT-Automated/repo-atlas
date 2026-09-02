// /api/agent-turn
//
// Fallback-path text turn. Used only when the client has already fallen
// back to Deepgram STT + browser TTS (see lib/voice-agent.js). Keeps the
// same tool-calling contract (navigateToScene) as the Gemini Live path
// so the orb can still drive navigation in fallback mode.
//
// Requires: GEMINI_API_KEY set in Vercel project/team environment variables.

const { GoogleGenAI, Type } = require('@google/genai');

const navigateToSceneDeclaration = {
  name: 'navigateToScene',
  description: "Move the visitor's view to a specific project section of the site.",
  parameters: {
    type: Type.OBJECT,
    properties: {
      sceneId: {
        type: Type.STRING,
        description: 'One of: intro, localcheck, teaims, omnivital, alpha-gauge, instruction-os, sage-search, outreach-os, contact.'
      }
    },
    required: ['sceneId']
  }
};

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed. Use POST.' });
    return;
  }

  const apiKey = process.env.GEMINI_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'Server is not configured for agent turns.' });
    return;
  }

  const { message, systemInstruction } = req.body || {};
  if (!message || typeof message !== 'string') {
    res.status(400).json({ error: 'message (string) is required.' });
    return;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const result = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: [{ role: 'user', parts: [{ text: message }] }],
      config: {
        systemInstruction: systemInstruction || undefined,
        tools: [{ functionDeclarations: [navigateToSceneDeclaration] }]
      }
    });

    let sceneId = null;
    const calls = result.functionCalls || [];
    for (const fc of calls) {
      if (fc.name === 'navigateToScene' && fc.args && fc.args.sceneId) {
        sceneId = fc.args.sceneId;
      }
    }

    res.status(200).json({
      text: result.text || '',
      sceneId
    });
  } catch (err) {
    console.error('agent-turn error:', err);
    res.status(502).json({ error: 'Agent turn failed.', detail: err.message || String(err) });
  }
};

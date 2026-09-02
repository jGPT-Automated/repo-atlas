// /api/voice-token
//
// Mints a single-use, short-lived Gemini Live ephemeral token server-side.
// The real GEMINI_API_KEY (set as a Vercel env var) never reaches the
// browser — the client receives only this ephemeral token, which is scoped
// to one session and expires quickly, per Google's recommended
// client-to-server Live API auth pattern.
//
// Requires: GEMINI_API_KEY set in Vercel project/team environment variables.

const { GoogleGenAI } = require('@google/genai');

const LIVE_MODEL = 'gemini-2.5-flash-native-audio-preview-12-2025';

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
    console.error('voice-token: GEMINI_API_KEY is not set');
    res.status(500).json({ error: 'Server is not configured for voice sessions.' });
    return;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    const now = new Date();
    const expireTime = new Date(now.getTime() + 30 * 60 * 1000);
    const newSessionExpireTime = new Date(now.getTime() + 60 * 1000);

    const token = await ai.authTokens.create({
      config: {
        uses: 1,
        expireTime: expireTime.toISOString(),
        newSessionExpireTime: newSessionExpireTime.toISOString(),
        liveConnectConstraints: {
          model: LIVE_MODEL,
          config: {
            responseModalities: ['AUDIO'],
          },
        },
      },
    });

    res.status(200).json({
      token: token.name,
      model: LIVE_MODEL,
      expiresAt: expireTime.toISOString(),
    });
  } catch (err) {
    console.error('voice-token: failed to mint ephemeral token', err);
    res.status(502).json({ error: 'Could not start a voice session right now.' });
  }
};

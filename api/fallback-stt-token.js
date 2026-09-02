// /api/fallback-stt-token
//
// Only used when Gemini Live fails or errors mid-session (see
// lib/voice-agent.js _startFallback). Mints a short-lived, scoped
// Deepgram key server-side so the long-lived DEEPGRAM_API_KEY never
// reaches the browser.
//
// Requires: DEEPGRAM_API_KEY set in Vercel project/team environment
// variables (the promo-credit account key).

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed. Use POST.' });
    return;
  }

  const apiKey = process.env.DEEPGRAM_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'Fallback voice path is not configured.' });
    return;
  }

  try {
    const dgRes = await fetch('https://api.deepgram.com/v1/auth/grant', {
      method: 'POST',
      headers: {
        Authorization: `Token ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ttl_seconds: 60 })
    });

    if (!dgRes.ok) {
      const body = await dgRes.text();
      console.error('Deepgram grant failed:', dgRes.status, body);
      res.status(502).json({ error: 'Could not start fallback voice session.' });
      return;
    }

    const data = await dgRes.json();
    res.status(200).json({ token: data.access_token });
  } catch (err) {
    console.error('fallback-stt-token error:', err);
    res.status(502).json({ error: 'Could not start fallback voice session.' });
  }
};

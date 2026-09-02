/* ============================================================
   VOICE AGENT — Gemini Live, ported from the working reference
   implementation (GenJess/GenJess-v1 components/Assistant.tsx),
   adapted to repo-atlas's scene system and vanilla JS.

   Primary path:  Gemini Live (native audio in + out, function-
                  calling for navigation), authenticated via a
                  short-lived ephemeral token minted server-side
                  at /api/voice-token. The real API key never
                  reaches this file or the browser.

   Fallback path: if Gemini Live fails to connect or errors out
                  mid-session, and the caller has provided
                  Deepgram/AssemblyAI-backed endpoints, fall back
                  to a simpler push-to-talk STT -> text turn ->
                  browser TTS loop so the orb keeps working.
   ============================================================ */

(function () {
  const LIVE_MODEL = 'gemini-2.5-flash-native-audio-preview-12-2025';

  // ---- Project knowledge (condensed from repo-atlas/analysis/*.md and
  // user-provided source docs) ----
  const PROJECT_KNOWLEDGE = {
    localcheck: "LocalCheck: map-first basketball & pickleball court finder. Verified catalog of 56 courts across 7 US cities (NYC, DC, Miami, LA, Houston, Austin, Denver). Users search/filter courts, check in, see weekly activity heatmaps. Next.js 16 + React 19, Mapbox GL 3D, Supabase/Postgres. Production-ready MVP, both web and mobile shipped. Design philosophy is deliberately honest — no fabricated player counts, catalog starts at zero activity.",
    teaims: "TEAIMS: multi-agent AI operating system. 9 specialized agents (market strategist, product architect, tech lead, designer, legal, growth, coach, security) take a startup idea from pitch to launch docs, including an adversarial debate round where agents challenge each other before a human decides. React 18 + Supabase + Gemini 3 Flash.",
    omnivital: "OmniVital: a 'Wellness Operating System' — the thesis is that the supplement isn't the product, the relationship is. Six precision formulas across three daily time windows: morning (OV Drive, cordyceps energy; OV Adapt, KSM-66 ashwagandha for stress), midday (OV Bright, saffron for mood; OV Quiet Focus, CDP-choline for concentration), evening (OV Neuro Night, magnesium glycinate for sleep; OV Cortex, Bacopa for cognition). $64-78/mo each, $422/mo full stack, 20% off subscribed. Built on React + Supabase + FastAPI/GPT-4.1 for a personalized AI advisor ('OV') that references your actual stack and streak, plus an ElevenLabs voice orb. Retention flywheel: daily 1-5 feeling check-ins build a streak, which feeds the AI better context, which drives more personalized (and upsell-friendly) advice. Community members get a color-tag identity instead of their name — privacy-preserving social proof. Pricing is framed as 'daily ritual' cost ($2.13/day) rather than a monthly bill to reduce sticker shock.",
    "alpha-gauge": "Alpha-Gauge: real-time trading dashboard for Polymarket crypto prediction markets. Streams live spot prices vs. market-implied probabilities, runs particle-filter and Monte Carlo analysis to surface trading edges. React 18 + Supabase Edge Functions + Polymarket Gamma/CLOB WebSocket feeds. Feature-complete, production-grade data pipelines.",
    "instruction-os": "Instruction OS: versioned instruction-management system that keeps custom AI instructions in sync across Claude, Gemini, and GPT. Real conversations get rated and feed an optimizer that improves the instructions over time. React 18 + Supabase + MCP server + Telegram ingestion via Firecrawl.",
    "sage-search": "Sage Search: a 'post-organization' knowledge tool — the core insight from real market research is that people don't want better organization, they want organization removed as a task entirely. Share anything to a Telegram bot (text, images, URLs, PDFs, video), it gets auto-processed with Gemini/embeddings and stored, then you search it back in natural language — no folders, no tags, no manual filing. The loop is literally named 'Save, Forget, Query, Delight.' Backend handles multi-format ingestion: web scraping for URLs, vision-model description for images and video frames, PDF/DOCX text extraction, all converted to embeddings for cosine-similarity search. Market research scored the opportunity 8/10 — the competitive field (Notion, Obsidian, Rewind, Mem) is fragmented and every incumbent trades off usability, privacy, or performance to get their features. Telegram was chosen deliberately as the MVP surface because it reuses the share-sheet gesture people already do, rather than asking them to adopt a new app.",
    "outreach-os": "Outreach OS: a seven-agent pipeline that builds SMBs a genuinely better website on spec, unsolicited, then offers it to them. Prospector finds businesses with weak/no web presence; Strategist audits their site and competitors; Builder rapid-prototypes a real site from templates and design systems (never free-codes) and deploys it live to a Vercel subdomain; Auditor verifies it actually beats competitors; Packager generates a video walkthrough and drafts outreach; a Persona Tester agent reads the email as the business owner would before it ever sends, to catch anything that would kill trust; Conductor runs the whole pipeline. The proof of concept already shipped and is independently rated the best-designed power-washing site in the category. Pricing sits deliberately in the gap between freelancers (no strategy) and boutique agencies (out of reach for small trades businesses) — $1,997-$2,497 for the initial build. The pitch to businesses that say no is that they still walk away with real value for free, since the work was already done speculatively."
  };

  const SYSTEM_INSTRUCTION = `You are the voice agent embedded in Jesse Harrick's portfolio site, repo-atlas.
You speak AS an extension of Jesse's work, in a calm, direct, slightly technical tone — like a sharp systems architect walking someone through their own projects. Keep responses concise (2-3 sentences max) since this is a spoken conversation, not a chat window.

You have real knowledge of these projects:
${Object.entries(PROJECT_KNOWLEDGE).map(([id, desc]) => `- ${id}: ${desc}`).join('\n')}

When the conversation turns to one of these projects, use the navigateToScene tool to move the visitor's screen to that project's section so they can see it while you talk about it. Do this proactively when it's natural, not only when asked.
If asked for detail beyond what's given here — exact revenue, user counts, or specifics not stated above — say plainly that you don't have that level of detail rather than inventing it.
Never fabricate metrics, revenue figures, or user counts beyond what's given above.`;

  const navigateToSceneDeclaration = {
    name: 'navigateToScene',
    description: "Move the visitor's view to a specific project section of the site so they can see what you're discussing.",
    parameters: {
      type: 'OBJECT',
      properties: {
        sceneId: {
          type: 'STRING',
          description: 'The scene id to navigate to. One of: intro, localcheck, teaims, omnivital, alpha-gauge, instruction-os, sage-search, outreach-os, contact.'
        }
      },
      required: ['sceneId']
    }
  };

  // ---- Audio encode/decode helpers (ported as-is from the reference) ----
  function encode(bytes) {
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
    return btoa(binary);
  }
  function decode(base64) {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) bytes[i] = binaryString.charCodeAt(i);
    return bytes;
  }
  async function decodeAudioData(data, ctx, sampleRate, numChannels) {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
    for (let channel = 0; channel < numChannels; channel++) {
      const channelData = buffer.getChannelData(channel);
      for (let i = 0; i < frameCount; i++) channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
    return buffer;
  }
  function createBlob(data) {
    const int16 = new Int16Array(data.length);
    for (let i = 0; i < data.length; i++) int16[i] = data[i] * 32768;
    return { data: encode(new Uint8Array(int16.buffer)), mimeType: 'audio/pcm;rate=16000' };
  }

  class VoiceAgent extends EventTarget {
    constructor({ onNavigate } = {}) {
      super();
      this.onNavigate = onNavigate || function () {};
      this.status = 'disconnected'; // disconnected | connecting | connected | fallback
      this.volume = 0;
      this._session = null;
      this._inputCtx = null;
      this._outputCtx = null;
      this._nextStartTime = 0;
      this._analyser = null;
      this._sourceNodes = new Set();
      this._stream = null;
      this._scriptProcessor = null;
      this._usedFallback = false;
    }

    _setStatus(s) {
      this.status = s;
      this.dispatchEvent(new CustomEvent('status', { detail: s }));
    }

    async _fetchEphemeralToken() {
      const res = await fetch('/api/voice-token', { method: 'POST' });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `Token request failed (${res.status})`);
      }
      return res.json();
    }

    async start() {
      if (this.status === 'connecting' || this.status === 'connected') return;
      this._setStatus('connecting');

      try {
        await this._startGeminiLive();
      } catch (err) {
        console.error('Gemini Live failed, falling back:', err);
        this.dispatchEvent(new CustomEvent('error', { detail: { stage: 'gemini-live', err } }));
        try {
          await this._startFallback();
        } catch (fallbackErr) {
          console.error('Fallback also failed:', fallbackErr);
          this.dispatchEvent(new CustomEvent('error', { detail: { stage: 'fallback', err: fallbackErr } }));
          this._setStatus('disconnected');
        }
      }
    }

    async _startGeminiLive() {
      // @google/genai is published as an ES module — jsDelivr's CDN build
      // does not expose a window global, so it must be loaded via dynamic
      // import(), not a plain <script> tag. Cached after first load.
      if (!this._genaiModule) {
        this._genaiModule = await import('https://cdn.jsdelivr.net/npm/@google/genai@1/+esm');
      }
      const { GoogleGenAI, Modality } = this._genaiModule;

      const { token } = await this._fetchEphemeralToken();
      const ai = new GoogleGenAI({ apiKey: token });

      if (!this._inputCtx) {
        this._inputCtx = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: 16000 });
      }
      if (!this._outputCtx) {
        this._outputCtx = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: 24000 });
      }
      if (!this._analyser) {
        this._analyser = this._outputCtx.createAnalyser();
        this._analyser.fftSize = 256;
        this._analyser.connect(this._outputCtx.destination);
      }

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this._stream = stream;

      const self = this;
      const sessionPromise = ai.live.connect({
        model: LIVE_MODEL,
        callbacks: {
          onopen: () => {
            self._setStatus('connected');
            const source = self._inputCtx.createMediaStreamSource(stream);
            const scriptProcessor = self._inputCtx.createScriptProcessor(4096, 1, 1);
            self._scriptProcessor = scriptProcessor;
            scriptProcessor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const pcmBlob = createBlob(inputData);
              sessionPromise.then((s) => s.sendRealtimeInput({ media: pcmBlob }));
            };
            source.connect(scriptProcessor);
            scriptProcessor.connect(self._inputCtx.destination);
          },
          onmessage: async (message) => {
            const base64Audio = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
            if (base64Audio && self._outputCtx) {
              const ctx = self._outputCtx;
              self._nextStartTime = Math.max(self._nextStartTime, ctx.currentTime);
              const audioBuffer = await decodeAudioData(decode(base64Audio), ctx, 24000, 1);
              const src = ctx.createBufferSource();
              src.buffer = audioBuffer;
              src.connect(self._analyser);
              src.addEventListener('ended', () => self._sourceNodes.delete(src));
              src.start(self._nextStartTime);
              self._nextStartTime += audioBuffer.duration;
              self._sourceNodes.add(src);
              self._pollVolume();
            }

            if (message.serverContent?.interrupted) {
              self._sourceNodes.forEach((s) => s.stop());
              self._sourceNodes.clear();
              self._nextStartTime = 0;
            }

            if (message.toolCall) {
              for (const fc of message.toolCall.functionCalls) {
                if (fc.name === 'navigateToScene') {
                  const sceneId = fc.args && fc.args.sceneId;
                  if (sceneId) self.onNavigate(sceneId);
                  sessionPromise.then((s) => s.sendToolResponse({
                    functionResponses: { id: fc.id, name: fc.name, response: { result: 'ok' } }
                  }));
                }
              }
            }
          },
          onclose: () => {
            self._cleanup();
            self._setStatus('disconnected');
          },
          onerror: (e) => {
            console.error('Gemini Live error:', e);
            self._cleanup();
            self._setStatus('disconnected');
            self.dispatchEvent(new CustomEvent('error', { detail: { stage: 'gemini-live-runtime', err: e } }));
          }
        },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Puck' } } },
          systemInstruction: SYSTEM_INSTRUCTION,
          tools: [{ functionDeclarations: [navigateToSceneDeclaration] }]
        }
      });

      this._session = await sessionPromise;
    }

    _pollVolume() {
      if (!this._analyser || this.status !== 'connected') return;
      const dataArray = new Uint8Array(this._analyser.frequencyBinCount);
      this._analyser.getByteFrequencyData(dataArray);
      const avg = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;
      this.volume = Math.min(1, avg / 128);
      this.dispatchEvent(new CustomEvent('volume', { detail: this.volume }));
      requestAnimationFrame(() => this._pollVolume());
    }

    // ---- Fallback: Deepgram STT -> text turn -> browser TTS -----------
    // Used only if Gemini Live fails to connect or errors mid-session.
    // Requires /api/fallback-stt-token (mints a short-lived Deepgram
    // token server-side) — see api/fallback-stt-token.js.
    async _startFallback() {
      this._usedFallback = true;
      this._setStatus('connecting');

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this._stream = stream;

      const { token } = await fetch('/api/fallback-stt-token', { method: 'POST' })
        .then((r) => { if (!r.ok) throw new Error('No fallback STT token available'); return r.json(); });

      const socket = new WebSocket(
        `wss://api.deepgram.com/v1/listen?model=nova-3&smart_format=true&punctuate=true`,
        ['token', token]
      );

      const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0 && socket.readyState === WebSocket.OPEN) socket.send(e.data);
      };

      socket.onopen = () => {
        this._setStatus('connected');
        mediaRecorder.start(250);
      };

      socket.onmessage = (msg) => {
        const data = JSON.parse(msg.data);
        const transcript = data.channel?.alternatives?.[0]?.transcript;
        if (transcript && data.is_final) {
          this._handleFallbackTurn(transcript);
        }
      };

      socket.onerror = (e) => {
        console.error('Fallback STT socket error:', e);
        this.dispatchEvent(new CustomEvent('error', { detail: { stage: 'fallback-runtime', err: e } }));
      };

      socket.onclose = () => {
        mediaRecorder.stop();
        this._setStatus('disconnected');
      };

      this._fallbackSocket = socket;
      this._fallbackRecorder = mediaRecorder;
    }

    async _handleFallbackTurn(transcript) {
      try {
        const res = await fetch('/api/agent-turn', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: transcript, systemInstruction: SYSTEM_INSTRUCTION })
        });
        const { text, sceneId } = await res.json();
        if (sceneId) this.onNavigate(sceneId);
        if (text && 'speechSynthesis' in window) {
          const utter = new SpeechSynthesisUtterance(text);
          speechSynthesis.speak(utter);
        }
      } catch (err) {
        console.error('Fallback turn failed:', err);
      }
    }

    _cleanup() {
      if (this._stream) { this._stream.getTracks().forEach((t) => t.stop()); this._stream = null; }
      if (this._scriptProcessor) { this._scriptProcessor.disconnect(); this._scriptProcessor = null; }
      if (this._fallbackSocket) { this._fallbackSocket.close(); this._fallbackSocket = null; }
      if (this._fallbackRecorder && this._fallbackRecorder.state !== 'inactive') this._fallbackRecorder.stop();
      this._sourceNodes.forEach((s) => { try { s.stop(); } catch (e) {} });
      this._sourceNodes.clear();
      this._nextStartTime = 0;
    }

    async stop() {
      if (this._session) {
        try { this._session.close(); } catch (e) {}
        this._session = null;
      }
      this._cleanup();
      this._setStatus('disconnected');
    }
  }

  window.VoiceAgent = VoiceAgent;
})();

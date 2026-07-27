# agentjess-portfolio

**Organization:** GenJess  
**URL:** https://github.com/GenJess/agentjess-portfolio  
**Language:** TypeScript  
**Size:** 71 KB  
**Stars:** ⭐ 0 | Forks: 🔀 1  
**Created:** 2026-02-11T21:21:34Z  
**Last Updated:** 2026-02-17T00:41:24Z  

## Overview

Portfolio with integrated ElevenLabs voice agent for interactive navigation

## README

```
# Jesse | Systems & Synthesis Portfolio

A high-performance portfolio built with React, Vite, and AI integration.

## Environment Variables

To run this project, you need the following environment variables. 

1. Create a `.env` file in the root of your project.
2. Add the keys below.

```env
# Required for "Lab" tools (e.g., Token Calculator, Env Checker)
# Get this from Google AI Studio (https://aistudio.google.com/)
API_KEY=your_gemini_api_key_here

# Optional: If you want to parameterize the ElevenLabs Agent ID
VITE_ELEVENLABS_AGENT_ID=your_agent_id_here
```

*Note: The current `Assistant.tsx` has a hardcoded demo Agent ID. You can replace it with `import.meta.env.VITE_ELEVENLABS_AGENT_ID` if you wish to use your own.*

## How It Works

### Voice Agent
The voice interface is powered by **ElevenLabs Conversational AI**.
- **Connection**: Uses `useConversation` hook to stream audio via WebSockets.
- **Tools**: The agent is equipped with client-side tools (e.g., `navigateToSection`) that allow it to control the React router and scroll the page based on voice commands.

### System Visualizer
The background animation uses a custom HTML5 Canvas implementation (`SystemVisualizer.tsx`) that projects 3D coordinates onto a 2D plane without heavy 3D libraries, ensuring high performance.

---

## Adding AgentJesse to Any Website

You can embed the "AgentJesse" (or any ElevenLabs agent) into an external website by isolating the Assistant component.

### 1. Install Dependencies
```bash
```

## File Structure

📄 .gitignore
📄 App.tsx
📄 README.md
📁 components/
📄 constants.ts
📄 index.css
📄 index.html
📄 index.tsx
📄 metadata.json
📄 package.json
📁 services/
📄 tsconfig.json
📄 types.ts
📄 vite.config.ts

---

**Analysis Date:** 2026-07-27 15:02:34 UTC  
**Analyzer:** Repo Atlas Daily Deep Dive  

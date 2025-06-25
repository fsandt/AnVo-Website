# AnVo Website

This site contains a simple tattoo portfolio and a page that can generate tattoo motives via OpenAI. The OpenAI key is **not** included in the repository.

## Setup

1. Copy `.env.example` to `.env` and insert your OpenAI key:
   ```
   OPENAI_API_KEY=sk-...
   ```
2. Install dependencies and start the server:
   ```
   npm install
   npm start
   ```

The Express server serves the static files and exposes an `/api/generate` endpoint that calls OpenAI securely on the server side.

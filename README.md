# unmineable

## Description

A crypto miner worker dashboard for unemineable.com. The app allows users to track their mining progress, view their earnings, and chat with a contextually aware chatbot.

[![Dashboard Preview](/src/lib/assets/images/unmineable.png)](https://mine.engage-dev.com)

[Demo App](https://mine.engage-dev.com)

## Features

- [Sveltekit](https://kit.svelte.dev/): Futuristic web framework for building blazing fast web apps.
- [Pocketbase](https://pocketbase.io): Self-contained User Auth, Database, Admin UI, and API documentation.
- [OpenAI](https://openai.com): chatGPT 3.5-turbo & 4.0-turbo for contextually aware chatbots.
- [Vercel AI SDK](https://vercel.com/ai): AI/ML models for image, text, and audio processing.
- [TailwindCSS](https://tailwindcss.com): A utility-first CSS framework for rapid UI development.
- [Zod](https://zod.dev): TypeScript-first schema declaration and validation.
- [Unmineable](https://unmineable.com): Mine unmineable crypto currencies via XMR.

## Getting Started

### Pocketbase Setup

1. Create a directory for your Pocketbase instance and navigate to it.

```bash
mkdir pb-unmineable
cd pb-unmineable
```

2. Download the latest release of Pocketbase, unzip it, and start the server.

```bash
wget https://github.com/pocketbase/pocketbase/releases/download/v0.22.9/pocketbase_0.22.9_linux_amd64.zip
unzip pocketbase_0.22.9_linux_amd64.zip
./pocketbase serve --http="0.0.0.0:8090"
```

3. Log in to the Pocketbase admin console at `http://localhost:8090/_/` and create a new database.

4. Go to settings > Import collections, then paste in the contens of `./pocketbase/pb_schema.json` (from this repo) and click import.

### Client Setup

1. Clone the repo and navigate to the project directory.

```bash
git clone https://github.com/engageintellect/unmineable
cd unmineable
```

2. Set your Pocketbase URL and OpenAI API key in a `.env.local` file.

```bash
touch 'PUBLIC_POCKETBASE_URL=http://localhost:8090' > .env.local
touch 'OPENAI_API_KEY=<YOUR API KEY>' >> .env.local
```

3. Install the dependencies and start the development server.

```bash
pnpm i && pnpm run dev --host
```

4. Open your browser to `http://localhost:5173` to see the app.

5. Register a new user and log in to the app.
   **NOTE:** Being that this app could have sensitive information, after registering your user you will need to toggle the "verified" option in the "users" collection in pocketbase before logging in.

# Dwiky Rahmat Fadhila — Portfolio

Built with **Vite + React + TypeScript + Tailwind**.

## Run locally

```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy for free

### Option A — Vercel (recommended)
1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset: **Vite**. No extra env needed. Deploy.

### Option B — Netlify
1. Push to GitHub.
2. New site -> Import from Git -> pick repo.
3. Build command: `npm run build`
4. Publish directory: `dist`

### Option C — GitHub Pages
1. In `package.json` add: `"homepage": "https://<your-username>.github.io/<repo>"` (optional).
2. Build: `npm run build` (output to `dist/`).
3. Install GitHub Action: Settings -> Pages -> Build and deployment -> GitHub Actions -> **Deploy static HTML to Pages**. Point to `dist`.


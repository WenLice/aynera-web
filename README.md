# Aynera marketing website

This folder is the full hostable marketing site. Pages, CSS, and images live here, so it can be sent and run on its own.

## Run locally

Install Node.js with npm, then:

```powershell
cd aynera-web
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build and host

```powershell
npm install
npm run build
```

That produces:

- `dist/` — static site to host (HTML, JS, CSS, and copied media)
- `public/` — source assets used by the app (keep this with the project / release package)

Host the generated `dist/` folder on any static host. That folder is the live website. Do not upload the source files (`app/`, `content/`, `components/`) as the live site.

## Send this project

Send the whole `aynera-web` folder, including `content/`, `styles/`, and `public/`. Do not send only a Git checkout that is missing those folders.

If the recipient only needs to put the site online, send `dist/` after a fresh `npm run build`.

A sibling `public-web` folder is optional. If it is present, `npm run dev` and `npm run build` copy the latest HTML, CSS, and media into this folder first.
# Backend API

The public forms use `NEXT_PUBLIC_AYNERA_API_BASE_URL` at build time. Copy `.env.example` to `.env.local` for local development, or set the variable in the deployment environment before running `npm run build`.

```env
NEXT_PUBLIC_AYNERA_API_BASE_URL=http://localhost:5057
```

The API must allow the deployed site origin under `Aynera:Cors:Origins`.

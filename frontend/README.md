# TradeLab Frontend

Frontend application is built with Next.js (App Router) and provides the main UI for project workspace, datasets, backtests, and run analysis.

## Stack

- Next.js 16
- React 18
- TypeScript
- Tailwind CSS
- Radix UI
- Recharts

## Main Structure

```text
frontend/
|-- app/                 # App Router pages + API proxy routes
|-- components/          # shell, shared, ui
|-- features/            # domain-specific UI/state logic
|-- lib/                 # demo data, types, utilities
|-- public/              # static assets (icons, logo, favicon)
`-- styles/              # global/theme styles
```

## Key Routes

- `/workspace` - main dashboard
- `/desktop` - project desktop
- `/data` - datasets and imports
- `/backtests` - run list and filtering
- `/runs/[id]` - run details
- `/compare` - runs comparison

## API Integration

Frontend uses Next API routes under `app/api/*` as a proxy to Java API.

Env variable:

- `BACKEND_API_BASE_URL` (default: `http://127.0.0.1:8080`)

## Local Development

```bash
cd frontend
npm install
npm run dev
```

## Useful Commands

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
- `npm run typecheck`


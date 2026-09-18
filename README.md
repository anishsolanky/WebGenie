# WebGenie

AI website builder — type a prompt, get a live multi-file React site, chat to revise it, export or publish it.

Full build plan: [`docs/WebGenie-Execution-Plan.pdf`](docs/WebGenie-Execution-Plan.pdf)

## Structure
- `client/` — React + TypeScript + Vite frontend
- `server/` — FastAPI backend (added in Phase 7)

Environment variables live in `server/.env` (gitignored, never committed — see `server/.env.example` for the shape).

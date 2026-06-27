# AlYusr Claude Code starter kit

Drop the contents of this folder into the ROOT of your website repo (after you scaffold the Vite app). It gives Claude Code your design system, your rules, the no-em-dash guard, and three specialist agents.

## What is inside
- `CLAUDE.md` - always-on project rules: stack, design tokens, the colonnade motif, writing rules, and the no-em-dash rule.
- `.claude/settings.json` - wires the no-em-dash hook to run after every file write or edit.
- `.claude/hooks/check-no-emdash.sh` - the deterministic guard. If any em or en dash lands in source, Claude Code stops and fixes it.
- `.claude/agents/` - three subagents: `page-builder` (builds), `design-guardian` (reviews, read-only), `copy-editor` (writes the words).
- `.claude/skills/frontend-design/` - the design judgment skill, available on demand.
- `docs/` - the research brief, the design tokens, the rendered design system, and your logo. Claude reads these.

## Setup order
1. Scaffold the app: `npm create vite@latest alyusr -- --template react-ts`, then add Tailwind, shadcn/ui, and Framer Motion.
2. Copy this kit into the repo root so `CLAUDE.md` and `.claude/` sit next to `package.json`.
3. `chmod +x .claude/hooks/check-no-emdash.sh`
4. Run `claude` in the repo. Confirm the agents load with `/agents` and skills with `/skills` (or `/help`).
5. Build one page at a time. Start with Home.

## Get the logo as SVG
`docs/alyusr-logo.png` is a cleaned raster copy. For production, replace it with the original vector from your designer.
# Al-yusr-relaunch

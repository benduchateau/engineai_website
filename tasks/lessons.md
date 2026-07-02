# lessons.md
**Project:** Engine AI Website (engineai.co.nz)
**Purpose:** Corrections, gotchas, things learned the hard way.

---

## Patterns & Conventions

- Single-page scrolling site with four product sub-pages (/claude, /copilot, /openclaw, /builds)
- Tailwind only for styling
- All content sourced from brief — do not paraphrase or editorially improve
- Dark theme throughout, no light sections
- Gold (#C4A35A) is primary CTA accent. Teal for OpenClaw, Blue (#0078D4) for Copilot, Green (#4CAF50) for Bespoke Builds.
- Server-side rendering via Next.js on Vercel (not static export)
- Each sub-page has its own metadata export with dedicated keywords array
- JSON-LD structured data in JsonLd.tsx component, injected via layout.tsx <head>
- llms.txt (summary) and llms-full.txt (detailed) in public/ for AI search discoverability
- @vercel/analytics/next (not /react) for App Router analytics

---

## Environment Gotchas

- Project path is `~/projects/engineai_website/` (git repo root). Consolidated 23 Mar 2026.
- MCP servers in Claude Code go in `~/.claude/.mcp.json`, NOT in `settings.json` (which rejects `mcpServers` field)
- `settings.json` has strict schema validation — check schema before editing
- Playwright MCP in headless mode needs `sudo npx playwright install --with-deps chromium` (system deps require sudo)
- WSL2 to Windows Chrome debug port (--remote-debugging-port=9222) is unreliable even with netsh port forwarding — headless Chromium in WSL or using Claude Desktop for browser tasks is more practical
- Use `@vercel/analytics/next` not `@vercel/analytics/react` for Next.js App Router

---

## Mistakes Made

| Date | What happened | What to do instead |
|------|--------------|-------------------|
| 23 Mar 2026 | Tried to add `mcpServers` to `~/.claude/settings.json` — rejected by schema validation | MCP servers go in `~/.claude/.mcp.json` |
| 23 Mar 2026 | Used `@vercel/analytics/react` import | Use `@vercel/analytics/next` for App Router |
| 23 Mar 2026 | Tried to connect Playwright MCP to Windows Chrome via localhost — WSL2 can't reach it | WSL2 runs on separate virtual network. Need netsh port forwarding or use headless mode |
| 23 Mar 2026 | JSON-LD sameAs pointed to `agent-maestros` GitHub org | Should be `engineai-nz` — the actual org |
| 23 Mar 2026 | Three copies of the website repo existed across `~/`, `~/projects/`, and `~/engineai_website_live/` | Canonical paths are in global CLAUDE.md. Always check `~/projects/` first. Never clone outside it. |

---

## Decisions Made

| Date | Decision | Rationale |
|------|----------|-----------|
| 23 Mar 2026 | Added llms.txt + llms-full.txt with explicit brand disambiguation | "Engine AI" name is contested by 3 unrelated entities (Shenzhen robotics, London capital markets, UK Companies House) |
| 23 Mar 2026 | Used ProfessionalService schema type in JSON-LD (not Organization) | More specific, better signals for local service business |
| 23 Mar 2026 | en_NZ locale on OpenGraph, Auckland address in schema | Geo-differentiation from UK/China entities |
| 23 Mar 2026 | Deep keyword strategy per product page rather than generic site-wide keywords | Each page targets specific product search terms (Claude Co-Work, Copilot Studio, OpenClaw) to capture long-tail product queries |
| 23 Mar 2026 | Use Claude Desktop for browser automation tasks instead of WSL Playwright MCP | WSL2-to-Windows Chrome connection is flaky; Claude Desktop already has working Playwright MCP |

---

## GEO Audit Findings (14 Apr 2026)

- GEO score 30/100. Technical (72) is the only strong category. Citability (22), Brand (12), E-E-A-T (34), Schema (25), Platform (18) all poor.
- Entity collision confirmed: UK "Engine AI" has Wikipedia page and Crunchbase listing. Chinese robotics "Engine AI" also indexed. The llms.txt disambiguation helps but is not enough alone.
- ProfessionalService + WebSite JSON-LD exists and works. But Service, Person, FAQ, Breadcrumb schemas all missing.
- Meta descriptions, OG tags, Twitter cards all present and well-formed (earlier fetch from bare domain missed them due to www redirect).
- llms.txt resolves on www subdomain only, not bare domain.
- Site has zero factual density: no statistics, no outcomes, no metrics across 3,800 words. This is the single biggest citability gap.
- geo-seo-claude skill installed at ~/.claude/skills/geo/ (14 sub-skills, 5 subagents)

## Decisions Reversed

- None yet

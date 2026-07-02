# GEMINI.md — Engine AI Website
**Project:** engineai.co.nz
**Last updated:** March 2026
**Inherits from:** ~/.gemini/GEMINI.md

---

## Project Overview

Single-page scrolling marketing site for Engine AI Consulting Limited.
Purpose: convert curious NZ business owners into Discovery Call bookings.
Domain: engineai.co.nz
GitHub repo: benduchateau/engineai_website
Deployment: Vercel (automatic on push to main)

---

## Stack

| Layer | Tool |
|---|---|
| Framework | Next.js (server-side rendering) |
| Styling | Tailwind CSS |
| Deployment | Vercel (server-side, not static export) |
| Forms | Resend API via /api/contact route |
| Fonts | Inter (body), JetBrains Mono (accents/tags) |
| Animations | Intersection Observer (fade-in on scroll) |

---

## Brand

| Token | Value |
|---|---|
| Background primary | `#08080f` |
| Background secondary | `#0d0d1a` |
| Gold accent | `#C4A35A` |
| Teal | `#2B8C8C` |
| Green | `#4CAF50` |
| Body font | Inter |
| Accent/tag font | JetBrains Mono |

Logo variants (dark/light/compact) already exist in the project folder. Do not recreate.

Gold is the primary CTA and headline accent colour.
Teal accents OpenClaw card. Blue `#0078D4` accents Copilot card. Green `#4CAF50` accents Bespoke Builds card.

---

## Site Structure

Main page is single-page with sticky anchor nav. Four dedicated sub-pages for products.

```
[Nav] Engine AI logo | The Gap | About | Clients | How We Work | Contact

Main page sections:
1. Hero
2. The Problem (The Gap)
3. Who We Are (About) — founder headshots
4. Who We Serve (Our Clients)
5. How We Work (The Model — Discover / Build / Orchestrate)
6. What We Deploy — 4 product cards (Claude, Copilot, OpenClaw, Bespoke Builds)
7. Why Now (The Window)
8. Contact / CTA
[Footer]

Sub-pages:
/claude   — Claude Co-Work, Chat, Code deployment service
/copilot  — Microsoft 365 Copilot deployment + Copilot Studio
/openclaw — AI orchestration OS (vision page)
/builds   — Bespoke dashboards, tools, automations (Sprint Build Cards)
```

---

## Content Source

Full content brief at: `docs/ENGINE_AI_WEBSITE_BRIEF.md`
Do not rewrite or editorially change copy without instruction — the brief is considered final content.
Copy tone: direct, grounded, calm authority. No jargon. No buzzwords.

---

## Key Design Constraints

- Dark theme throughout — no light sections
- Mobile-first. Single column on mobile, expand on desktop
- No heavy images — no stock photography
- Aim for 95+ Lighthouse score
- Paragraphs max 3-4 sentences — whitespace does the work
- Stats in Section 2 (68%, 75%) — animated counters on scroll
- What We Deploy — 2x2 card grid with product logos (Claude, Copilot, OpenClaw, Bespoke Builds)
- How We Work — three-step flow with gold accent connecting line
- Hero headline — gold accent on the second sentence
- Sub-pages follow same dark theme, shared nav pattern with back-link to home

---

## Primary CTA

**Goal of the entire site:** get the visitor to click "Book a Discovery Call"
Every section should create forward momentum toward that action.
Contact email: sales@engineai.co.nz

---

## What Not To Do

- Don't change the copy — the brief is final unless Ben says otherwise
- Don't use light backgrounds or break the dark theme
- Don't add stock imagery or placeholder images
- Don't introduce heavy JS libraries — keep it lean
- Don't use "leverage", "synergy", "digital transformation" anywhere
- Don't add more sub-pages without a clear product/service to showcase

---

## Current State

See `tasks/todo.md` for active build status.
See `tasks/lessons.md` for any environment or build gotchas.

---

## SEO

Title: Engine AI — AI Orchestration for New Zealand Business
Description: Engine AI helps NZ businesses discover, build, and deploy AI agents that solve real operational problems. Founded by two enterprise technology veterans with 2,000+ hours of hands-on AI development.
OG image: Dark branded card with logo + tagline

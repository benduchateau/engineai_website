# Design: "What We Deploy" Section + OpenClaw Page

**Date:** 2026-03-21
**Branch:** redesign/brand-system
**Status:** APPROVED

## Summary

Add a new "What We Deploy" section to the main page showcasing Engine AI's tools and platforms, plus a dedicated `/openclaw` page for the full AI OS vision.

## Main Page: "What We Deploy" Section

**Placement:** After "How We Work", before "What This Looks Like" (or Contact if vignettes aren't ready).

### Card 1: Claude for Teams (hero card, larger)

> **Claude for your whole team**
>
> Most businesses are still at level one with AI - asking ChatGPT questions, uploading spreadsheets to see what happens. That's fine. But it's not where the value is.
>
> Claude Co-Work gives your team shared AI workspaces where they collaborate with AI on real work - not just chat. Claude Chat handles the everyday questions. And for your power users, Claude Code builds internal tools and automations in hours, not weeks.
>
> We deploy Claude across your organisation, build custom skills matched to how your team actually works, and train your people until they don't need us.

### Card 2: OpenClaw (vision card)

> **OpenClaw - AI orchestration for your agents**
>
> As your AI capability grows, you need somewhere to run it all. OpenClaw is an open-source AI operating system that gives your business a single place to deploy, manage, and orchestrate your AI agents - on your own infrastructure, under your control.
>
> We're building this. The development is moving fast - secure, enterprise-grade AI orchestration that puts your business in control. This is the future of how businesses will run AI.
>
> [Learn more ->](/openclaw)

### Card 3: Supporting tools (compact)

> We also deploy and integrate Google AI, Codex, and other leading platforms - matched to what your business actually needs.

## Dedicated Page: /openclaw

Full-page treatment of the OpenClaw vision. Content to include:
- What OpenClaw is (AI operating system / orchestration layer)
- Why self-hosted matters (security, control, data sovereignty)
- Architecture overview (high-level, not technical deep-dive)
- What it means for businesses (practical outcomes)
- Current status (honest about stage, exciting about pace)
- CTA: "Talk to us about running OpenClaw for your business"

Design: same dark theme, same brand system. Nav should include a back-link to the main site.

## Technical Notes

- New section component on main page (static cards, no JS beyond existing animations)
- New Next.js route: `/openclaw` (app/openclaw/page.tsx)
- Mobile: cards stack single-column below 768px
- Maintain Lighthouse 95+ score
- OpenClaw page uses same layout/footer as main page

## Nav Update

Main page nav adds no new anchor (section flows between existing anchors).
OpenClaw page gets its own nav with back-link to home.

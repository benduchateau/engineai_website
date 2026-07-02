# todo.md
**Project:** Engine AI Website (engineai.co.nz)
**Last updated:** 15 April 2026

---

## Done

- [x] Website content brief finalised
- [x] Full site build (Hero, The Gap, About, Clients, How We Work, What We Deploy, Why Now, Contact, Footer)
- [x] Contact form wired to Resend API with rate limiting, sanitisation, confirmation email
- [x] Four product sub-pages (/claude, /copilot, /openclaw, /builds)
- [x] Founder headshots (WebP, 400x400)
- [x] OG image (dynamic via Next.js ImageResponse)
- [x] Privacy modal, LinkedIn links, skip-to-content, accessibility
- [x] PR #1 merged, deployed to Vercel — **LIVE at www.engineai.co.nz** (21 March 2026)
- [x] SEO implementation: robots.ts, sitemap.ts, JSON-LD structured data, expanded metadata (23 March 2026)
- [x] AI search discoverability: llms.txt + llms-full.txt with brand disambiguation (23 March 2026)
- [x] Google Search Console — verified, sitemap submitted (23 March 2026)
- [x] Bing Webmaster Tools — verified, sitemap submitted (23 March 2026)
- [x] Google Business Profile — registered as AI/IT consulting, Auckland (23 March 2026)
- [x] Vercel Analytics — @vercel/analytics/next wired into layout (23 March 2026)
- [x] Deep SEO overhaul — product-specific keywords on all 5 pages, enriched JSON-LD, expanded llms.txt (23 March 2026)
- [x] Consolidated project directories — three copies merged into `~/projects/engineai_website/` (23 March 2026)
- [x] Planning docs (CLAUDE.md, TODOS.md, design critique, content brief, photos) migrated into repo (23 March 2026)

## Up Next

- [ ] Test structured data at Google Rich Results Test
- [ ] Verify /robots.txt, /sitemap.xml, /llms.txt, /llms-full.txt resolve on live site
- [ ] Consider IndexNow via Vercel for faster Bing indexing
- [ ] Monitor Search Console for indexing progress over next 1-2 weeks
- [ ] Monitor keyword rankings for Claude Co-Work, Copilot Studio, OpenClaw terms

## GEO Optimisation (from 14 Apr 2026 audit — scored 30/100)

Full report: `GEO-AUDIT-REPORT.md` in repo root.

### Week 1: Content
- [ ] Add FAQ sections (3-5 questions) to /claude, /copilot, /openclaw, /builds
- [ ] Add definitions for "AI orchestration", "Agent-as-a-Service"
- [ ] Add measurable metrics to homepage case studies
- [ ] Remove or cite the two unsourced claims ("10% of potential", "most Copilot deployments fail")
- [ ] Fix 4 images missing alt text (hero.webp, who-we-are.png, how-we-work.webp, why-now.webp)

### Week 2: Structured Data
- [ ] Add Service schema to all 4 service pages
- [ ] Add Person schema for both founders
- [ ] Add FAQPage schema wrapping new FAQ sections
- [ ] Add BreadcrumbList to inner pages
- [ ] Add security headers (CSP, X-Frame-Options, X-Content-Type-Options)

### Week 3: Authority
- [ ] Get named case study from Stellar with measurable outcomes
- [ ] Create/claim LinkedIn company page
- [ ] Make at least 1 GitHub repo public (OpenClaw?)
- [ ] Submit to Clutch, DesignRush, ensun.io NZ AI directories
- [ ] Add NZBN and partner badges to footer

### Week 4: Content Scale
- [ ] Publish blog post: AI orchestration methodology
- [ ] Publish blog post: Claude vs Copilot decision framework for NZ
- [ ] Expand founder bios with specific years, employers, achievements
- [ ] Add explicit AI crawler Allow directives in robots.txt
- [ ] Register Engine AI Consulting Limited on Wikidata

## Post-Ship Backlog

- [ ] Social proof section (blocked on Stellar going live)
- [ ] Conversion copy rewrite — "you"-first rewrite of The Gap, scenario section, case vignettes (needs 3 user tests)
- [ ] AI Readiness Assessment — interactive diagnostic tool (lower-friction entry point)
- [ ] Harden contact form API — CAPTCHA, input size validation, fix spoofable rate limit
- [ ] Mobile responsive pass + Lighthouse audit (target 95+)
- [ ] Clean up leftover source images in public/images/ (original JPEGs, PNGs)

## Blocked

None currently.

## Notes

- Site is on `main` branch at github.com/benduchateau/engineai_website
- Auto-deploys to Vercel on push to main
- Content is locked — do not rewrite copy without Ben's instruction
- Playwright MCP in ~/.claude/.mcp.json (headless mode) — needs `sudo npx playwright install --with-deps chromium` to work in WSL
- WSL2 cannot easily reach Windows Chrome debug port — netsh port forwarding + firewall rule required, and it's still flaky

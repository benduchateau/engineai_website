# GEO Audit Report: Engine AI

**Audit Date:** 2026-04-14
**URL:** https://engineai.co.nz
**Business Type:** Agency/Services (AI Consultancy)
**Pages Analysed:** 5

---

## Executive Summary

**Overall GEO Score: 30/100 (Poor)**

Engine AI's website is technically solid (SSR, fast CDN, valid sitemap, llms.txt present) but is nearly invisible to AI citation systems. The site is built to convert human visitors, not to be cited by AI. The three critical gaps are: zero factual density (no statistics, outcomes, or data points), zero brand disambiguation (entity collision with UK and Chinese companies named "Engine AI"), and minimal structured data. The fixes are additive and achievable within 30 days.

### Score Breakdown

| Category | Score | Weight | Weighted |
|---|---|---|---|
| AI Citability | 22/100 | 25% | 5.5 |
| Brand Authority | 12/100 | 20% | 2.4 |
| Content E-E-A-T | 34/100 | 20% | 6.8 |
| Technical GEO | 72/100 | 15% | 10.8 |
| Schema & Structured Data | 25/100 | 10% | 2.5 |
| Platform Optimization | 18/100 | 10% | 1.8 |
| **Overall GEO Score** | | | **30/100** |

---

## Critical Issues (Fix Immediately)

### 1. Zero factual density across all pages
No statistics, ROI figures, timelines, project counts, or measurable outcomes anywhere on the site. AI systems have nothing concrete to cite. Two unsourced claims ("10% of potential", "most Copilot deployments fail") actively damage credibility with LLMs trained to detect unsubstantiated assertions.

**Fix:** Add 3-5 specific metrics to each page. Example: "Reduced time-to-shortlist from 4 hours to 45 minutes" on a case study.

### 2. Entity collision with other "Engine AI" companies
A UK data analytics firm and a Chinese robotics company (which has a Wikipedia page) both use the "Engine AI" name. AI systems will associate queries about "Engine AI" with those companies, not the NZ consultancy.

**Fix:** Add Organization schema with `legalName: "Engine AI Consulting Limited"`, `areaServed: "New Zealand"`, and `sameAs` links to LinkedIn profiles and GitHub org. Register on Wikidata as a distinct entity.

### 3. No FAQ or question-answering content
Zero FAQ sections across all five pages. When someone asks an AI "What is AI orchestration for business?" or "Best AI consultancy in New Zealand?", engineai.co.nz offers no structured answer to extract.

**Fix:** Add a 3-5 question FAQ section to each service page with direct, factual 2-3 sentence answers.

### 4. Anonymous case studies with no outcomes
Three case studies describe generic businesses ("a recruitment firm", "a trade company") with no names, no metrics, no results. These are functionally invisible to AI citation systems.

**Fix:** Get permission from at least one client (Stellar is the obvious candidate) for a named case study with measurable outcomes.

---

## High Priority Issues

### 5. No blog or long-form content
Five thin pages (~3,800 words total) give AI systems very little to index. No thought leadership, no technical writing, no methodology deep-dives.

**Fix:** Publish 3-5 technical blog posts covering AI orchestration methodology, Claude vs Copilot decision frameworks, and real deployment lessons.

### 6. No definitions of key terms
Core concepts like "AI orchestration", "Agent-as-a-Service", and "agent deployment" are never defined. These are terms people actively ask AI about.

**Fix:** Add definition blocks to relevant pages. Example: "AI orchestration is the practice of connecting, coordinating, and managing multiple AI agents across a business's existing systems."

### 7. No partner or certification badges
No Microsoft Partner status, no "Built with Claude" badge, no NZBN displayed. Easy trust signals that AI systems weight for authority.

**Fix:** Add partner badges and NZBN to footer across all pages.

### 8. No Content-Security-Policy header
Missing CSP, X-Frame-Options, and X-Content-Type-Options headers. Security signals contribute to trust scoring.

**Fix:** Add security headers via Vercel configuration or Next.js middleware.

### 9. Founder credentials lack specifics
Bios mention backgrounds but no years of experience, no named employers, no specific achievements. LLMs weight structured biographical data heavily.

**Fix:** Expand founder bios: "Ben du Chateau brings 15+ years in enterprise technology across telco and government sectors" (with specifics).

### 10. Zero external platform presence
No LinkedIn company page found in search results. GitHub org (engineai-nz) has no public repos indexed. No YouTube, Reddit, Crunchbase, or directory listings.

**Fix:** Create/claim LinkedIn company page, make at least one GitHub repo public, submit to Clutch and NZ AI directories.

---

## Medium Priority Issues

### 11. Incomplete schema markup
ProfessionalService and WebSite JSON-LD exist (good), but missing: Service schema on service pages, Person schema for founders, FAQPage schema, BreadcrumbList on inner pages.

### 12. Images missing alt text
hero.webp, who-we-are.png, how-we-work.webp, and why-now.webp all lack alt text. Founder photos and product icons have alt text (good).

### 13. No explicit AI crawler directives in robots.txt
AI crawlers are allowed by default, but explicit `User-Agent` rules for GPTBot, ClaudeBot, and PerplexityBot signal intent and future-proof access.

### 14. llms.txt only resolves on www subdomain
Bare domain engineai.co.nz 308-redirects to www, so crawlers hitting the bare domain may not find llms.txt directly.

### 15. Canonical URL mismatch
Canonical is set to `https://engineai.co.nz` but site serves from `https://www.engineai.co.nz`. Minor inconsistency.

---

## Low Priority Issues

### 16. No testimonials with real names
Even first-name-and-company attributions would improve trust signals.

### 17. No indicative pricing
"Sprint Build Cards" model is mentioned but never quantified. Even price ranges help AI systems answer "How much does AI consulting cost in NZ?"

### 18. High script chunk count
9+ async script chunks loaded. Bundle splitting is good but count is high for a 5-page site.

### 19. Missing Referrer-Policy and Permissions-Policy headers

### 20. No mobile-specific meta tags beyond viewport

---

## Category Deep Dives

### AI Citability (22/100)

The site relies on punchy marketing copy rather than extractable factual statements. No definitions, no statistics, no methodologies explained in citable depth.

| Dimension | Score |
|---|---|
| Quotable passages | 18/100 |
| Question-answering content | 15/100 |
| Factual density | 8/100 |
| Content structure | 35/100 |
| Uniqueness | 30/100 |

**Strongest signal:** The Discover/Build/Orchestrate methodology and OpenClaw positioning are genuinely unique. But neither is articulated with enough depth to cite.

**Weakest signal:** Factual density. Zero data points across 3,800 words.

### Brand Authority (12/100)

| Dimension | Score |
|---|---|
| Third-party mentions | 2/20 |
| Entity recognition | 2/20 |
| Founder authority | 4/20 |
| Social proof | 1/20 |
| Platform diversity | 3/20 |

**Critical finding:** "Engine AI" collides with a UK data analytics firm (Crunchbase listed) and a Chinese robotics company (Wikipedia page). AI models will associate the name with those entities, not the NZ consultancy.

**Platform presence map:**

| Platform | Status |
|---|---|
| LinkedIn (company) | Not found |
| LinkedIn (founders) | Present, no Engine AI content |
| GitHub (engineai-nz) | Not indexed (private repos) |
| YouTube | No presence |
| Reddit | No mentions |
| Crunchbase | Not listed |
| NZ AI directories | Not listed |

### Content E-E-A-T (34/100)

| Dimension | Score |
|---|---|
| Experience | 11/25 |
| Expertise | 10/25 |
| Authoritativeness | 4/25 |
| Trustworthiness | 9/25 |

**Biggest gap:** Authoritativeness (4/25). Zero third-party validation on-site. No named clients, no press, no conference talks, no partner badges, no awards.

**Best signal:** Trustworthiness basics are covered (privacy policy, location, contact email). But no NZBN, no testimonials, no pricing transparency.

### Technical GEO (72/100)

| Dimension | Score |
|---|---|
| AI crawler access | 18/25 |
| llms.txt | 14/15 |
| Meta tags | 14/15 |
| Server-side rendering | 15/15 |
| Page speed | 7/10 |
| Security headers | 6/10 |
| Mobile optimisation | 8/10 |

**Strongest area overall.** Next.js SSR on Vercel CDN with cache HITs, valid sitemap, complete OG/Twitter cards, llms.txt with entity disambiguation. This is the one category where Engine AI scores well.

**Main gaps:** Missing security headers (CSP, X-Frame-Options) and no explicit AI crawler directives.

### Schema & Structured Data (25/100)

| Schema Type | Status |
|---|---|
| ProfessionalService | Present (homepage) |
| WebSite | Present (homepage) |
| Service | Missing (service pages) |
| Person | Missing (founders) |
| FAQPage | Missing (no FAQ content exists) |
| BreadcrumbList | Missing (inner pages) |
| SiteNavigationElement | Missing |

**What exists:** ProfessionalService with @id, legalName, foundingDate, areaServed. WebSite with publisher reference. This is a solid foundation to build on.

**What's missing:** Service schema on /claude, /copilot, /openclaw, /builds. Person schema for founders. FAQ content + FAQPage markup. Breadcrumbs.

### Platform Optimization (18/100)

| Platform | Score | Key Gap |
|---|---|---|
| Google AI Overviews | 5/20 | No FAQ triggers, weak E-E-A-T signals |
| ChatGPT / SearchGPT | 4/20 | Entity not recognised, no quotable content |
| Perplexity | 4/20 | Low factual density, nothing source-worthy |
| Gemini | 3/20 | Zero structured data hooks for entity understanding |
| Bing Copilot | 2/20 | Minimal Bing indexing, no brand signals |

---

## Quick Wins (Implement This Week)

1. **Add FAQ sections to all 4 service pages** with 3-5 questions each. Use FAQPage schema. Expected impact: +15-20 points on citability, unlocks featured snippets.
2. **Add Service JSON-LD to each service page** linking back to Organization. Expected impact: +10-15 points on schema score.
3. **Add Person JSON-LD for both founders** with jobTitle, worksFor, sameAs (LinkedIn). Expected impact: +5 points on schema, +5 on E-E-A-T.
4. **Fix the 4 images missing alt text.** Five-minute task.
5. **Add explicit AI crawler Allow directives** in robots.txt for GPTBot, ClaudeBot, PerplexityBot, Google-Extended.

## 30-Day Action Plan

### Week 1: Content Foundation
- [ ] Write definitions for "AI orchestration", "Agent-as-a-Service", "AI deployment"
- [ ] Add FAQ sections (3-5 questions) to /claude, /copilot, /openclaw, /builds
- [ ] Add 3+ specific metrics to homepage case studies
- [ ] Remove or cite the two unsourced claims
- [ ] Fix missing alt text on 4 images

### Week 2: Structured Data
- [ ] Add Service schema to all 4 service pages
- [ ] Add Person schema for both founders with full credentials
- [ ] Add FAQPage schema wrapping new FAQ sections
- [ ] Add BreadcrumbList to all inner pages
- [ ] Add security headers (CSP, X-Frame-Options, X-Content-Type-Options)

### Week 3: Authority Building
- [ ] Get named case study from Stellar (or any client) with measurable outcomes
- [ ] Create/claim LinkedIn company page with regular posting cadence
- [ ] Make at least 1 GitHub repo public (OpenClaw showcase?)
- [ ] Submit to Clutch, DesignRush, and ensun.io NZ AI directories
- [ ] Add NZBN and partner badges to footer

### Week 4: Content Scale
- [ ] Publish first blog post (AI orchestration methodology deep-dive)
- [ ] Publish second blog post (Claude vs Copilot decision framework for NZ businesses)
- [ ] Expand founder bios with specific years, employers, achievements
- [ ] Add explicit AI crawler directives to robots.txt
- [ ] Ensure llms.txt accessible on bare domain
- [ ] Register Engine AI Consulting Limited on Wikidata for entity disambiguation

---

## Appendix: Pages Analysed

| URL | Title | GEO Issues |
|---|---|---|
| engineai.co.nz | Engine AI -- AI Consulting & Agent Development \| NZ | 8 (no FAQ, no factual data, images missing alt, anonymous case studies) |
| engineai.co.nz/claude | Claude for Teams -- Deploy Claude Co-Work, Chat & Code | 5 (no FAQ, unsourced claim, no Service schema, thin content) |
| engineai.co.nz/copilot | Microsoft Copilot & Copilot Studio Deployment NZ | 5 (no FAQ, unsourced claim, no Service schema, no images alt) |
| engineai.co.nz/openclaw | OpenClaw -- Open Source AI Orchestration Platform | 4 (no FAQ, no Service schema, no GitHub link, technically vague) |
| engineai.co.nz/builds | Bespoke Builds -- Custom Dashboards, Tools & AI Automations | 4 (no FAQ, no Service schema, no pricing signals) |

---

*Report generated by GEO-SEO Claude audit skill. Methodology based on Georgia Tech / Princeton / IIT Delhi 2024 GEO research.*

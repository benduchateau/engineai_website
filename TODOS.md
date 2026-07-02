# TODOS.md — Engine AI Website
**Last updated:** 21 March 2026

---

## Pre-Ship (required before deploying to engineai.co.nz)

### 1. Sanitise form input + add rate limiting — DONE
Escaped HTML entities in user input. Added IP-based rate limiting (5/hour).

### 2. Add "The Gap" to nav — DONE
Added `id="the-gap"` to section, added nav entry. Scroll spy tracks it.

### 3. Design branded contact form success state — DONE
Gold checkmark icon, warm copy, confirmation email mention, direct email fallback.

### 4. Add auto-confirmation email (best-effort) — DONE
Branded HTML confirmation email via Resend. Best-effort: logged but not surfaced on failure.

### 5. Add error fallback mailto inside error state — DONE
Fallback mailto link shown inline below error message.

### 6. Add founder headshots — DONE
Converted JPEGs to 400x400 WebP (7-8KB each). Replaced JW/BD initials with `next/image` components. Circular crop via existing overflow-hidden container.

### 7. Remove adoption speed bar chart — DONE
Removed the Internet/Cloud/Mobile/AI bar chart from Why Now section.

### 8. Add skip-to-content link + `<main>` landmark — DONE
Added visually hidden skip link, wrapped content in `<main id="main-content">`.

### 9. Add LinkedIn links + privacy policy modal to footer — DONE
LinkedIn links for Ben and Joe. Privacy modal with NZ Privacy Act 2020 compliant content.

### 10. Create OG image + wire metadata — DONE
Dynamic OG image via Next.js ImageResponse. Twitter card metadata added. metadataBase set.

### 11. Fix CLAUDE.md — DONE
Updated framework to server-side, forms to Resend, gold to #C4A35A.

---

## Post-Ship (add when ready)

### Add social proof section
Client logos, anonymised outcome metrics, or mini case studies. Blocked on Stellar going live.

### Conversion copy rewrite (from design doc)
Rewrite The Gap from stats-first to "you"-first. Add "Does This Sound Familiar?" scenario section. Add anonymised case vignettes. Requires 3 user tests first (design doc hard gate).

### AI Readiness Assessment
Interactive self-serve diagnostic tool (Approach C from office-hours design doc). Lower-friction entry point for cold visitors.

### Harden contact form API
Codex adversarial review flagged: silent send failures, no CAPTCHA, spoofable rate limit, no input size validation. Acceptable for launch but should be addressed.

---

## Status: SHIPPED. Merged and deployed 21 March 2026. Live at www.engineai.co.nz.

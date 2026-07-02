# Engine AI Website — Design Critique

**URL:** https://engineai-website.vercel.app/
**Reviewed:** 17 March 2026
**Reviewer:** Design Critique Agent

---

## First Impression (2-Second Test)

**What draws the eye first:** The hero headline — large, light-weight serif/sans-serif type on a dark Auckland skyline backdrop. The bold portion ("Most businesses are watching it happen to them") punches hard and creates an immediate emotional hook.

**Emotional reaction:** Serious, premium, a little ominous. This feels like a high-end consultancy that doesn't mess around. The dark palette and moody photography set a tone of gravity and urgency.

**Is the purpose immediately clear?** Mostly. The tagline "AI Orchestration for NZ Business" is crisp, but it sits in a small, all-caps letterpress style that's easy to miss. The hero headline is about the *problem*, not the *solution* — which is a deliberate copywriting choice that works, but a first-time visitor might need a beat longer to understand what Engine AI actually *does*.

**Verdict:** Strong opening. The copy does the heavy lifting. The visual tone is distinctive and confident.

---

## What Works Well

### 1. Copy is exceptional
The writing throughout is sharp, direct, and avoids the usual AI consultancy fluff. Lines like "That's not a technology problem. It's a translation problem" and the blockquote about competitors outpacing you — these land. The copy has a clear voice that feels human and opinionated. This is a genuine differentiator.

### 2. Section pacing and narrative flow
The page reads like a pitch deck: problem → gap → who we are → who we serve → how we work → principles → CTA. Each section builds on the last. The "How We Work" section (Discover / Build / Orchestrate) is clean and easy to scan. The principles section ("Go where the pain is", "Ship, then iterate") reinforces credibility.

### 3. Sticky navigation with active section highlighting
The nav correctly highlights the current section as you scroll (About, Clients, How We Work, Principles, Contact). This is a nice UX touch that helps orientation on a long single-page site.

### 4. Photography choices
The background images — Auckland skyline, workshop/warehouse, gears, calipers, door with light — are atmospheric and thematically consistent. They lean into a "precision engineering" and "real business" aesthetic rather than generic AI/tech stock imagery. The gears motif for "How We Work" is particularly on-brand.

### 5. Contact form is well-positioned
The contact section pairs a warm, low-pressure CTA ("Start with a conversation. No pitch. No obligation.") with a simple form. The "What's your biggest operational headache right now?" field is a smart touch that lowers the barrier and invites a real conversation.

---

## Issues & Recommendations

### CRITICAL: Contrast & Readability

**Problem:** This is the single biggest issue on the site. The entire page is dark-on-dark — light grey text (#999-ish or lower) on dark backgrounds with busy photographic textures. Multiple sections fail WCAG AA contrast requirements badly.

Specific failures:
- Body copy throughout sits at roughly 3:1 or lower contrast ratio against the dark photographic backgrounds. WCAG AA requires 4.5:1 for normal text and 3:1 for large text.
- The "THE GAP" section label, stat descriptions ("OF NZ SMES", "OF CEOS"), and the body paragraphs in the About section are particularly hard to read.
- The co-founder bios (Joe Ward and Ben du Chateau) are rendered in light grey on a dark, textured café photo — very difficult to read.
- The contact form fields (Name, Company, Email, Phone) have placeholder text that nearly disappears into the dark background.
- The "Let's Talk" section heading and sub-copy over the binoculars/coffee image are extremely low contrast.

**Recommendation:** Add semi-transparent dark overlays (rgba(0,0,0,0.6-0.7)) behind text-heavy sections, or switch body copy to pure white (#fff) instead of grey. Alternatively, use solid dark backgrounds for text sections rather than relying on photos. The hero section does this slightly better because the Auckland skyline is already quite dark — apply that same discipline throughout.

### HIGH: Visual Monotony

**Problem:** Every section is dark. Every background is a darkened photo. There's no visual relief anywhere on the page. After the hero, the reader enters a tunnel of near-black sections that all blend together. Despite the good copy, there's no visual signal that you've moved from one idea to the next. The "The Gap" stats, the About section, the Clients section, and the How We Work section all *feel* the same visually.

**Recommendation:** Introduce at least one or two sections with a contrasting treatment — a slightly lighter dark (charcoal #1a1a1a vs near-black), a subtle gradient shift, or even a single section with an inverted (light) colour scheme. The stats section (68% / 75%) would be a great candidate for a slightly different treatment to make those numbers really pop. Even something as simple as alternating between "photo background" and "solid dark background" sections would add rhythm.

### HIGH: Stats Section — Numbers Don't Animate Convincingly

**Problem:** The stats (68% of NZ SMEs / 75% of CEOs) are displayed in a large, thin typeface. When I first scrolled to this section, I saw "25%" and "28%" — which then changed to "68%" and "75%". This appears to be a count-up animation, but it was janky and the initial numbers were confusing (I briefly thought those were the real stats). The animation triggers timing seems off — it appears to fire before the section is fully in view.

**Recommendation:** Either tighten the animation so it completes in a shorter window (0.8-1s) once the element is 50%+ in viewport, or remove the animation entirely and let the numbers stand on their own. The stat descriptions are strong enough without the gimmick.

### MEDIUM: Hero CTAs Lack Hierarchy

**Problem:** The two hero buttons — "Talk to us →" (filled white) and "See how we work ↓" (outlined/ghost) — are nearly the same visual weight. The filled button should clearly dominate as the primary action, but the ghost button is quite prominent too.

**Recommendation:** Increase the visual gap. Make "Talk to us" slightly larger or give it a brand accent colour (even a subtle teal or warm tone from the background imagery). Reduce the ghost button's border weight or make it text-only with an arrow. The goal is one clear primary and one clear secondary.

### MEDIUM: Founder Bio Section Layout

**Problem:** The founder bios (Joe Ward and Ben du Chateau) are presented as two equal text blocks side-by-side over a dark café/office photo. There's a lot of body text here with no visual relief — no headshots, no icons, no cards, nothing to break up the wall of words. For a section about *people*, it feels surprisingly impersonal.

**Recommendation:** Add headshots (even small, circular ones). Put each bio in a subtle card container with a slight background tint. Consider a slightly more structured layout — name + title on the left, bio text on the right — rather than just stacking text.

### MEDIUM: Client Personas Need More Breathing Room

**Problem:** The three client persona cards (01, 02, 03) are rendered as semi-transparent glassmorphism-style cards over the warehouse photo. They work conceptually but are crammed together with minimal padding, and the text inside is quite small. The descriptions get cut off at the bottom of the viewport as you scroll, making them feel rushed.

**Recommendation:** Give these cards more vertical padding inside, increase the text size slightly, and ensure there's more scroll space so all three are fully visible together before the user moves past them. A subtle hover effect (slight scale or opacity change) would also signal interactivity, even if they're not clickable.

### MEDIUM: Missing Social Proof

**Problem:** For a site that's selling trust and capability, there are no client logos, testimonials, case studies, or outcome metrics. The "Our Clients" section describes *types* of clients but doesn't name anyone or show any work. This is a significant gap for enterprise/government buyers who want validation.

**Recommendation:** Add a logo strip of clients you can name. Even 3-4 anonymised mini case studies ("A logistics company with 60 staff reduced dispatch time by 40%") would add enormous credibility. If you can't name clients yet, consider adding a "Results" section with outcome metrics.

### LOW: Footer is Bare

**Problem:** The footer is a single line — Engine AI logo, "Auckland, New Zealand", the domain and email. No social links, no sitemap, no secondary navigation, no legal links (privacy, terms).

**Recommendation:** For a professional services site, add at least: LinkedIn link, a brief tagline, and a privacy policy link. You don't need to overload it, but the current footer feels incomplete.

### LOW: Mobile Responsiveness (Untested)

I reviewed this at desktop resolution. Given the heavy reliance on background images with overlaid text, and the two-column layouts (stats, bios), this site is likely to have readability issues at mobile breakpoints. The contact form sitting beside the binoculars image in the CTA section probably needs a single-column stack on mobile.

**Recommendation:** Test on iPhone SE (smallest common viewport) and verify all text sections remain readable. The stat numbers may need to reduce in size.

---

## Accessibility Summary

| Check | Status | Notes |
|-------|--------|-------|
| Text contrast (AA) | FAIL | Body copy consistently below 4.5:1 ratio against photo backgrounds |
| Large text contrast (AA) | MARGINAL | Headlines are closer but still inconsistent on busy backgrounds |
| Touch targets | OK | Buttons and nav links appear adequately sized |
| Focus indicators | UNKNOWN | Not tested — keyboard navigation not verified |
| Alt text | UNKNOWN | Not inspected via DOM |
| Heading hierarchy | APPEARS OK | Section labels → headings → body copy follows logical order |
| Motion/animation | CAUTION | Stat counter animation has no reduced-motion fallback visible |

---

## Priority Action List

1. **Fix text contrast across the entire site** — this is a must-ship-now issue. Add overlays, darken backgrounds further behind text, or switch to white body copy. Every section has this problem.
2. **Break the visual monotony** — introduce at least one section with a different background treatment to create rhythm and section differentiation.
3. **Add social proof** — logos, metrics, mini case studies. Anything that proves capability beyond the (admittedly strong) copy.
4. **Add founder headshots** — humanise the About section.
5. **Fix the stat counter animation timing** — or remove it.
6. **Improve hero CTA hierarchy** — make the primary action unmissable.
7. **Flesh out the footer** — LinkedIn, privacy policy, secondary nav.

---

## Overall Assessment

The bones are excellent. The copy is best-in-class for an NZ AI consultancy — direct, human, confident, and opinionated. The site structure and narrative flow are well-considered. The photography choices avoid the generic AI clichés. The brand identity (dark, mechanical, precision-focused) is distinctive and memorable.

The execution has one fundamental flaw: **readability**. The commitment to the dark aesthetic has been taken too far, sacrificing legibility for atmosphere. Nearly every text section on the page would benefit from better contrast treatment. Fix that, add some social proof, and this goes from a good-looking site to a genuinely effective sales tool.

**Rating: 6.5/10** (copy: 9/10, visual design: 7/10, readability: 4/10, credibility signals: 5/10)

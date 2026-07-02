---
name: Engine AI
description: Near-black canvas, warm off-white text, light-weight Inter headlines, UPPERCASE JetBrains Mono labels, and gold — used sparingly — as the only accent.
colors:
  gold: "#C4A35A"
  gold-ink: "#8A6C2A"
  bg-primary: "#0A0A0A"
  bg-surface: "#111111"
  bg-card: "#0C0C0CE6"
  text-primary: "#FFFFFF"
  text-body: "#E8E6E1"
  text-secondary: "#ACA69B"
  text-muted: "#918B80"
  border: "#FFFFFF12"
  border-subtle: "#FFFFFF0A"
  copilot-blue: "#0078D4"
  openclaw-teal: "#2B8C8C"
  builds-green: "#4CAF50"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5.5vw, 4.5rem)"
    fontWeight: 300
    lineHeight: 1.12
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 3.5vw, 3.75rem)"
    fontWeight: 300
    lineHeight: 1.15
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.3
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.34em"
rounded:
  none: "0px"
  card: "0.5rem"
  card-feature: "1.75rem"
  pill: "9999px"
spacing:
  xs: "0.75rem"
  sm: "1.25rem"
  md: "1.5rem"
  lg: "2.5rem"
  section: "6rem"
  section-desktop: "8rem"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "#000000"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  card:
    backgroundColor: "{colors.bg-card}"
    textColor: "{colors.text-body}"
    rounded: "{rounded.card}"
    padding: "24px"
  input-line:
    backgroundColor: "transparent"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.none}"
    padding: "12px 0px"
---

# Design System: Engine AI

> Source of truth: the canonical design system at `~/projects/engineai/design-system/` (`DESIGN.md` + `colors_and_type.css`, GitHub: engineai-nz/engineai-brand). This file maps that system onto this Next.js + Tailwind 4 codebase. On conflict, the canonical repo wins. Tokens live in `app/globals.css` `@theme` — there is no tailwind.config.

## 1. Overview

**Creative North Star: "The Engine Room"**

A dark, machined space where serious work happens. Near-black canvas (#0A0A0A), warm off-white text, headlines set light — never bold — and one gold accent used the way brass fittings are used on industrial machinery: rarely, deliberately, where your hand goes. The system communicates calm authority for a two-operator NZ AI consultancy whose visitors are sceptical business owners, not developers. Whitespace and type scale carry the hierarchy; ornament is close to zero.

The system explicitly rejects: startup-bro SaaS aesthetics (gradient text, hero metrics, purple-neon "AI" glow), big-consultancy stock-photo gloss, light-theme corporate minimalism, and AI-guru urgency. If a treatment would look at home on a course-seller's funnel page, it is wrong here.

**Key Characteristics:**
- Dark throughout; no light sections, ever
- Light-weight Inter headlines at large sizes; negative tracking, tight leading
- UPPERCASE JetBrains Mono for labels, numbers, and eyebrows; wide tracking
- One gold accent; product accents (blue/teal/green) scoped to their own sub-pages
- Full-bleed monochrome photography under heavy dark overlays
- Motion is entrances-only, ease-out, subtle

## 2. Colors

A committed dark monochrome with a single gold voice; warmth comes from the off-white text ramp, not from the background.

### Primary
- **Machined Gold** (#C4A35A): THE accent. CTAs, 3px card top-bars, eyebrow labels, the one emphasised headline clause, focus states. Fills and borders stay this value everywhere.
- **Gold Ink** (#8A6C2A): gold as *text on light surfaces only* (print, proposals). Flat gold is unreadable on white. Never used on the dark site itself.

### Tertiary
- **Copilot Blue** (#0078D4), **OpenClaw Teal** (#2B8C8C), **Builds Green** (#4CAF50): product sub-page accents. One per page, never mixed, never on the homepage beyond that product's card.

### Neutral
- **Near-Black Canvas** (#0A0A0A): page background and default section colour.
- **Surface** (#111111): alternating section band; the only "elevation" most sections get.
- **Card Fill** (#0C0C0CE6): near-opaque dark card background over ambient texture.
- **Headline White** (#FFFFFF): headlines and hover end-states only.
- **Warm Off-White** (#E8E6E1): body copy.
- **Warm Secondary** (#ACA69B): labels, mono captions, de-emphasis (~7:1 on canvas).
- **Warm Muted** (#918B80): body-size de-emphasis only (~5.8:1).
- **Hairline** (#FFFFFF12) / **Hairline Subtle** (#FFFFFF0A): 1px borders and dividers.

### Named Rules
**The One Accent Rule.** Gold appears on well under 10% of any viewport. Its rarity is the authority. If two gold elements compete in one fold, one of them is wrong.
**The No Hand-Picked Grey Rule.** `#888`, `#555`, and any other improvised grey are prohibited. Use the two warm grey tokens. (The shipped `globals.css` still carries `#888888`/`#555555` — migrate to `#ACA69B`/`#918B80` on next touch; canonical wins.)
**The Dim-Small Ban.** Muted (#918B80) is for body-size text (≥14px) only. Small text and mono labels always use Secondary. Dim + small is unreadable.

## 3. Typography

**Display Font:** Inter (system-ui fallback), weight 300
**Body Font:** Inter, weight 400
**Label/Mono Font:** JetBrains Mono, UPPERCASE

**Character:** Machined restraint. Large-and-light headlines read as confidence; the mono labels read as engineering discipline. No decorative fonts anywhere.

### Hierarchy
- **Display** (300, clamp(2rem, 5.5vw, 4.5rem), 1.12, -0.04em): hero H1 only. The emphasised clause steps to weight 400 or gold — never bold.
- **Headline** (300, clamp(1.875rem, 3.5vw, 3.75rem), 1.15, -0.04em): section H2s.
- **Title** (500, 1.5rem, 1.3): card titles, founder names.
- **Body** (400, 1rem–1.125rem, 1.8): copy capped at 680px measure (~70ch).
- **Label** (400, 11px, 0.34em tracking, UPPERCASE, JetBrains Mono): eyebrows, numbers, badges. 11px is the absolute floor site-wide.

### Named Rules
**The Light-Not-Bold Rule.** Headlines are never bold. Emphasis comes from size, weight-300-vs-400 contrast, or the single gold clause. Bold headlines read as shouting; this brand doesn't shout.
**The Mono-Means-Metadata Rule.** JetBrains Mono marks metadata (labels, numbers, tags), never prose. If it's a sentence, it's Inter.

## 4. Elevation

Depth is conveyed by hairline borders and background-band alternation (#0A0A0A ↔ #111111), not shadows. Surfaces are flat at rest; the near-opaque card fill over ambient texture does the separating.

### Shadow Vocabulary
- **Feature lift** (`box-shadow: 0 24px 80px rgba(0,0,0,0.32)`): reserved for hero-level feature cards (radius 1.75rem, optional `backdrop-filter: blur(24px) saturate(140%)`). At most one per page.

### Named Rules
**The Borders-Before-Shadows Rule.** Reach for a 1px `#FFFFFF12` border first. If a card needs a shadow to be legible, the layout is at fault, not the shadow.

## 5. Components

### Buttons
- **Shape:** pill (9999px radius)
- **Primary:** gold fill (#C4A35A), black text, sentence case, semibold, padding 12px 24px. Hover: `translateY(-2px)` + `brightness(1.1)`, 300ms ease-out. (Sub-page CTAs currently ship square-cornered `rounded`; canonical is pill — align on next touch.)
- **Ghost:** transparent pill, 1px #FFFFFF1F border, JetBrains Mono UPPERCASE label in Warm Secondary. Hover: text → white, border → gold at 24%.

### Cards / Containers
- **Corner Style:** 0.5rem standard; 1.75rem feature variant
- **Background:** Card Fill (#0C0C0CE6)
- **Border:** 1px #FFFFFF12; accent variant adds the signature **3px gold top bar** (never a side stripe)
- **Shadow Strategy:** none at rest; Feature lift on the one hero-level card
- **Hover:** `translateY(-4px)`, border → gold/20, 500ms
- **Internal Padding:** 24px

### Inputs / Fields
- **Style:** underline-only — transparent background, 1px bottom border (#FFFFFF12), no boxes, no rounded fields
- **Focus:** bottom border → gold, no ring
- (Shipped contact form uses boxed rounded inputs — drift; migrate to `.input-line` pattern on next touch.)

### Navigation
- Fixed top, transparent at page top; after `scrollY > 50`: #0A0A0A at 90% + blur + 1px bottom hairline. Brand left, links centre, gold pill CTA right, all `white-space: nowrap`. Mobile: hamburger with slide-down panel.

### Mono Eyebrow (signature)
- JetBrains Mono, 11px, UPPERCASE, 0.3em+ tracking, Warm Secondary, above section headlines. This is a deliberate, named brand system carried from the canonical repo — keep it consistent, don't multiply variants.

### Team Photos (signature)
- Always `grayscale(100%)`, round, 1px white/20 ring. No colour headshots anywhere.

## 6. Do's and Don'ts

### Do:
- **Do** keep every surface dark: canvas #0A0A0A, bands #111111. No light sections, ever.
- **Do** set headlines light (300) and large; emphasise with the single gold clause or weight 400.
- **Do** use the two warm greys (#ACA69B, #918B80) for all de-emphasis; migrate any `#888`/`#555` you touch.
- **Do** scope product accents to their sub-page: blue #0078D4 on /copilot, teal #2B8C8C on /openclaw, green #4CAF50 on /builds, gold everywhere else.
- **Do** keep body copy at ≤680px measure, leading 1.8.
- **Do** render photography monochrome under a heavy dark overlay (bg-black/75–85), full-bleed.
- **Do** keep motion entrances-only: fade-up 24px, 800ms ease-out, 100–150ms sibling stagger; hover lifts 300–500ms.

### Don't:
- **Don't** use gradient text, hero-metric templates, purple-neon "AI" aesthetics, or robot imagery — the "startup-bro SaaS landing page" anti-reference from PRODUCT.md.
- **Don't** use stock photography as decoration or any placeholder imagery — "grounded over glossy".
- **Don't** use side-stripe borders (border-left/right > 1px as accent). The Engine AI accent is the 3px gold TOP bar.
- **Don't** hand-pick greys, ever (#888, #555 are the named offenders).
- **Don't** use mono for prose, bold for headlines, or all-caps for body copy.
- **Don't** put gold text on light surfaces; that's Gold Ink's (#8A6C2A) job in print contexts only.
- **Don't** add icons by reflex. Near-zero iconography; when genuinely needed: Lucide, 1.5px stroke, gold or white/60, 16–20px.
- **Don't** use exclamation marks, emoji, urgency banners, or countdown timers — "AI-guru course-seller" anti-reference.
- **Don't** write "leverage", "synergy", or "digital transformation" in any UI text.

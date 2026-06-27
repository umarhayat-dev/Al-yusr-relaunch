# AlYusr, Design Tokens & Implementation Spec

Hand this to the build step alongside the research brief. The companion `AlYusr-Design-System.html` is the visual reference; this file is the exact values.

---

## 1. Design direction in one line
Premium but warm Islamic-education brand. Wine maroon on bright bone, soft-contrast serif over a friendly grotesk, and one signature motif, **the colonnade** (the logo's vertical bars), as the connective device. No dark backgrounds, no heavy ornamentation, one restrained brass accent.

---

## 2. Color tokens

```css
:root{
  --wine:        #4A0218; /* primary, buttons, headlines, mark */
  --wine-deep:   #320110; /* press states, footer */
  --wine-700:    #6B1426; /* hover tints, secondary wine */
  --bone:        #FAF6EF; /* page background */
  --bone-2:      #F3ECE1; /* alternate section background */
  --blush:       #EFE2DA; /* soft surfaces, chips, tags */
  --ink:         #2B2126; /* body text (warm near-black) */
  --ink-soft:    #6E6166; /* muted/secondary text */
  --brass:       #B5894E; /* accent ONLY, ticks, tiny details */
  --white:       #FFFFFF; /* cards */
  --line:        rgba(74,2,24,.14); /* hairlines */
  --line-soft:   rgba(74,2,24,.08);
}
```

**Contrast notes:** wine and ink on bone/white pass AA/AAA for text. Brass is decorative only, never body text; only large display or non-text accents. Tailwind users: extend `theme.colors` with these rather than overriding defaults.

---

## 3. Typography

**Load (Google Fonts):**
```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..700,50;1,9..144,300..700,50&family=Hanken+Grotesk:wght@400;500;600;700&family=Noto+Naskh+Arabic:wght@500;700&family=Noto+Nastaliq+Urdu:wght@500&family=Noto+Sans+Devanagari:wght@500;600&display=swap" rel="stylesheet">
```

```css
--font-display:"Fraunces", Georgia, serif;      /* headlines, used with restraint */
--font-body:"Hanken Grotesk", system-ui, sans-serif; /* everything else */
--font-ar:"Noto Naskh Arabic", serif;   /* Arabic */
--font-ur:"Noto Nastaliq Urdu", serif;  /* Urdu (RTL) */
--font-hi:"Noto Sans Devanagari", sans-serif; /* Hindi */
```

- Fraunces weight **400-460** for headings (not heavier, keep it elegant); enable italic for accent words. Letter-spacing −0.01em, line-height ~1.06.
- Hanken **400** body, **600** for buttons/eyebrows/labels.
- **Eyebrows/labels:** Hanken 600, 12.5px, `letter-spacing:.18em; text-transform:uppercase; color:var(--wine-700)`, preceded by a 14px brass tick.

**Type scale (desktop):**
| Role | Family | Size | Weight |
|------|--------|------|--------|
| Display / H1 | Fraunces | clamp(34px,5.6vw,60px) | 430 |
| H2 | Fraunces | clamp(26px,3.6vw,38px) | 430 |
| H3 | Fraunces or Hanken 700 | 22-25px | 430 / 700 |
| Body L | Hanken | 18-19px | 400 |
| Body | Hanken | 17px | 400 |
| Small / caption | Hanken | 13-15px | 400-600 |
| Eyebrow | Hanken | 12.5px | 600 |

**Multi-script / RTL:** wrap Arabic & Urdu in `dir="rtl"` and the right font; Urdu Nastaliq needs `line-height:2`. Mirror layout for RTL pages. Provide a language switcher (EN · हिन्दी · اردو).

---

## 4. The signature: the colonnade

The logo's bars = the system's core motif. Reuse the same vertical-bar unit everywhere so the brand feels inevitable:

- **Hero:** a faint colonnade (opacity ~.07) anchored bottom-right; bars **rise** on load (staggered `translateY(40px)→0`, fade in).
- **Learning pathway:** Qaaidah → Tajweed → Hifz as columns of growing height (≈46% / 70% / 100%); Arabic Conversation as a parallel brass-tinted column. This is the Programs centrepiece.
- **Progress:** a row of small bars, filled = wine, empty = `--line`.
- **Section dividers:** a short centred row of bars, the middle one tallest.
- **List markers:** replace bullets with a 5×18px wine bar.
- **Card accent:** a 46×5px wine tab descending from the top edge of cards.

Keep bars to `border-radius` ~ half-width, top corners only when "standing." Spend the boldness here; keep everything else quiet.

---

## 5. Components

```css
--radius:18px;                /* cards */
--radius-pill:999px;          /* buttons, chips */
--shadow:0 1px 2px rgba(74,2,24,.04), 0 12px 32px -12px rgba(74,2,24,.16);
--space: 4,8,12,16,22,28,40,64,88 px  /* spacing steps; sections ~64px vertical */
```

- **Primary button:** wine bg, `#fdeef0` text, pill, 12×22px; hover → wine-deep + `translateY(-1px)`.
- **Ghost button:** transparent, wine text, `--line` border; hover → wine border + faint wine wash.
- **Card:** white, `--line-soft` border, `--radius`, `--shadow`; optional colonnade top-tab.
- **Tag/chip:** blush bg, wine text, pill, 600 weight.
- **Eyebrow:** see typography.
- **Wine callout block** (e.g. Sponsor): wine bg, warm-pink text (`#f6e6e9`), Fraunces line inside, brass eyebrow tick.
- **Audience toggle pill:** white pill container, active segment wine, for "For my child / For myself".
- **Nav:** sticky, translucent bone + `backdrop-filter:blur`, hairline bottom; logo + wordmark left, links muted→wine on hover, primary CTA right.

---

## 6. Motion
- Hero colonnade rise + text fade-up on load (~0.9s, staggered, `cubic-bezier(.2,.8,.2,1)`).
- Scroll-reveal: sections/cards fade + 12px rise once in view.
- Hover: card lift, button lift, link underline.
- **Always** honour `prefers-reduced-motion: reduce` → collapse to instant/fade, no transforms. (Implemented in the reference file.)

---

## 7. Copy voice
Warm, plain, specific. Name the worry, then answer it. Sell transformation, not features. Never claim credentials you don't have.
- ✗ "High-quality education with qualified teachers." → ✓ "Every teacher is vetted before they ever meet your child."
- ✗ "Enroll now to begin your journey." → ✓ "Book a free trial. If it's not right, you owe nothing."
- Pricing: never "Contact for pricing." → "Fair pricing for your region, set in your free consultation, so learning stays accessible wherever you are."

---

## 8. Quality floor (non-negotiable at build)
Responsive to mobile (scale display down, stack grids); visible keyboard focus rings (wine, 2px offset); RTL support for Urdu/Arabic; reduced-motion respected; semantic headings; alt text; colour-contrast AA on all text. The marketing site and the future portal share these tokens so Phases 2-4 feel like one product.

---

## 9. Logo
A cleaned, transparent, exact-wine version of the mark is embedded in the reference HTML's nav. Ask for the original vector (SVG) from the source if available, it should be used at full fidelity for the real build; the colonnade motif is *derived from* it, not a replacement for it.

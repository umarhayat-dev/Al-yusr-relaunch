# AlYusr Institute - Project Guide

Premium online Islamic education for families (kids 5-14) and adult learners, in India and the Western diaspora. This repo is the Phase 1 marketing website. The job of every page is to build trust and move a parent toward booking a free trial.

Read `docs/AlYusr-User-Research-and-Design-Brief.md` for audience, page intents, and the learning pathway. Read `docs/AlYusr-Design-Tokens.md` for the full visual spec. `docs/AlYusr-Design-System.html` is the rendered reference: match it.

## Stack
React + TypeScript + Vite + TailwindCSS + shadcn/ui + Framer Motion. Component driven, responsive, accessible. Scaffold routes now for `/dashboard`, `/teach`, `/admin` (future phases) even though they are empty.

## Writing rules (strict)
- NEVER use an em dash or en dash anywhere in any file. Use commas, hyphens, parentheses, or rewrite the sentence. A hook blocks commits that contain them.
- Sentence case for headings and buttons. Active voice. Plain, warm, specific.
- Sell the transformation, not the feature. Name the parent's worry, then answer it.
- NEVER claim teacher credentials we do not have (no ijazah, sanad, or named institutions). Our honest trust signals are: vetted teachers, gender-appropriate matching (female teachers for girls and sisters, male for boys and brothers), the free trial, and our method.
- Pricing is set at a free consultation. Never print a fixed price; frame it as fair pricing for your region.

## Visual system (always apply)
Colors: wine `#4A0218` (primary), wine-deep `#320110`, wine-700 `#6B1426`, bone `#FAF6EF` (bg), bone-2 `#F3ECE1`, blush `#EFE2DA`, ink `#2B2126` (text), ink-soft `#6E6166`, brass `#B5894E` (accent only, sparingly). Bright and warm, never a dark theme.
Type: display = Fraunces (weight 400-460, restrained), body = Hanken Grotesk. Arabic = Noto Naskh Arabic, Urdu = Noto Nastaliq Urdu (RTL), Hindi = Noto Sans Devanagari.
Signature motif: the colonnade (the logo's vertical bars). Reuse the same vertical-bar unit as the learning pathway (Qaaidah to Tajweed to Hifz as growing columns), progress bars, section dividers, and list markers. Logo lives at `docs/alyusr-logo.png` (ask the owner for an SVG for production).

## Quality floor
Responsive to mobile, visible keyboard focus (wine ring), reduced-motion respected, RTL for Urdu and Arabic, AA contrast, semantic headings, alt text. The marketing site and future portal share these tokens.

## How we work here
Build one page at a time. Use the `page-builder` agent to build, the `design-guardian` agent to review against this spec before moving on, and the `copy-editor` agent for on-page words. Page order: Home, For Parents, How It Works, Programs, Sponsor, About, Success, FAQ, Apply.

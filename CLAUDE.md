# CLAUDE.md — Portfolio Website Project Brief

> **How to use this file:** Save it as `CLAUDE.md` in the root of your portfolio repo. Claude Code reads it automatically on every session, so it always knows the project context, conventions, and goals without you re-explaining. Update it as the project evolves.

---

## 1. Project Overview

A personal portfolio website for **Simon Mwangi Waweru** — a full-stack developer and designer based in Nairobi, Kenya. The site's primary job is to land developer/AI roles and freelance clients by showcasing real, shipped projects.

**Positioning (in order):**
1. Full-stack developer (lead with this)
2. AI/ML engineer (rising focus)
3. Designer (the visual craft is on display *through* the site itself)

**One-line pitch to bake into the site:** *Full-stack developer who ships real products — from USSD marketplaces to AI business tools — with a designer's eye.*

---

## 2. Goals & Success Criteria

- Convince a recruiter or client in **under 30 seconds** that Simon builds real, working software.
- Make projects the centerpiece — depth over quantity.
- Feel **bold and creative** (proves design ability) while staying fast, accessible, and professional.
- Be trivially easy to add new projects and blog posts over time.
- Rank for "Simon Mwangi Waweru" and be shareable with strong social/OG previews.

**Definition of done for v1:** deployed on Vercel, mobile-perfect, 90+ Lighthouse across the board, all featured projects present, CV downloadable, blog scaffold live.

---

## 3. Target Audience

1. **Tech recruiters / hiring managers** — want proof of shipped work and a clean CV.
2. **Freelance clients** (e.g. Kenyan SMEs, startups) — want to see relevant, real projects and easy contact.
3. **Fellow developers / community** — GitHub, blog, technical depth.

Design decisions should serve audience #1 and #2 first.

---

## 4. Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | **Next.js (App Router)** | Use latest stable. TypeScript. |
| Styling | **Tailwind CSS** | Utility-first. Use a small set of custom design tokens (see §6). |
| Language | **TypeScript** | Strict mode on. |
| Content | **MDX** for blog + a typed `projects.ts` data file | Keeps content editing simple, no CMS needed for v1. |
| Icons | **lucide-react** | Consistent, lightweight. |
| Animation | **Framer Motion** | Tasteful motion only — no gratuitous effects. |
| Fonts | **next/font** (self-hosted Google fonts) | See typography in §6. |
| Deployment | **Vercel** | Free tier. Connect the GitHub repo for auto-deploys. |
| Analytics | **Vercel Analytics** (optional) | Privacy-friendly, one line to add. |

**Constraints for Claude Code:**
- Prefer server components; use `"use client"` only where interactivity is needed (nav toggle, theme, motion).
- No heavy UI libraries. Build components by hand with Tailwind so the design stays distinctive.
- Keep dependencies minimal and justified.

---

## 5. Site Structure

Single-page-feel with anchored sections, plus separate routes for blog and individual projects.

```
/                     → Home (hero, featured projects, about teaser, skills, contact)
/projects             → All projects grid
/projects/[slug]      → Individual project case study
/blog                 → Blog index
/blog/[slug]          → Individual post (MDX)
/cv                   → (optional) or just a download link to the PDF
```

**Home page section order:**
1. **Hero** — name, one-line positioning, primary CTA (View Projects) + secondary (Download CV).
2. **Featured Projects** — 2–3 strongest, large cards/case-study teasers.
3. **About** — short, punchy. Who Simon is + the JKUAT/AIESEC/KEFRI context.
4. **Skills & Stack** — grouped (Frontend, Backend, AI/ML, Design, Tools).
5. **Experience** — brief timeline (Parksby, AIESEC, KEFRI, freelance).
6. **Contact** — email + LinkedIn + GitHub links (no form for v1).

---

## 6. Design Direction — "Bold & Creative"

The site itself is the design portfolio, so it must look intentional and distinctive — not a template.

**Vibe:** confident, modern, a little playful. Big expressive typography, generous negative space, one strong accent color, purposeful motion. Think "designer-developer who has taste," not "corporate template."

**Color (starting palette — adjust freely):**
- Base: near-black `#0A0A0A` / off-white `#FAFAF7`
- Accent: pick ONE bold color and commit — e.g. electric violet `#6D28D9`, or a warm coral `#FF5C39`. (Note: `#34a853` is a Parksby brand color, not Simon's — don't default to it.)
- Support: a muted neutral for cards/borders.
- Decide light-first or dark-first, then make the other a clean toggle later.

**Typography:**
- Display/headings: a characterful sans or grotesque (e.g. *Clash Display*, *Space Grotesk*, or *General Sans*).
- Body: a clean, readable sans (e.g. *Inter*).
- Big, bold headline sizes on the hero. Don't be timid.

**Layout & motion:**
- Strong grid, asymmetry welcome. Oversized section labels.
- Subtle scroll-reveal and hover states via Framer Motion — restrained, never distracting.
- Every project card should feel like a mini-poster (leverage Simon's design instincts).

**Non-negotiables:** fully responsive (mobile-first), accessible (semantic HTML, focus states, alt text, WCAG AA contrast), fast (optimize images with `next/image`).

---

## 7. Content — Featured Projects

Each project needs: title, tagline, role, stack, problem, what was built, outcome, links (live/GitHub), and 1–3 images/screenshots.

### ⭐ Kazi Mtaani — *Informal Worker Marketplace*
- **Tagline:** Connecting Kenya's informal workers to jobs — even without a smartphone.
- **Role:** Full-stack developer (final-year university project).
- **Stack:** Web app + **USSD access** (Africa's Talking), **M-Pesa escrow** payments.
- **Problem:** Many informal workers (fundis, cleaners, casual laborers) lack smartphones/data, so app-only platforms exclude them.
- **Built:** A marketplace where workers register and receive jobs via USSD on any phone, with M-Pesa escrow holding payment until work is confirmed. Full 76-page academic submission (Chapters 4 & 5 written).
- **Why it's impressive:** Solves real inclusion problem; combines web + USSD + payments — genuinely hard integration work.
- **Links:** GitHub (add), live demo (add if available).

### ⭐ SimpleSurvey — *Full-Stack Survey Platform*
- **Tagline:** Build, share, and collect survey responses across web and mobile.
- **Role:** Full-stack developer (pre-interview task for Sky World Limited).
- **Stack:** Node.js/Express + MySQL API · React/Vite/Tailwind web app · React Native/Expo mobile APK.
- **Built:** A complete platform spanning API, web client, and a mobile app — plus technical documentation and a client handover document.
- **Why it's impressive:** Demonstrates end-to-end delivery across three surfaces (API, web, mobile) and professional documentation.
- **Links:** GitHub (add), APK/demo (add).

### Projects to add from GitHub
> Simon will add more. Strong candidates already known:
- **Biashara AI** — M-Pesa–integrated AI business advisor for Kenyan SMEs (GCP/Gemini API; touches RAG, function calling, structured output). *Note: previously flagged as arguably his strongest AI piece — worth featuring or elevating.*
- **Parksby** — brand/design work for a Nairobi parking app (poster/visual system) — good for the design section.
- **Campus Amplify** — student design venture (poster & video ads) — good origin-story / entrepreneurship note.

**Instruction for Claude Code:** structure `projects.ts` so adding a project is just appending a typed object. Mark `featured: true` to surface it on the home page.

---

## 8. Content — About, Skills, Experience

### About (draft — Simon to refine)
Final-year BBIT student at JKUAT (Nairobi) and a full-stack developer & designer. Builds real products that solve local problems — from USSD-accessible marketplaces to AI tools for small businesses. Comfortable across the stack and increasingly focused on AI/ML engineering. Started out designing posters with zero capital and grew into shipping full software.

### Skills & Stack (group these)
- **Frontend:** React, Next.js, Tailwind, React Native/Expo
- **Backend:** Node.js/Express, REST APIs, MySQL, MongoDB, Supabase
- **AI/ML:** Gemini API, RAG, function calling, structured output (learning/applied)
- **Integrations:** M-Pesa Daraja, Africa's Talking (USSD/SMS)
- **Design:** Canva, brand & poster design, visual systems
- **Tools:** Git/GitHub, Vercel, VS Code

### Experience (brief timeline)
- **Freelance Developer & Designer** — clients incl. Parksby (ongoing retainer). Nairobi.
- **AIESEC Kenya** — Team Leader, Marketing & PR (prev. graphic designer).
- **KEFRI** — IT Support attachment (2025, 3 months).
- **Campus Amplify** — founder, student design venture.

---

## 9. Features (v1)

- ✅ **Downloadable CV (PDF)** — place `public/simon-mwangi-cv.pdf`; link from hero + contact. (Simon already has a CV drafted.)
- ✅ **Blog** — MDX-based. Scaffold `/blog` index + `[slug]` template with one sample post. Simon fills content later.
- ✅ Responsive + accessible + SEO (metadata, OpenGraph/Twitter cards, sitemap, `robots.txt`).
- ✅ Featured-projects system driven by data file.
- 🔜 (later) Dark/light toggle, testimonials, contact form.

---

## 10. Contact (links only for v1)

- **Email:** simonmwangiwaweru@gmail.com
- **GitHub:** https://github.com/simonmwangiwaweru
- **LinkedIn:** https://www.linkedin.com/in/simon-mwangidev

No contact form in v1. Use `mailto:` + icon links. Make them prominent in the footer and contact section.

---

## 11. Suggested File Structure

```
portfolio/
├── CLAUDE.md                  ← this file
├── public/
│   ├── simon-mwangi-cv.pdf
│   └── projects/              ← screenshots
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx           ← home
│   │   ├── projects/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   └── blog/
│   │       ├── page.tsx
│   │       └── [slug]/page.tsx
│   ├── components/            ← Hero, ProjectCard, Nav, Footer, etc.
│   ├── content/
│   │   ├── projects.ts        ← typed project data
│   │   └── posts/             ← .mdx blog files
│   ├── lib/
│   └── styles/
└── tailwind.config.ts
```

---

## 12. Working Conventions for Claude Code

- **TypeScript strict**, meaningful component names, one component per file.
- **Tailwind only** for styling; extract repeated patterns into components, not `@apply` soup.
- **Accessibility is a requirement, not a nice-to-have** — semantic elements, alt text, keyboard focus.
- **Mobile-first**, then scale up.
- Keep the hero above-the-fold and fast; lazy-load below-the-fold imagery.
- Ask before adding any new dependency.
- Commit in small, logical chunks with clear messages.

---

## 13. Build Roadmap (phases)

1. **Scaffold** — Next.js + TS + Tailwind, fonts, design tokens, base layout (nav + footer).
2. **Home** — hero + section shells.
3. **Projects** — data model, cards, `/projects` grid, `[slug]` case-study template; add Kazi Mtaani + SimpleSurvey.
4. **About / Skills / Experience** sections.
5. **Blog** — MDX pipeline + one sample post.
6. **Polish** — motion, responsive pass, accessibility pass, SEO/OG, CV download.
7. **Deploy** — Vercel + custom domain (Simon may buy a `.co.ke` domain).

---

## 14. Open Items for Simon to Provide

- [x] LinkedIn profile URL — https://www.linkedin.com/in/simon-mwangidev
- [x] Final accent color choice — warm coral `#FF5C39`, light-first base
- [ ] The CV PDF file (`public/simon-mwangi-cv.pdf`)
- [ ] Screenshots for Kazi Mtaani & SimpleSurvey
- [ ] Any additional GitHub projects to feature (with repo links + a line each)
- [ ] Preferred domain name (if buying one)

---

*Last updated: brief created with Claude. Keep this file current as the source of truth.*

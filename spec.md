# Khalid Khan Portfolio — Technical Specification Document (`spec.md`)

> **Document Version:** 1.0.0  
> **Last Updated:** October 2026  
> **Status:** Production-Ready / Active  
> **Project Name:** `main-khalid-khan-portfolio-vercel` (`nextjs-portfolio`)  
> **Live Production URL:** [https://khalid-khan-portfolio.vercel.app](https://khalid-khan-portfolio.vercel.app)  
> **Repository:** [https://github.com/khalidkhan99/khalid-khan-Portfolio](https://github.com/khalidkhan99/khalid-khan-Portfolio)  

---

## 1. Project Overview & Objectives

This project is the personal engineering portfolio for **Khalid Khan**, a Full-Stack Web Developer based in Pakistan. It is designed to demonstrate high-level technical capability in modern web development, highlighting live production projects (including an E-Commerce storefront and a 30+ browser tools utility platform), technical proficiencies, work experience, client testimonials, and direct hiring channels.

### Key Objectives:
- **Fast First Contentful Paint (FCP) & High Performance:** Built on Next.js 16 with static page prerendering (SSG via Turbopack).
- **Interactive, Premium Developer Aesthetic:** OLED dark mode default, subtle glowing cyan/purple gradients, interactive canvas particle grid, terminal-style whoami preview, and animated counters.
- **Flawless Client-Side Navigation:** Zero full-page refreshes across routes using Next.js `Link` components.
- **Search Engine Optimization (SEO):** Full OpenGraph metadata, JSON-LD Schema (`Person` and `WebSite`), dynamically generated `sitemap.xml` and `robots.txt`, and Google Search Console verification.
- **Accessibility & Reduced Motion:** Full compliance with `prefers-reduced-motion` across CSS keyframes, Canvas loops, and JS timers; high contrast color tokens (> 14:1).

---

## 2. Technology Stack

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `16.3.0` | React framework with Turbopack, static site generation, server components |
| **UI Library** | React / React DOM | `19.2.8` | Component model, concurrent rendering |
| **Language** | TypeScript | `^5.0.0` | Strict static typing, type interfaces for all site entities |
| **Styling** | Tailwind CSS (PostCSS) | `^4.0.0` | Modern CSS-first Tailwind engine with `@theme inline` |
| **Theme Engine** | `next-themes` | `^0.4.6` | Smooth Dark/Light mode switching without flash of unstyled content (FOUC) |
| **Typography** | `next/font/google` | Built-in | Optimized Latin subset loading for **Inter** (sans) & **JetBrains Mono** (code) |
| **Contact Service** | FormSubmit | External API | Serverless email forwarding with spam honeypot (`_honey`) |
| **Hosting & CI/CD** | Vercel | Production | Automatic builds on push to `main` branch |

---

## 3. Directory Structure

```text
main-khalid-khan-portfolio-vercel/
├── app/
│   ├── about/
│   │   └── page.tsx                  # Dedicated About page
│   ├── components/
│   │   ├── about-extra.tsx           # Services, process workflow, personal interests
│   │   ├── about.tsx                 # About summary & whoami.json terminal view
│   │   ├── contact-extra.tsx         # Contact values ("Why Me"), FAQ, availability banner
│   │   ├── contact.tsx               # Interactive contact form & communication channels
│   │   ├── experience-extra.tsx      # Career stats, awards/milestones, client testimonials
│   │   ├── experience.tsx            # Career timeline
│   │   ├── faq.tsx                   # Accessible accordion FAQ
│   │   ├── floating-resume.tsx       # Fixed bottom-right download resume pill
│   │   ├── footer.tsx                # Site footer with brand socials and copyright
│   │   ├── hero.tsx                  # Hero section (particles, typewriter, CTA, terminal card)
│   │   ├── icons.tsx                 # Handcrafted, accessible SVGs (brand & UI icons)
│   │   ├── navbar.tsx                # Responsive sticky glassmorphism navigation header
│   │   ├── page-header.tsx           # Subpage header with back-to-home navigation
│   │   ├── particles.tsx             # Canvas-based interactive particle connection network
│   │   ├── projects-extra.tsx        # Featured project spotlight, stats, build philosophy
│   │   ├── projects.tsx              # Grid of shipped projects with live/repo badges
│   │   ├── reveal.tsx                # Scroll-triggered fade-up animation component
│   │   ├── section-heading.tsx       # Standardized section headings
│   │   ├── skills-extra.tsx          # Animated toolbox marquee, roadmap, credentials
│   │   ├── skills.tsx                # Categorized skill badges with proficiency dots
│   │   ├── stat-counter.tsx          # IntersectionObserver eased number counter
│   │   ├── testimonials-marquee.tsx  # Continuous infinite marquee of client reviews
│   │   ├── theme-provider.tsx        # Next-themes client wrapper
│   │   ├── theme-toggle.tsx          # Sun/Moon dark-light mode button
│   │   └── typewriter.tsx            # Self-typing role/skill text effect with SSR fallback
│   ├── contact/
│   │   └── page.tsx                  # Dedicated Contact page
│   ├── experience/
│   │   └── page.tsx                  # Dedicated Experience & Reviews page
│   ├── projects/
│   │   └── page.tsx                  # Dedicated Projects & Architecture page
│   ├── skills/
│   │   └── page.tsx                  # Dedicated Skills & Credentials page
│   ├── data.ts                       # Single source of truth for all content and links
│   ├── favicon.ico                   # Site favicon
│   ├── globals.css                   # Tailwind v4 configuration, theme tokens, keyframe animations
│   ├── layout.tsx                    # Root layout with Metadata, Fonts, ThemeProvider, JSON-LD
│   ├── page.tsx                      # Single-page index composing all core sections
│   ├── robots.ts                     # Dynamic robots.txt generation
│   └── sitemap.ts                    # Dynamic sitemap.xml generation
├── design-system/
│   └── developer-portfolio/
│       └── MASTER.md                 # Design rules, color palettes, and component guidelines
├── public/
│   ├── googlec37b0c50b28909ad.html   # Google Search Console domain verification file
│   ├── resume.pdf                    # Clean 1-page generated PDF resume
│   └── resume.txt                    # Plaintext version of Khalid Khan's professional CV
├── eslint.config.mjs                 # ESLint 9 configuration
├── next.config.ts                    # Next.js settings (unoptimized images enabled)
├── package.json                      # Dependencies and npm scripts
├── postcss.config.mjs                # PostCSS configuration for Tailwind CSS v4
├── spec.md                           # Comprehensive Technical Specification (this document)
└── tsconfig.json                     # Strict TypeScript compiler options
```

---

## 4. Single Source of Truth (`app/data.ts`)

All content, external links, social handles, and metadata are maintained cleanly in [`app/data.ts`](file:///C:/Users/user/Desktop/MY%20PORTFOLIO%20PROJECTS/portfolio/main-khalid-khan-portfolio-vercel/app/data.ts).

### 4.1. Core Identity & Verified Social Channels
- **Developer:** Khalid Khan
- **Title:** Full-Stack & Web Developer
- **Location:** Pakistan (`PKT / UTC+5`)
- **Email:** `khalidkhan99012@gmail.com`
- **Phone:** `+92 335 2649604`
- **Form Action:** `https://formsubmit.co/khalidkhan99012@gmail.com`
- **Portfolio Repository:** `https://github.com/khalidkhan99/khalid-khan-Portfolio`
- **LinkedIn:** [https://www.linkedin.com/in/khalid-khan-dev](https://www.linkedin.com/in/khalid-khan-dev)
- **WhatsApp:** [https://wa.me/923352649604](https://wa.me/923352649604)
- **Facebook:** [https://www.facebook.com/profile.php?id=61592632241241](https://www.facebook.com/profile.php?id=61592632241241)
- **Instagram:** [https://www.instagram.com/khalid.dev99/](https://www.instagram.com/khalid.dev99/)
- **GitHub:** [https://github.com/khalidkhan99](https://github.com/khalidkhan99)
- **X / Twitter:** [https://x.com/khalidkhan99012](https://x.com/khalidkhan99012)

### 4.2. Shipped Projects Showcase

| Project | Live Demo | Source Code | Key Tech Stack | Description |
| :--- | :--- | :--- | :--- | :--- |
| **Fashionstyle E-Commerce Store** | [e-commerce-fashion-style.vercel.app](https://e-commerce-fashion-style.vercel.app/) | [GitHub Repo](https://github.com/khalidkhan99/E-commerce) | Next.js 16, React 19, Clerk Auth, Supabase (PostgreSQL with RLS), Stripe Checkout, Cloudinary, Tailwind CSS | Full-stack modern fashion store with product catalog, search & filters, size selection, wishlist, cart, and Stripe test checkout. |
| **AllTools Online Platform** | [all-tools-tech.vercel.app](https://all-tools-tech.vercel.app/) | [GitHub Repo](https://github.com/khalidkhan99/all-tools) | JavaScript, HTML5, CSS3, Modern Web APIs, Responsive UI | Comprehensive utility web suite featuring 30+ browser tools for images, PDFs, converters, and code generators. 100% private client-side processing. |
| **Portfolio Website** | [khalid-khan-portfolio.vercel.app](https://khalid-khan-portfolio.vercel.app) | [GitHub Repo](https://github.com/khalidkhan99/khalid-khan-Portfolio) | Next.js 16, TypeScript, Tailwind CSS v4, Turbopack | Personal developer portfolio with responsive design, particle canvas, dark/light mode, and JSON-LD SEO markup. |

---

## 5. Routes & Page Details

### 5.1. Home (`/`)
- **Hero Section:** Animated greeting, glowing gradient typography, dynamic typewriter (`typingPhrases`), quick contact/social pills, live status indicator (*"Available for new projects"*), interactive canvas particles, and a code card preview (`khalid.ts`).
- **Section Previews:** Composes high-level previews of About, Skills, Projects, Experience, and Contact, with dedicated `"See full page"` CTA links.

### 5.2. About (`/about`)
- Composes:
  - `<About />`: Terminal JSON inspector (`~/whoami.json`) paired with personal narrative.
  - `<AboutServices />`: 4 core services (E-Commerce Development, Web Development, Full-Stack Solutions, Web Automation).
  - `<AboutProcess />`: 4-step workflow (*01 Understand → 02 Plan → 03 Build → 04 Ship*).
  - `<AboutInterests />`: "Beyond the Code" personal passions.

### 5.3. Skills (`/skills`)
- Composes:
  - `<Skills />`: 4 categorized groups (Languages & Core, Frontend & Frameworks, Backend & Database, Tools & Deployment) with colored proficiency badges (*Core*, *Proficient*, *Familiar*).
  - `<SkillsTools />`: Tri-row infinite marquee of daily tools.
  - `<SkillsLearning />`: Progress tracker for current study areas.
  - `<SkillsCertifications />`: Verified credentials (Google AI Essentials, University of Michigan Python, Harvard CS50x).

### 5.4. Projects (`/projects`)
- Composes:
  - `<Projects />`: Interactive 3-column project cards with live status indicators, tech tags, metrics, and direct links to live demos and GitHub repositories.
  - `<FeaturedProject />`: Deep dive into the featured full-stack application (Fashionstyle E-Commerce).
  - `<ProjectStats />`: Key stats (Projects Built, Live Products, Tech Domains, 100% Shipped).
  - `<BuildPhilosophy />`: 3 core engineering principles (*Build Real Things*, *Keep It Simple*, *Always Improve*).

### 5.5. Experience (`/experience`)
- Composes:
  - `<Experience />`: Chronological vertical timeline covering Freelance Full-Stack Development (2024–Present), Freelance WordPress Development (2023–Present), and Computer Science Education (2022–Present).
  - `<CareerStats />`: Shipped apps, projects, and WordPress client stats.
  - `<Awards />`: Production milestones and first client achievements.
  - `<Testimonials />`: Verified quotes from business owners and freelance clients.

### 5.6. Contact (`/contact`)
- Composes:
  - `<Contact />`: FormSubmit form with honeypot spam protection, direct email/phone/location cards, and 5 brand social buttons.
  - `<ContactValues />`: "Why Me" 4-card value proposition (*Fast Replies*, *Clear Communication*, *Quality Work*, *Affordable Rates*).
  - `<ContactFaq />`: WAI-ARIA compliant FAQ accordion.
  - `<Availability />`: High-visibility call to action banner.

---

## 6. Design System & Theme Engine

### 6.1. Color Tokens ([`app/globals.css`](file:///C:/Users/user/Desktop/MY%20PORTFOLIO%20PROJECTS/portfolio/main-khalid-khan-portfolio-vercel/app/globals.css))

| Variable | Dark Mode (Default) | Light Mode | Purpose |
| :--- | :--- | :--- | :--- |
| `--bg-deep` | `#090a0f` | `#f3f5f9` | Main page background |
| `--bg-surface` | `#0f1320` | `#e9edf3` | Secondary backgrounds & subtle containers |
| `--bg-card` | `#151b26` | `#ffffff` | Elevated interactive cards |
| `--bg-card-hover`| `#1a2232` | `#f0f3f9` | Card hover state |
| `--border-subtle`| `rgba(255,255,255, 0.08)` | `rgba(10,15,30, 0.10)` | Card and section borders |
| `--text-heading` | `#f8fafc` | `#0f172a` | Primary titles and high-contrast text |
| `--text-body`    | `#94a3b8` | `#334155` | Body paragraphs and descriptive labels |
| `--text-accent`  | `#00f2fe` | `#0891b2` | Accent highlights and links |
| `--glow-cyan`    | `rgba(0, 242, 254, 0.18)` | `rgba(8, 145, 178, 0.14)` | Radial blur highlights |
| `--glow-purple`  | `rgba(127, 0, 255, 0.28)` | `rgba(124, 58, 237, 0.16)`| Secondary gradient glow |

### 6.2. Motion & Accessibility Safeguards
- **Reduced Motion Support:** When `prefers-reduced-motion: reduce` is detected:
  - Smooth scroll behavior reverts to `auto`.
  - Floating animations, aurora blur oscillations, and marquees freeze.
  - Canvas particles stop drawing animation frames.
  - Typewriter skips character-by-character delays and immediately renders the full string.
  - Stat counters immediately snap to their final values without easing delays.

---

## 7. SEO, Metadata & Schema

Configured in [`app/layout.tsx`](file:///C:/Users/user/Desktop/MY%20PORTFOLIO%20PROJECTS/portfolio/main-khalid-khan-portfolio-vercel/app/layout.tsx):
- **Canonical URL:** `https://khalid-khan-portfolio.vercel.app`
- **Twitter Card:** `summary_large_image` with `@khalidkhan99012` creator handle.
- **Google Search Console Verification:** Via `public/googlec37b0c50b28909ad.html`.
- **JSON-LD Schema Graph:**
  - `@type: "Person"` with name, nationality, URL, job title, and verified `sameAs` array matching GitHub, LinkedIn, Facebook, Instagram, and X/Twitter.
  - `@type: "WebSite"` with title, author reference, and English language definition.

---

## 8. Build, Lint & Verification Commands

All scripts verified and passing with 0 errors:

```bash
# Run local development server (Turbopack)
npm run dev

# Run ESLint 9 checks
npm run lint

# Compile and statically generate production bundle (11/11 pages)
npm run build

# Start production server
npm run start
```

---

## 9. Maintenance & Extension Guidelines

1. **Adding New Projects:** Update the `projects` array in [`app/data.ts`](file:///C:/Users/user/Desktop/MY%20PORTFOLIO%20PROJECTS/portfolio/main-khalid-khan-portfolio-vercel/app/data.ts). The UI dynamically maps cards, tags, live badges, and stats without requiring changes in UI components.
2. **Updating Social Links:** Update the `site` object in [`app/data.ts`](file:///C:/Users/user/Desktop/MY%20PORTFOLIO%20PROJECTS/portfolio/main-khalid-khan-portfolio-vercel/app/data.ts) and JSON-LD in [`app/layout.tsx`](file:///C:/Users/user/Desktop/MY%20PORTFOLIO%20PROJECTS/portfolio/main-khalid-khan-portfolio-vercel/app/layout.tsx).
3. **Updating Resume:** Update [`public/resume.txt`](file:///C:/Users/user/Desktop/MY%20PORTFOLIO%20PROJECTS/portfolio/main-khalid-khan-portfolio-vercel/public/resume.txt) and replace or regenerate [`public/resume.pdf`](file:///C:/Users/user/Desktop/MY%20PORTFOLIO%20PROJECTS/portfolio/main-khalid-khan-portfolio-vercel/public/resume.pdf).

# Thasika Ragupathy — Premium Portfolio Website

> Production-ready, typography-focused, editorial portfolio for **Thasika Ragupathy**, an Information Technology undergraduate at the University of Vavuniya, full-stack developer, and multidisciplinary technology enthusiast.

---

## 1. Overview

This website serves as Thasika Ragupathy's personal developer portfolio, designed to highlight full-stack software development capabilities, UI/UX design foundation, and leadership experience across IEEE, AIESEC, and university initiatives. 

Inspired by award-winning editorial web design, the interface features:
- **Talking-Video Hero**: Centered interactive introduction video with accessible playback and sound toggles.
- **3D Developer Identity Card**: Interactive flipping card displaying university credentials and video-extracted portrait.
- **Interactive Skills Explorer**: Filterable matrix distinguishing specific tools from technical concepts, with authentic brand color logos.
- **Project Gallery with Illustrative UI**: 6 bespoke interactive projects featuring custom grayscale illustrative interfaces rendered in CSS & JSX.
- **Accredited Certifications**: Verified credentials in UX design, API architecture, AI, and web engineering.
- **Experience & Leadership Timeline**: Unified timeline with category filtering, animated spine, and an inviting "What's Next?" section.
- **Achievements Gallery**: Desktop horizontal scroll gallery and mobile card stack celebrating competitive programming and innovation challenge victories.
- **Accessibility & Performance First**: Full keyboard navigation, `prefers-reduced-motion` compliance, semantic heading hierarchy, and zero external runtime scripts.

---

## 2. Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Smooth Scrolling**: [Lenis](https://github.com/darkroomengineering/lenis) (with automatic reduced-motion bypass)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: Native CSS transitions & hardware-accelerated transforms
- **Scroll Tracking & Reveals**: Native `IntersectionObserver` API

---

## 3. Project Structure

```text
Porfolio/
├── public/
│   ├── hero/
│   │   └── intro.mp4            # Introduction video center piece
│   ├── portrait/                # Directory for extracted portrait frames
│   ├── logos/                   # Brand and tech vector assets
│   └── resume.pdf               # Original résumé PDF download
├── scripts/
│   └── prepare-video.js         # Optional FFmpeg video optimizer & frame extractor
├── src/
│   ├── app/
│   │   ├── globals.css          # Tailwind CSS 4 theme tokens & styles
│   │   ├── icon.tsx             # Dynamic SVG/PNG circular TR monogram favicon
│   │   ├── layout.tsx           # SEO metadata, Open Graph tags & typography
│   │   └── page.tsx             # Main page orchestrator
│   ├── components/
│   │   ├── Navigation.tsx       # Floating header with progress indicator & mobile drawer
│   │   ├── hero/
│   │   │   └── Hero.tsx         # Talking-video hero with THASIKA typography & controls
│   │   ├── sections/
│   │   │   ├── About.tsx        # 3-column layout & 3D flipping ID card
│   │   │   ├── Skills.tsx       # Interactive technology explorer
│   │   │   ├── Projects.tsx     # 6-project gallery with illustrative UI
│   │   │   ├── Certifications.tsx # Clean accreditation cards
│   │   │   ├── Experience.tsx   # Education, leadership & volunteering timeline
│   │   │   ├── Achievements.tsx # Horizontal scrolling achievement gallery
│   │   │   └── Contact.tsx      # Direct mailto, copy confirmation & social links
│   │   └── ui/
│   │       ├── BrandLogos.tsx   # Authentic SVGs for technologies
│   │       ├── Button.tsx       # Accessible button with states and variants
│   │       ├── ProjectCard.tsx  # Project container with architectural specs toggle
│   │       ├── ProjectIllustrations.tsx # Bespoke CSS/JSX illustrative interfaces
│   │       ├── Reveal.tsx       # IntersectionObserver scroll reveal wrapper
│   │       ├── SectionHeading.tsx # Editorial serif & mono heading lockups
│   │       ├── SkillCard.tsx    # Interactive skill item
│   │       └── TimelineItem.tsx # Timeline node with numbered markers
│   └── lib/
│       ├── data.ts              # Single source of truth for all résumé data
│       ├── hooks.ts             # Active section, scroll progress & motion hooks
│       └── scroll.tsx           # Lenis smooth scroll provider
├── next.config.ts               # Next.js configuration
├── package.json                 # Project dependencies & scripts
├── postcss.config.mjs           # PostCSS configuration for Tailwind v4
├── tsconfig.json                # TypeScript compiler configuration
└── README.md                    # Project documentation
```

---

## 4. Prerequisites

- **Node.js**: `v18.18.0` or higher (tested on Node `v25.2.0`)
- **npm**: `v9.0.0` or higher (tested on npm `11.6.2`)
- *(Optional)* **FFmpeg**: Required only if you wish to run the video re-encoding script (`scripts/prepare-video.js`).

---

## 5. Installation and Local Development

### 1. Clone or Open the Repository
```bash
git clone https://github.com/ThasikaRagupathy/Portfolio.git
cd Portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 6. Production Build and Start

To create an optimized production build:
```bash
npm run build
```

To start the production server:
```bash
npm run start
```

---

## 7. Managing Assets & Media

### A. Replacing the Introduction Video
1. Place your new video file inside `public/hero/` and name it `intro.mp4`.
2. Ensure the video format is `.mp4` (H.264 video codec with AAC audio) for maximum browser compatibility.
3. The video will automatically load in both the Hero section and the developer identity card.

### B. Rebuilding Video Assets (Optional FFmpeg Script)
If you have FFmpeg installed on your machine, you can run:
```bash
npm run prepare:video
```
This script will:
- Check for FFmpeg availability.
- Extract a high-resolution still portrait frame from timestamp `00:00:01` to `public/portrait/portrait.jpg`.
- Output recommended FFmpeg commands to crop 16:9 landscape footage into mobile-ready 9:16 portrait.

If FFmpeg is not installed:
- Windows: `winget install Gyan.FFmpeg`
- macOS: `brew install ffmpeg`
- Linux: `sudo apt install ffmpeg`

### C. Updating the Résumé PDF
Replace `public/resume.pdf` with your updated curriculum vitae. The website buttons for "Download Résumé" and navigation CV link point directly to `/resume.pdf` with the download attribute.

---

## 8. Updating Résumé & Project Data

All content is strictly decoupled from presentation components and consolidated in:
```text
src/lib/data.ts
```

To update any aspect of your portfolio:
- **Personal details**: Edit `PROFILE` (name, email, phone, location, bio).
- **Navigation**: Edit `NAV`.
- **Skills**: Edit `SKILL_GROUPS` (distinguishing between `"tool"` and `"concept"`).
- **Projects**: Edit `PROJECTS` (titles, descriptions, tech stacks, highlights, verified URLs).
- **Certifications**: Edit `CERTIFICATIONS` (title, issuer, year, description).
- **Education**: Edit `EDUCATION` (degrees, institutions, dates).
- **Leadership & Activities**: Edit `LEADERSHIP`.
- **Volunteering**: Edit `VOLUNTEERING`.
- **Achievements**: Edit `ACHIEVEMENTS` (titles, contexts, dates, stats).

---

## 9. Typography and Font Setup

The portfolio uses an editorial typography system:
- **Inter Tight**: Primary sans-serif font for headings, titles, and body paragraphs.
- **Instrument Serif (Italic)**: Editorial serif font for accentuating select headings.
- **JetBrains Mono**: Monospace font for section numbers, index tags, and technical metadata.

These fonts are loaded using Next.js `next/font/google` in `src/app/layout.tsx`. Next.js downloads and self-hosts font files at build time, eliminating external runtime requests to Google servers for maximum privacy, resilience, and performance.

---

## 10. Licences & Intellectual Property

- **Typography**: 
  - Inter Tight (SIL Open Font License 1.1)
  - Instrument Serif (SIL Open Font License 1.1)
  - JetBrains Mono (Apache License 2.0)
- **Technology Brand Logos**: Trademarks and brand logos belong to their respective organizations (Oracle, Python Software Foundation, React/Meta, Next.js/Vercel, Figma, Postman, IEEE, AIESEC, etc.) and are presented strictly for identification and portfolio representation.
- **Source Code**: MIT License.

---

## 11. Deployment

### Deploying to Vercel
1. Push your repository to GitHub (`https://github.com/ThasikaRagupathy/Portfolio`).
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Select your GitHub repository.
4. Next.js 15 settings will be detected automatically.
5. Click **Deploy**.

### Deploying to GitHub Pages
To export as a static site for GitHub Pages, add `output: "export"` to `next.config.ts` and set `basePath` if needed, then run `npm run build` to generate the `out/` directory.
#   T h a s i k a P o r t f o l i o  
 
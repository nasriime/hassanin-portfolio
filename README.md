# Mohamed Hassanin — Portfolio

> **Senior Frontend Developer & Software Engineer**  
> 10+ years architecting high-throughput web interfaces, enterprise design systems, and high-performance applications.  
> 📍 Graz, Austria • 🎓 MSc in Data Science & AI (*FH Joanneum*)

[![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

---

## 🌟 Overview

A portfolio website engineered with **Next.js 15 (App Router)**, **React 19**, and **Tailwind CSS**. Designed with modern aesthetics including glassmorphism, animated glowing borders, 3D micro-interactions, responsive design, and persistent Dark & Light theme switching.

---

## 🚀 Key Features

* **High-Performance Architecture:** Sub-second LCP, zero-CLS layout stability, and optimized static asset delivery.
* **Persistent Dark & Light Mode:** Seamless theme switching with smooth transitions and persistent `localStorage` synchronization.
* **Interactive Micro-Animations:** Tactile "Lift & Tilt" floating badges, pulsing neon borders (`borderGlow`), custom interactive cursor glow, and scroll reveals.
* **Production Showcase:** Real screenshots and system deep dives for enterprise platforms built at Addtech, TourRadar, PlanRadar, SuppliesOn, and MediaSci.
* **SEO & Metadata Complete:** Semantic HTML5, dynamic OpenGraph metadata, `robots.txt`, and automated `sitemap.xml` generation.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend Framework** | [Next.js 15](https://nextjs.org/) (App Router), [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) (Strict Mode) |
| **Styling & Design System** | [Tailwind CSS](https://tailwindcss.com/), CSS Variables, Glassmorphism |
| **Icons & Typography** | [Lucide React](https://lucide.dev/), [Heroicons](https://heroicons.com/), [DM Sans](https://fonts.google.com/specimen/DM+Sans) |
| **Visualizations & 3D** | Canvas, WebGL, [xeokit](https://xeokit.io/), [Recharts](https://recharts.org/) |

---

## 📁 Project Structure

```
├── public/
│   ├── assets/
│   │   ├── images/         # Profile photography, app logo & avatars
│   │   ├── logos/          # Company and institution branding
│   │   └── screenshots/    # Production dashboard and platform captures
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── components/     # Page sections (Hero, About, Skills, Projects, Experience, Contact)
│   │   ├── layout.tsx      # Root layout, fonts, and dark mode configuration
│   │   ├── page.tsx        # Single-page portfolio composition
│   │   ├── robots.ts       # Automated robots.txt generator
│   │   └── sitemap.ts      # Automated sitemap generator
│   ├── components/         # Global navigation (Header, Footer) and UI primitives
│   └── styles/             # Tailwind CSS tokens, animations & custom utilities
├── next.config.mjs         # Next.js configuration & image hosts
└── tailwind.config.js      # Design tokens, color system & breakpoints
```

---

## ⚡ Getting Started

### Prerequisites
* **Node.js** >= 18.18.0
* **npm** or **yarn** or **pnpm**

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally
```bash
npm run dev
```
Open [http://localhost:4028](http://localhost:4028) in your browser.

### 3. Build for Production
```bash
npm run build
```


# ✨ Ahmed Adel Portfolio

A production-focused personal portfolio built with React, TypeScript, Tailwind CSS, and Firebase. The site is designed as a single-page experience with bilingual support (English/Arabic), dark and light themes, animated UI, and dynamic project/skills content loaded from Firestore.

## 🌍 Overview

This project showcases frontend engineering skills through:

- 🎨 Modern responsive UI with custom design tokens and glassmorphism effects
- 🔥 Firestore-driven content for projects and skill categories
- 🌐 Localization with direction switching (LTR/RTL)
- 📩 Contact form integration through EmailJS
- 🔎 SEO and social metadata setup in the root HTML

## 🔗 Version URLs

- 🚀 Latest version: https://ahmedadel.tech (branch: `main`)
- 🏷️ v1.0 version: https://v1.ahmedadel.tech (branch: `v1.0`)

## 🚀 Core Features

- 🌍 Bilingual interface: English and Arabic translations via context
- ↔️ Direction-aware layout: automatic LTR/RTL handling on language switch
- 🌙 Theme system: dark/light mode with persistence in localStorage
- 🧠 Dynamic portfolio content: projects and skills fetched from Firebase Firestore
- 🎬 Interactive sections: animated hero, project cards, categorized skills, and contact form
- 🔔 UI feedback: toast notifications for contact form status
- 📱 Mobile-first navigation: desktop links + mobile dropdown menu
- 🧩 SEO baseline: meta tags, Open Graph, Twitter card, and JSON-LD Person schema

## 🛠️ Tech Stack

### 💻 Frontend

- React 18
- TypeScript
- Vite 7

### 🎨 Styling and UI

- Tailwind CSS 3
- tailwindcss-animate
- class-variance-authority
- Radix UI primitives (dropdown menu, slot)
- custom utility components in src/components/ui

### 🎞️ Motion and UX

- Framer Motion
- Sonner (toast notifications)
- Lucide React icons

### ☁️ Backend Services

- Firebase App SDK
- Firebase Firestore
- Firebase Auth (initialized for future use)
- EmailJS browser SDK

### ⚙️ Tooling

- ESLint 9 + TypeScript ESLint
- Prettier
- SWC React plugin for Vite

## 🧱 Architecture

The application follows a simple layered structure:

- Presentation layer: section components in src/components
- State/context layer: theme and language providers in src/contexts
- Data hooks: useProjects and useSkills in src/hooks
- Service layer: Firestore queries in src/services
- Domain types and shared setup: src/lib

Data flow:

1. UI components call custom hooks.
2. Hooks call service functions.
3. Services query Firestore collections and map data to typed models.
4. Components render loading, error, and success states.

## 🗂️ Firestore Collections Used

- v2_projects
  - Ordered by order ascending, then createdAt descending (with fallback query if index is missing)
- skillCategories
  - Ordered by order ascending

## 🗺️ Project Structure

```text
.
|- src/
|  |- assets/                 # Static media (profile photo)
|  |- components/             # Page sections and UI primitives
|  |  |- ui/                  # Reusable low-level UI components
|  |- contexts/               # Theme and language providers
|  |- hooks/                  # Data fetching hooks
|  |- lib/                    # Firebase bootstrap, types, utilities
|  |- services/               # Firestore service functions
|  |- App.tsx                 # App composition (sections + providers)
|  |- main.tsx                # React app entry
|  `- index.css               # Global styles and design tokens
|- public/                    # Favicons, manifest, robots, OG image
|- index.html                 # SEO metadata and structured data
|- tailwind.config.ts         # Tailwind theme and animation config
|- vite.config.ts             # Vite config and path aliases
`- vercel.json                # SPA rewrite for deployment
```

## 🔐 Environment Variables

Create a .env.local file in the project root:

```env
# Firebase
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=

# EmailJS
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Notes:

- Missing Firebase variables can break data loading for Projects and Skills sections.
- Missing EmailJS variables will prevent contact form submission.

## 🚀 Getting Started

### 📋 Prerequisites

- Node.js 18+
- npm 9+

### 📦 Installation

```bash
npm install
```

### ▶️ Run Development Server

```bash
npm run dev
```

The app runs on http://localhost:8080 by default.

### 🏗️ Build for Production

```bash
npm run build
```

### 👀 Preview Production Build

```bash
npm run preview
```

## 🧪 Available Scripts

- npm run dev: start Vite dev server
- npm run build: create production build
- npm run build:dev: create development-mode build
- npm run preview: preview production build locally
- npm run lint: run ESLint
- npm run pretty: run Prettier on project files

## 🌐 Deployment

This repository includes:

- vercel.json with SPA rewrite support
- production build output in dist

Typical Vercel flow:

1. Import repository in Vercel.
2. Configure environment variables from the list above.
3. Build command: npm run build
4. Output directory: dist

## 📝 Known Notes

- The previous README mentioned React Router and GitHub Pages deploy scripts. The current codebase does not use React Router and package scripts do not include a deploy command.
- A generated dist directory exists in the workspace; source files in src are the canonical implementation.

## 👨‍💻 Author

Ahmed Adel

- GitHub: https://github.com/ahmed-adel-morsi
- LinkedIn: https://www.linkedin.com/in/ahmed-adel-morsi

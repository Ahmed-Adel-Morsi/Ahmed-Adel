# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Firebase.

## Features

- 🎨 Modern UI with Tailwind CSS and Shadcn/ui components
- 🌍 Multi-language support (English/Arabic)
- 🌓 Dark/Light theme toggle
- 📱 Fully responsive design
- 🔥 Firebase integration for dynamic content
- ⚡ Fast performance with Vite
- 🎭 Smooth animations with Framer Motion

## Tech Stack

- **Frontend:** React 18, TypeScript
- **Styling:** Tailwind CSS, Shadcn/ui
- **Build Tool:** Vite
- **Backend:** Firebase (Firestore)
- **Routing:** React Router
- **Animation:** Framer Motion
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or bun package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Ahmed-Adel-Morsi/Ahmed-Adel.git
cd Ahmed-Adel
```

2. Install dependencies:

```bash
npm install
# or
bun install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in your Firebase configuration values

4. Start the development server:

```bash
npm run dev
# or
bun dev
```

5. Open [http://localhost:8080](http://localhost:8080) in your browser

## Building for Production

```bash
npm run build
# or
bun run build
```

The production build will be in the `dist` directory.

## Deployment

This project is configured for GitHub Pages deployment:

```bash
npm run deploy
# or
bun run deploy
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── contexts/       # React contexts (Theme, Language)
├── hooks/          # Custom React hooks
├── lib/            # Utilities and Firebase config
├── pages/          # Page components
├── services/       # API service layer
└── assets/         # Static assets
```

## Environment Variables

Create a `.env.local` file with the following variables:

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run pretty` - Format code with Prettier
- `npm run deploy` - Deploy to GitHub Pages

## License

This project is open source and available under the MIT License.

## Contact

Ahmed Adel Morsi - [GitHub Profile](https://github.com/Ahmed-Adel-Morsi)

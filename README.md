# Tomorrow Music Entertainment

A high-performance, visually immersive digital experience for **Tomorrow Music Entertainment**—a global music and entertainment empire. This project showcases a modern approach to web development, blending cutting-edge performance with cinematic aesthetics.

## 🚀 Overview

The Tomorrow Music Entertainment landing page is designed to reflect the brand's forward-thinking identity. It features a sophisticated 3D hero scene, smooth scroll orchestration, and a dynamic artist roster, all built on the latest React ecosystem.

### Key Features
- **Cinematic 3D Hero:** Immersive Three.js/React Three Fiber scene with interactive elements.
- **Fluid Motion:** Orchestrated animations using Framer Motion and GSAP for a high-end feel.
- **Ultra-Smooth Scroll:** Integrated Lenis for consistent, luxury scrolling behavior across devices.
- **Dynamic Roster:** A visually rich showcase of artists with interactive hover states and parallax effects.
- **Modern Typography:** Expressive use of display fonts and monochromatic aesthetics with accent highlights.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop using Tailwind CSS v4.

## 🛠 Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (React 19)
- **Routing:** [TanStack Router](https://tanstack.com/router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/), [GSAP](https://gsap.com/)
- **3D Engine:** [Three.js](https://threejs.org/) via [React Three Fiber](https://r3f.docs.pmnd.rs/)
- **Smooth Scroll:** [Lenis](https://lenis.darkroom.engineering/)
- **Deployment:** [Cloudflare Workers](https://workers.cloudflare.com/) via Wrangler
- **State Management:** [TanStack Query](https://tanstack.com/query)
- **UI Components:** Radix UI primitives

## 📂 Project Structure

```text
src/
├── assets/         # Optimized images and brand assets
├── components/     # High-level feature components (Hero, Roster, etc.)
│   └── ui/         # Reusable Shadcn/Radix UI primitives
├── hooks/          # Custom React hooks (e.g., use-mobile)
├── lib/            # Utility functions and error handling
├── routes/         # File-based routing (TanStack Router)
├── styles/         # Global styles and Tailwind configuration
└── server.ts       # Cloudflare Workers entry point
```

## ⚡ Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- `npm` or `pnpm`

### Installation
```bash
npm install
```

### Development
Start the development server with Vite:
```bash
npm run dev
```

### Build & Preview
To create an optimized production build:
```bash
npm run build
npm run preview
```

## 🌐 Deployment

The project is configured for deployment on **Cloudflare Workers** using the `@cloudflare/vite-plugin`.

To deploy:
1. Authenticate with Wrangler: `npx wrangler login`
2. Deploy: `npx wrangler deploy`

The configuration is managed via `wrangler.jsonc`.

## 📜 License

Private project for Tomorrow Music Entertainment.

---

*Est. Cape Town · Worldwide*

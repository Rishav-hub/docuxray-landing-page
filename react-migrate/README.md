# DocuXray Landing Page - React Migration

Modern React implementation of the DocuXray landing page, built with Vite, TypeScript, and CSS Modules.

## 🚀 Tech Stack

- **React 18.3+** - Latest React with hooks
- **TypeScript 5.6+** - Full type safety
- **Vite 5.4+** - Lightning-fast build tool
- **React Router 6.26+** - Client-side routing
- **React Three Fiber 8.17+** - React renderer for Three.js
- **CSS Modules** - Scoped styling
- **Three.js** - 3D graphics for liquid background

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm/pnpm/yarn

### Setup

```bash
# Install dependencies
npm install
# or
pnpm install
# or
yarn install
```

## 🛠️ Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

The development server will start at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header/         # Site header with navigation
│   ├── Footer/         # Site footer
│   ├── Modals/         # Modal components (Demo, Upload, Contact)
│   ├── HeroSection/    # Hero section with liquid background
│   ├── LogoShowcase/   # Company logos marquee
│   └── ...            # Other page components
├── pages/              # Page-level components
│   ├── HomePage/       # Main landing page
│   ├── PricingPage/    # Pricing page
│   ├── BlogPage/       # Blog listing page
│   └── BlogPostPage/   # Individual blog post
├── contexts/           # React contexts
│   └── ModalContext.tsx # Modal state management
├── styles/             # Global styles
│   └── global.css      # CSS variables and base styles
├── types/              # TypeScript type definitions
│   └── index.ts        # All TypeScript interfaces
├── data/               # Static data
│   ├── testimonials.ts # Testimonial data
│   └── faq.ts         # FAQ data
├── hooks/              # Custom React hooks (if needed)
├── assets/             # Static assets
├── App.tsx             # Main app component
├── main.tsx            # Application entry point
└── router.tsx          # Route configuration
```

## 🎨 Features

### Implemented

- ✅ Full TypeScript support with strict mode
- ✅ CSS Modules for scoped styling
- ✅ React Router for navigation
- ✅ Modal system with React Context
- ✅ Responsive design (mobile-first)
- ✅ Animated liquid background using React Three Fiber
- ✅ Drag-scrollable testimonial carousel
- ✅ FAQ accordion with keyboard accessibility
- ✅ Logo marquee animation
- ✅ All interactive components (forms, toggles, etc.)

### Home Page Components

- Announcement Bar
- Hero Section with Liquid Background
- Logo Showcase (Marquee)
- Pain Point Section (Old Way vs New Way)
- Feature Showcase (3 blocks)
- Value Proposition Cards
- Success Stories (Testimonial Carousel)
- Benefits Section (How it Works)
- FAQ Accordion
- Final CTA

### Additional Pages

- Pricing Page (with billing toggle)
- Blog Listing Page
- Individual Blog Post Pages

## 🎯 Design Philosophy

This React implementation maintains **pixel-perfect** parity with the original HTML/CSS version:

- ✅ Exact same visual design
- ✅ Identical responsive breakpoints
- ✅ Same animations and transitions
- ✅ Matching interaction patterns
- ✅ No design changes whatsoever

## 🔧 Configuration

### Path Aliases

Configured in `tsconfig.json` and `vite.config.ts`:

- `@/*` - src root
- `@components/*` - src/components
- `@pages/*` - src/pages
- `@styles/*` - src/styles
- `@hooks/*` - src/hooks
- `@types/*` - src/types
- `@data/*` - src/data
- `@assets/*` - src/assets

### CSS Modules

CSS Modules are configured to use camelCase naming:

```typescript
import styles from './Component.module.css';

<div className={styles.myClassName}>
```

## 📝 Component Guidelines

### Creating New Components

1. Create component directory: `src/components/MyComponent/`
2. Add component file: `MyComponent.tsx`
3. Add styles: `MyComponent.module.css`
4. Export from component file

### TypeScript

- All components use TypeScript
- Props interfaces defined for all components
- No `any` types allowed
- Strict mode enabled

### Styling

- Use CSS Modules for component-specific styles
- Reference CSS variables from `global.css`
- Follow existing naming conventions
- Maintain responsive design patterns

## 🚢 Deployment

### Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deploy to Vercel/Netlify

1. Connect your repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy!

## 📚 Key Dependencies

- `react` & `react-dom` - Core React
- `react-router-dom` - Routing
- `@react-three/fiber` - Three.js React renderer
- `@react-three/drei` - Three.js helpers
- `three` - 3D library
- `react-markdown` - Markdown rendering (for blog)
- `gray-matter` - Frontmatter parsing (for blog)

## 🐛 Known Issues

None currently. All features working as expected.

## 📖 Migration Notes

This React version is a complete rewrite of the original HTML/CSS/JavaScript implementation:

- All vanilla JavaScript converted to React hooks
- All CSS converted to CSS Modules
- Three.js liquid simulation converted to React Three Fiber
- All DOM manipulation replaced with React state management
- Modal system uses React Context and Portals
- Testimonial carousel uses React refs and event handlers

## 🤝 Contributing

When contributing, please:

1. Maintain TypeScript strict mode
2. Follow existing component structure
3. Use CSS Modules for styling
4. Ensure responsive design
5. Test on multiple browsers
6. Maintain design parity with original

## 📄 License

All rights reserved © 2025 DocuXray

## 🙏 Credits

Original HTML/CSS/JavaScript implementation converted to modern React architecture.


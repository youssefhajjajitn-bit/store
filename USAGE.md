# Usage Guide - LuxeStyle E-Commerce Store

## Getting Started

### Quick Start

```bash
# Navigate to project directory
cd /Users/belhassen/clothing-store

# Install dependencies
npm install

# Generate Prisma client (if using database)
npx prisma generate

# Start development server
npm run dev
```

Visit `http://localhost:3001` in your browser.

## Development Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start Next.js development server (port 3001) |
| `npx prisma generate` | Generate Prisma client from schema |
| `npx prisma db push` | Push schema to database |
| `npm run build` | Build for production deployment |
| `npm start` | Start production server with built files |

## Components Overview

### Component Library (src/components/layout/)

Each component is a functional React component using Tailwind CSS:

```tsx
// Example usage
import { Navbar } from '@/components/layout/Navbar';

function MyComponent() {
  return <Navbar />;
}
```

**Available Components:**
- `HeroSection` - Hero banner with CTA buttons
- `Navbar` - Sticky navigation bar
- `CategoriesSection` - Featured categories grid
- `NewArrivalsSection` - Latest product showcase
- `BestSellersSection` - Top sellers display
- `DealsSection` - Special offers section
- `BenefitsSection` - Value propositions grid
- `NewsletterSection` - Email signup form
- `Footer` - Multi-column footer
- `ProductCard` - Individual product card

### Pages (src/app/)

**App Router Layout Structure:**

```typescript
// src/app/page.tsx - Homepage (Home)
export default function Home() { ... }

// src/app/admin/layout.tsx - Admin sidebar layout
export default function AdminLayout({ children }) { ... }

// src/app/product/[slug]/page.tsx - Product detail page
export default function ProductPage({ params }) { ... }
```

### Static Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `src/app/page.tsx` | Homepage with all featured sections |
| `/products` | `src/app/products/page.tsx` | All products catalog |
| `/product/[slug]` | `src/app/product/[slug]/page.tsx` | Single product detail page |
| `/admin/` | `src/app/admin/layout.tsx + page.tsx` | Admin dashboard (requires authentication) |

## Configuration

### Environment Variables (.env.local)

Required for production deployment:

```bash
NEXT_PUBLIC_APP_URL=http://localhost:3001
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
SESSION_COOKIE_SECURE=true
```

### Next.js Configuration (next.config.ts)

- Output mode: `standalone` (for serverless rendering)
- Environment variables are passed to the build output

## Styling Guide

### CSS Variables

The luxury color palette is defined in `globals.css`:

```css
:root {
  --color-primary: #8b7355; /* Gold/Beige */
  --color-secondary: #2c2a26; /* Dark Brown */
  --color-accent: #c9a976;
}
```

### Tailwind Classes Used

- `bg-stone-50` - Background color for pages
- `text-stone-900` - Primary text color
- `font-bold` - Headings and titles
- `transition-all` - Smooth hover animations
- `hover:scale-102` - Image scale effect on hover

## Data Flow

### Product Page Routing

```typescript
// /src/app/product/[slug]/page.tsx

export default async function ProductPage({ params }) {
  // Fetch product data from Prisma
  const { slug } = await params;
  
  // Query database for product
  const product = await prisma.product.findUnique({ where: { slug } });
  
  return <div>{product.name}</div>;
}
```

### Dynamic Import Strategy

Use Next.js dynamic imports for performance:

```typescript
import dynamic from 'next/dynamic';

const HeroSection = dynamic(
  () => import('@/components/layout/HeroSection').then(m => m.HeroSection)
);
```

## Admin Access

The admin dashboard is protected and requires authentication. In development mode, it serves as a template structure with placeholder data tables for orders and products management.

## Next Steps

1. Install Prisma client: `npm install prisma`
2. Set up your database connection
3. Run `npx prisma db push` to create tables
4. Seed your database: `npm run db:seed`
5. Start development server: `npm run dev`

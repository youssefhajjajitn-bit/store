# LuxeStyle - Premium E-Commerce Store

A luxury fashion e-commerce platform built with Next.js, React, and Tailwind CSS.

## 🌟 Features

- **Responsive Design**: Fully responsive design that works on all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, sophisticated design with luxury aesthetics and gold accents
- **Product Pages**: Detailed product information with images and reviews
- **Admin Dashboard**: Manage orders, products, and view analytics
- **Newsletter Integration**: Build your email list for marketing

## 📁 Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── admin/             # Admin dashboard
│   ├── product/[slug]     # Single product pages
│   ├── products            # All products catalog
│   ├── cart/              # Shopping cart page
│   ├── checkout/          # Checkout process
│   ├── layout.tsx         # Root layout with metadata
│   ├── globals.css        # Global styles and animations
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── layout/            # Component library
│   │   ├── HeroSection.tsx          # Eye-catching banner
│   │   ├── Navbar.tsx               # Sticky navigation
│   │   ├── CategoriesSection.tsx    # Featured categories grid
│   │   ├── NewArrivalsSection.tsx  # Latest products showcase
│   │   ├── BestSellersSection.tsx  # Top sellers display
│   │   ├── DealsSection.tsx        # Special offers section
│   │   ├── BenefitsSection.tsx     # Value propositions
│   │   ├── NewsletterSection.tsx    # Email signup form
│   │   └── Footer.tsx               # Multi-column footer
│   └── ProductCard.tsx             # Individual product card
├── prisma/                 # Database schema
├── scripts/                # Data seeding scripts
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

```bash
cd /Users/belhassen/clothing-store
npm install
```

### Development

```bash
# Generate Prisma client (if using database)
npx prisma generate

# Start development server on port 3001
npm run dev

# Visit http://localhost:3001 in your browser
```

## 📝 Components Reference

| Component | Description |
|-----------|-------------|
| HeroSection | Eye-catching hero banner with CTA buttons |
| Navbar | Sticky navigation bar with logo, categories links, and cart icon |
| CategoriesSection | Grid of featured categories |
| NewArrivalsSection | Latest product showcase |
| BestSellersSection | Top-selling items section |
| DealsSection | Special offers and promotions display |
| BenefitsSection | Value propositions for customers |
| NewsletterSection | Email signup form with dark theme footer styling |
| Footer | Multi-column footer with navigation links and social media icons |

## 🎨 Design System

- **Font**: Inter (via Next.js font)
- **Primary Color**: #8b7355 (Gold/Beige)
- **Background**: Stone-50 (#faf8f5) for subtle warmth
- **Responsive Breakpoints**: 640px, 768px

## 📄 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage - landing page with hero and featured products |
| `/products` | All products catalog page |
| `/product/[slug]` | Product detail page |
| `/admin/` | Admin dashboard homepage |
| `/cart/` | Shopping cart view |
| `/checkout/` | Checkout process pages |

## 🚀 Scripts

```bash
npm run dev       # Start development server (port 3001)
npm run build      # Build for production deployment
npx prisma generate   # Generate Prisma client
```

## 📝 License

© 2024 LuxeStyle. All rights reserved.

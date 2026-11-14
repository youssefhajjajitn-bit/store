# Component Library - LuxeStyle E-Commerce Store

## Available Components

### 1. HeroSection.tsx
**Purpose**: Eye-catching hero banner with CTA buttons  
**Display**: Featured in homepage  
**Props**: None (component has hardcoded data)  

```tsx
import HeroSection from '@/components/layout/HeroSection';
function HomePage() {
  return <HeroSection />;
}
```

### 2. Navbar.tsx
**Purpose**: Sticky navigation bar with logo, categories links  
**Display**: Fixed at top of viewport  
**Props**: None (component has hardcoded data)  

```tsx
import Navbar from '@/components/layout/Navbar';
function AnyPage() {
  return <Navbar />;
}
```

### 3. CategoriesSection.tsx
**Purpose**: Featured categories grid with images  
**Display**: Section below hero  
**Props**: None (hardcoded data: Men's Fashion, Women's Collection, Accessories)  

```tsx
import CategoriesSection from '@/components/layout/CategoriesSection';
function HomePage() {
  return <CategoriesSection />;
}
```

### 4. NewArrivalsSection.tsx
**Purpose**: Latest product showcase  
**Display**: Section below categories  
**Props**: None (hardcoded data: 3 products)  

```tsx
import NewArrivalsSection from '@/components/layout/NewArrivalsSection';
function HomePage() {
  return <NewArrivalsSection />;
}
```

### 5. BestSellersSection.tsx
**Purpose**: Top-selling items with rating stars  
**Display**: Section below new arrivals  
**Props**: None (hardcoded data: 3 products)  

```tsx
import BestSellersSection from '@/components/layout/BestSellersSection';
function HomePage() {
  return <BestSellersSection />;
}
```

### 6. DealsSection.tsx
**Purpose**: Special offers and promotions display  
**Display**: Section below best sellers  
**Props**: None (hardcoded data: 3 deals)  

```tsx
import DealsSection from '@/components/layout/DealsSection';
function HomePage() {
  return <DealsSection />;
}
```

### 7. BenefitsSection.tsx
**Purpose**: Value propositions for customers  
**Display**: Section below deals  
**Props**: None (hardcoded data: 3 benefits)  

```tsx
import BenefitsSection from '@/components/layout/BenefitsSection';
function HomePage() {
  return <BenefitsSection />;
}
```

### 8. NewsletterSection.tsx
**Purpose**: Email signup form with dark theme footer styling  
**Display**: Full-width section before footer  
**Props**: None (component has hardcoded data)  

```tsx
import NewsletterSection from '@/components/layout/NewsletterSection';
function HomePage() {
  return <NewsletterSection />;
}
```

### 9. Footer.tsx
**Purpose**: Multi-column footer with navigation links and social media icons  
**Display**: Bottom of page, full-width  
**Props**: None (hardcoded data: navigation links, social icons)  

```tsx
import Footer from '@/components/layout/Footer';
function AnyPage() {
  return <Footer />;
}
```

### 10. ProductCard.tsx
**Purpose**: Individual product display card  
**Display**: Used in products listing pages  
**Props**: 
- `id`: number - Unique identifier
- `name`: string - Product name
- `price`: number - Product price
- `image`: string (optional) - Product image URL

```tsx
import ProductCard from '@/components/ProductCard';

function ProductsPage() {
  const products = [
    { id: 1, name: 'Signature Silk Blazer', price: 289 },
    { id: 2, name: "Classic Wool Trench", price: 349 },
    { id: 3, name: 'Leather Weekend Bag', price: 599 },
  ];

  return (
    <div className="grid grid-cols-1 gap-y-8 xl:gap-x-8">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
```

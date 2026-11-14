# Database Setup - LuxeStyle E-Commerce

## Installation Steps

### 1. Install Prisma CLI

```bash
npm install --dev prisma
```

### 2. Generate Prisma Client

```bash
npx prisma generate
```

### 3. Connect to Your Database (PostgreSQL)

**Option A: Using PostgreSQL Database**

1. Get your connection string from your PostgreSQL provider (e.g., Supabase, Railway, Neon)

2. Set the DATABASE_URL in `.env.local`:

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"
```

3. Push the schema to your database:

```bash
npx prisma db push
```

**Option B: Using Local SQLite (for development)**

```bash
# This will create a local SQLite database
DATABASE_URL="file:/Users/belhassen/clothing-store/prisma/dev.db"
npx prisma db push
```

### 4. Seed Your Database

```bash
npm run db:seed
```

This creates sample data including products and categories.

## Prisma Schema Explanation

### User Model
- Stores customer account information
- Unique email address for authentication
- Tracks orders via the `orders` relation
- Supports multiple roles (customer, admin)

### Product Model
- Core product catalog data
- Fields: ID, name, slug, price, description, rating, reviews
- Links to category via foreign key relationship
- Automatic timestamp tracking with `createdAt` and `updatedAt`

### Order Model
- Tracks customer purchases
- Supports status transitions (pending → processing → shipped → delivered/cancelled)
- Foreign key relation to User model
- Links multiple products per order

### Category Model
- Hierarchical organization of products
- Fields: ID, name, slug, description, image URL
- One-to-many relationship with Product model

## Database Operations

### Run Migrations

```bash
# Create new migration for a schema change
npx prisma migrate dev --name your_migration_name

# View existing migrations
npx prisma migrate diff

# Rollback migration (if needed)
npx prisma migrate revert
```

### Seed Data

```bash
npm run db:seed
```

This runs the seed script at `src/scripts/seed.ts` which populates your database with sample products and categories.

## Troubleshooting

- If Prisma generate fails, ensure Node.js version is compatible (18+ recommended)
- Check your DATABASE_URL has correct credentials format for your provider
- Delete `.dev.db` file to force regeneration of the local database
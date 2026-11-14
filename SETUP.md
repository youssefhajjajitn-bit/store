# Setup Guide - LuxeStyle E-Commerce Store

## Prerequisites

- **Node.js**: 18+ (check with `node --version`)
- **npm** or **yarn** package manager

## Installation Steps

### Step 1: Install Dependencies

```bash
cd /Users/belhassen/clothing-store
npm install
```

### Step 2: Configure Environment Variables

Copy the environment template file to your project root:

```bash
cp .env.example .env.local
# Edit .env.local with your actual values
```

### Step 3: Database Setup (Optional for Development)

If you have a PostgreSQL database or want to use local SQLite:

```bash
npm run db:generate
npm run db:push
```

### Step 4: Start the Development Server

```bash
npm run dev
```

Visit `http://localhost:3001` in your browser.

## Configuration Options

| Variable | Default | Description |
|----------|---------|-------------|
| `NEXT_PUBLIC_APP_URL` | localhost:3001 | Production URL for Next.js |
| `DATABASE_URL` | file:/dev.db | Database connection string |
| `SESSION_COOKIE_SECURE` | true | Enable HTTPS cookies in production |

## Running Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 3001) |
| `npm run build` | Build for production deployment |
| `npm start` | Start production server with built files |
| `npm run lint` | Run ESLint and stylelint checks |
| `npm run db:generate` | Generate Prisma client |
| `npm run db:push` | Push database schema to PostgreSQL |
| `npm run db:seed` | Seed database with sample data |

## Production Deployment

Build the project for deployment:

```bash
npm run build
```

Deploy to:
- **Vercel**: Run `vercel` or push to GitHub and enable in [Vercel Dashboard](https://vercel.com)
- **Netlify**: Deploy to [Netlify](https://netlify.com)
- **AWS Amplify**: Push to `main` branch on AWS

## Troubleshooting

If you encounter issues:

1. Clear the `.next` directory and restart
2. Delete node_modules/ and reinstall dependencies
3. Check if your environment variables are set correctly
4. Verify PostgreSQL is running (if using PostgreSQL)

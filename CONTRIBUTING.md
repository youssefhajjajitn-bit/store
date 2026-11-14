# Contributing to LuxeStyle

Thank you for your interest in contributing to LuxeStyle! This guide helps you get started.

## 🚀 Getting Started

1. Fork the repository
2. Create a branch with your feature name: `git checkout -b feature/my-feature`
3. Make your changes
4. Run tests locally
5. Submit a pull request

## 📁 Project Structure

```
/
├── src/                    # Application source code
│   ├── app/               # Next.js App Router pages
│   ├── components/        # React components
│   ├── lib/               # Shared utilities
│   ├── prisma/            # Database schema
│   └── scripts/           # Data seeding & utility scripts
├── public/                # Static assets
```

## 🧪 Testing Locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3001` in your browser.

## 💡 Code Style Guidelines

- Use TypeScript for type safety
- Follow React best practices with functional components
- Name components using PascalCase
- Export components as default modules
- Use absolute imports (`@/...`) or relative imports

## 🐛 Issue Reporting

Before creating an issue, please check if it's already been reported:
1. Search existing issues
2. Provide a clear title
3. Include reproduction steps
4. Share environment details

## 📝 Contributing Guidelines

- Write clear commit messages
- Use descriptive branch names
- Follow ESLint and stylelint rules
- Add tests for new features

---

Thank you for contributing!

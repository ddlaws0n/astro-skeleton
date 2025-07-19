# 🚀 Astro Skeleton Starter Kit

<div align="center">
  <img src="src/assets/astro-skeleton.png" alt="Astro Skeleton Logo" width="200" />
  <p>
    <a href="https://github.com/ddlaws0n/astro-skeleton/stargazers">
      <img alt="GitHub stars" src="https://img.shields.io/github/stars/ddlaws0n/astro-skeleton.svg" />
    </a>
    <a href="https://github.com/ddlaws0n/astro-skeleton/blob/main/LICENSE">
      <img alt="License" src="https://img.shields.io/github/license/ddlaws0n/astro-skeleton.svg" />
    </a>
    <a href="https://astro.build">
      <img alt="made with Astro" src="https://img.shields.io/badge/made%20with-Astro-black?logo=astro&logoColor=white" />
    </a>
  </p>
</div>

A modern, opinionated Astro starter template with SEO, performance, and ease-of-use in mind.

```sh
pnpm create astro@latest -- --template @ddlaws0n/astro-skeleton
```

## ✨ Features

- 🔥 [**Astro v5**](https://astro.build/blog/astro-5/) - The latest version with improved performance and features
- 💨 [**Tailwind CSS v4**](https://tailwindcss.com/) - Next-generation utility-first CSS framework
- 🔍 **Built-in SEO** - Meta tags, Open Graph, and Twitter Cards with [astro-seo-meta](https://github.com/codiume/orbit/tree/main/packages/astro-seo-meta)
- 📑 **Sitemap Generation** - Automatic sitemap for improved search engine indexing
- 📰 **RSS Feed Support** - Keep your audience updated with built-in RSS capabilities
- ⚡ **Performance Optimizations** - Third-party script handling with [Partytown](https://partytown.builder.io/)
- 🖼️ **Image Optimization** - Using Sharp for efficient image processing
- 🧩 **Icon System** - Easy icon usage with [Astro Icon](https://github.com/natemoo-re/astro-icon) and [Iconify Solar](https://icon-sets.iconify.design/solar/)
- 🧪 **Testing Setup** - [Vitest](https://vitest.dev/) configured and ready to use
- ✅ **Code Quality Tools**:
  - [Biome](https://biomejs.dev/) for fast linting and formatting
  - [TypeScript](https://www.typescriptlang.org/) for type safety
  - [Astro Check](https://docs.astro.build/en/reference/cli-reference/#astro-check) for Astro-specific checks
- 🔄 **Git Hooks** - Using lint-staged for clean commits
- 📦 **Semantic Release** - Automated versioning and changelogs

## 📂 Project Structure

Inside of your Astro Skeleton project, you'll see the following folders and files:

```text
/
├── .github/              # GitHub configuration including workflows
│   └── workflows/        # GitHub Actions workflows
├── public/               # Static assets
│   └── favicon.svg
├── src/
│   ├── components/       # Reusable UI components
│   ├── content/          # Content collections (if enabled)
│   ├── layouts/          # Page layouts
│   │   └── Layout.astro
│   ├── pages/            # Page components and routes
│   │   └── index.astro
│   └── styles/           # Global styles and Tailwind configuration
├── tests/                # Test files using Vitest
├── .env.example          # Example environment variables
├── astro.config.mjs      # Astro configuration
├── package.json          # Project dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `pnpm dev`                | Starts local dev server at `localhost:4321`      |
| `pnpm start`              | Alias for `pnpm dev`                             |
| `pnpm build`              | Type-checks and builds production site to `./dist/` |
| `pnpm preview`            | Preview your build locally before deploying      |
| `pnpm sync`               | Sync content collections types                   |
| `pnpm check`              | Run all checks (Astro, TypeScript, Biome)        |
| `pnpm check:astro`        | Check Astro files for errors                     |
| `pnpm check:types`        | Check TypeScript types                           |
| `pnpm check:biome`        | Check files with Biome                           |
| `pnpm format`             | Format files with Biome                          |
| `pnpm lint`               | Lint files with Biome                            |
| `pnpm lint:fix`           | Lint and fix files with Biome                    |
| `pnpm test`               | Run Vitest tests                                 |
| `pnpm test:watch`         | Run Vitest in watch mode                         |
| `pnpm test:coverage`      | Run Vitest and generate coverage report          |
| `pnpm clean`              | Clean build files and dependencies               |
| `pnpm release`            | Run semantic release (CI typically)              |

## 🛠️ Configuration

This template comes pre-configured with:

- **Tailwind CSS v4** - Including typography plugin
- **SEO Tools** - Meta tags, sitemap, and RSS feed
- **Performance Optimizations** - Partytown for third-party scripts
- **Testing Framework** - Vitest configured for unit and integration tests
- **Code Quality** - Biome for linting and formatting with pre-commit hooks

## 🚀 Deployment

This template is ready to deploy to your favorite hosting platform. It works great with:

- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)
- [Cloudflare Pages](https://pages.cloudflare.com)
- [GitHub Pages](https://pages.github.com)

## 👀 Want to learn more?

Feel free to check [Astro documentation](https://docs.astro.build) or jump into the [Astro Discord server](https://astro.build/chat).

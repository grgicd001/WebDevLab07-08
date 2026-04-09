# PaperBeam – VitePress Lab (Lab 07-08)

A documentation site built with [VitePress](https://vitepress.dev/) for the fictional web technology **PaperBeam**, featuring the Flextext content system.

## About

This project was created as part of a web development lab exploring static site generation with VitePress. It includes a customized homepage, navigation, sidebar, and multiple content pages with markdown features.

## Features

- Hero landing page with logo, tagline, and action buttons
- Navbar with dropdown menu for Learning pages
- Sidebar navigation across all pages
- Custom button colours via CSS theme overrides
- Six content pages across root and `/learning` subfolder
- Markdown tables, code snippets, custom containers, emojis, and more

## Project Structure

```
Lab07-08/
├── .vitepress/
│   ├── config.mjs        # Site configuration (nav, sidebar, theme)
│   └── theme/
│       ├── index.ts      # Theme entry point
│       └── custom.css    # Custom button styles
├── public/
│   └── logo.png
├── learning/
│   ├── docs.md
│   ├── cheatsheets.md
│   └── videos.md
├── index.md              # Homepage
├── products.md
├── api.md
├── contact.md
└── package.json
```

## Getting Started

**Install dependencies:**
```bash
npm install
```

**Run the development server:**
```bash
npm run docs:dev
```

The site will be available at `http://localhost:5173`.

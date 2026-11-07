# MarkdownX Editor

A full-featured Markdown / MDX editor built with [`@mdxeditor/editor`](https://mdxeditor.dev/), React, TypeScript, and Vite.

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/@mdxeditor/editor-4.5.0-8B5CF6?logo=none" alt="@mdxeditor/editor" />
  <img src="https://img.shields.io/badge/Bun-1-FFFFFF?logo=bun&logoColor=black" alt="Bun" />
</p>

---

## Features

Every feature exported by `@mdxeditor/editor` is enabled:

- **Headings** — H1–H6 block types
- **Lists** — bullet & ordered lists
- **Blockquotes** — quote blocks
- **Thematic breaks** — horizontal rules
- **Links** — inline links + link edit dialog
- **Images** — insert + edit image dialogs
- **Tables** — insert & edit tables
- **Code blocks** — fenced code with language support
- **CodeMirror** — language-aware code block editing
- **Diff / source mode** — rich text ↔ markdown source toggle
- **Directives** — admonitions & custom directive editors
- **JSX** — JSX component editing
- **Frontmatter** — YAML frontmatter editor
- **Markdown shortcuts** — `>`, `-`, `*`, `#`, etc.
- **Search & replace** — find text in the editor
- **Max length** — character limit enforcement
- **Kitchen Sink Toolbar** — all toolbar components/primitives

Plus:

- 🌙 **Dark mode** toggle (bottom-right icon button)
- 📱 **Responsive** — fills the viewport, no outer scroll
- ⚡ **Bun** as package manager
- 🔎 **SEO-ready** — Open Graph, Twitter cards, manifest
- 📦 **PWA-ready** — `manifest.json` + `mask-icon`

---

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (recommended) or `npm` / `yarn` / `pnpm`

### Install

```bash
bun install
```

### Develop

```bash
bun run dev
```

### Build

```bash
bun run build
```

### Preview

```bash
bun run preview
```

### Lint

```bash
bun run lint
```

---

## Project Structure

```
markdownx-editor/
├── public/
│   ├── favicon.svg          # App icon / favicon / mask-icon
│   ├── icons.svg            # Inline SVG sprite
│   └── manifest.json        # PWA manifest
├── src/
│   ├── App.tsx              # Editor + theme toggle
│   ├── main.tsx             # React entry point
│   ├── theme.css            # Dark theme (Radix colors)
│   └── assets/
│       ├── react.svg
│       └── vite.svg
├── index.html
├── vite.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Scripts

| Script | Description |
|--------|-------------|
| `bun run dev` | Start Vite dev server with HMR |
| `bun run build` | Type-check + production build (Vite) |
| `bun run preview` | Serve the production build locally |
| `bun run lint` | Run Oxlint |

---

## Tech Stack

- **React 19** — UI library
- **TypeScript** — type safety
- **Vite** — build tool & dev server
- **@mdxeditor/editor** — Markdown/MDX editor (Lexical-based)
- **Bun** — package manager & runtime
- **Oxlint** — fast linting

---

## License

MIT
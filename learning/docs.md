# Documentation 📖

Welcome to the PaperBeam documentation. This guide covers everything you need to get started.

## Table of Contents

[[toc]]

## Installation

Install PaperBeam via npm:
```js
import { PaperBeam } from 'paperbeam';

const pb = new PaperBeam({ theme: 'minimal' });
pb.mount('#app');
```

Or include it via a `<script>` tag:
```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.paperbeam.io/latest/paperbeam.min.js"></script>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `theme` | string | `'default'` | Visual theme |
| `columns` | object | `{}` | Column settings |
| `userContext` | boolean | `false` | Enable personalization |

## Core Concepts

### Adaptive Columns
Columns automatically resize based on screen width. No media queries needed.

### Editorial Curation 🎨
Blend images and text into magazine-style spreads effortlessly.

::: info Note
All layout decisions are made at runtime, not at build time.
:::
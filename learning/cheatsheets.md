# Cheatsheets 📋

Quick reference guides for common PaperBeam patterns.

## Layout Cheatsheet

| Task | Code |
|------|------|
| Init with defaults | `PaperBeam.init('#app')` |
| Set theme | `PaperBeam.setTheme('dark')` |
| Refresh layout | `PaperBeam.refresh()` |
| Destroy instance | `PaperBeam.destroy()` |

## Common Patterns

### Two-Column Layout 🖼️
```js
PaperBeam.init('#app', {
  columns: { count: 2, gap: 24 }
});
```

### Full-Width Hero
```html
<paper-region full-width>
  <h1>Welcome</h1>
  <p>Your tagline here.</p>
</paper-region>
```

## Keyboard Shortcuts

- `Ctrl + Shift + P` — Open layout panel
- `Ctrl + Shift + R` — Refresh layout
- `Ctrl + Shift + D` — Toggle debug mode

::: warning
Keyboard shortcuts only work when the PaperBeam editor is in focus.
:::

## Theme Tokens

| Token | Default Value |
|-------|--------------|
| `--pb-primary` | `#13b38e` |
| `--pb-font-size` | `16px` |
| `--pb-gap` | `1rem` |
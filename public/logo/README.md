# Ahmed Elbeek Import & Export — Vector Logo Assets

Faithfully vectorized transparent SVG assets derived from the official high-resolution master lockup (`public/images/Logo-remove-background.jpg`), with true transparent cutouts (`fill-rule="evenodd"`), tight viewBoxes (~4% margin), `<title>` accessibility labels, and SVGO optimization.

## Files

| File | Usage | Colors | ViewBox Aspect | Minimum Size |
| :--- | :--- | :--- | :--- | :--- |
| `logo-full-light.svg` | Light/white backgrounds, print, light documents | Globe, wordmark & rules `#AE0001`; subtitle `#2F302F` | Full lockup (~1.29:1) | `>= 120px` wide |
| `logo-full-dark.svg` | Dark surfaces (`#0B0F14`, `#121B26`, `#151F2B`), footer, splash & OG image | Globe `#D3202A`; wordmark `#F5F6F7`; rules `#B51219`; subtitle `#D4B27A` | Full lockup (~1.29:1) | `>= 120px` wide |
| `logo-horizontal-dark.svg` | Header navbar horizontal lockup on dark backgrounds | Globe `#D3202A`; gold hairline `#D4B27A`; wordmark `#F5F6F7`; rules `#B51219`; subtitle `#D4B27A` | Horizontal (~4.88:1) | `>= 150px` wide |
| `logo-mark.svg` | Favicons, compact badges on light surfaces | Globe & orbit mark `#AE0001` | Square `1:1` | `>= 24px` |
| `logo-mark-dark.svg` | Website header lockup, dark badges, Apple touch icon | Globe & orbit mark `#D3202A` | Square `1:1` | `>= 24px` |

## Derived Raster Exports

- `src/app/icon.png` — 512×512 PNG exported from `logo-mark.svg` on transparent background.
- `src/app/apple-icon.png` — 180×180 PNG exported from `logo-mark-dark.svg` centered on `#0B0F14` with ~18% padding.
- `public/og-logo.png` — 1200×630 PNG exported from `logo-full-dark.svg` centered on `#0B0F14` with a subtle `#D4B27A` hairline frame.

## Usage Guidelines

- Keep all vector fills and continent cutouts unmodified; never place opaque white boxes behind dark-mode variants.
- Observe minimum display sizes (`>= 24px` for the globe mark; `>= 120px` width for the full stacked lockup containing `"IMPORT & EXPORT"`).

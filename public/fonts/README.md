# Accent font: Gagalin

Gagalin is a licensed display font (not distributed on Google Fonts), used per
the MJG brand guide **only for decorative accents and promotional callouts**,
never for headings or body copy.

To activate it on this site:

1. Purchase/download your licensed Gagalin font files (e.g. `Gagalin-Regular.woff2`).
2. Drop them in this folder: `public/fonts/`.
3. They'll be picked up automatically by the `@font-face` rule already
   defined in `src/index.css`:

   ```css
   @font-face {
     font-family: 'Gagalin';
     src: url('/fonts/Gagalin-Regular.woff2') format('woff2');
     font-display: swap;
   }
   ```

Until the font file is added, `font-accent` gracefully falls back to
Montserrat so the site still looks correct.

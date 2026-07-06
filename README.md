# MJG Landscaping Design & Hardscaping: Website

Production website for MJG Landscaping Design & Hardscaping, built with
React, Vite, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
public/
  logo/          MJG logo files (from the brand guide)
  images/        gallery/ (15 gallery photos), services/<slug>/ (3 photos per service), hero/ (hero photo)
  fonts/         Drop your licensed Gagalin font file here
src/
  components/
    layout/      Navbar, MobileMenu, Footer, FloatingCallButton, Layout
    home/        Hero, ServicesSection, TrustSection, GalleryPreview, CTASection
    services/    (reserved for service-detail-only components)
    gallery/     GalleryGrid, GalleryItem (4:3 grid with lightbox)
    quote/       QuoteForm
    contact/     ContactForm, ContactInfo
    ui/          Container, SectionHeading, Badge, ServiceIcon
    seo/         SEO (per-page meta tags), LocalBusinessSchema (JSON-LD)
  data/          business.js, services.js, gallery.js, navigation.js: edit these to update site content
  pages/         One file per route: Home, Services, Gallery, About, RequestQuote, Contact, NotFound
```

## Adding your own content

- **Business info** (phone, hours, service area): edit `src/data/business.js`.
- **Services**: edit `src/data/services.js`.
- **Hero photo**: drop a photo at `public/images/hero/featured-job.jpg`.
- **Gallery photos**: the Gallery page is a fixed grid of 15 photos (5
  rows of 3, each a 4:3 rectangle), no tabs and no video support. Drop
  photos into `public/images/gallery/` and update the matching entry in
  `src/data/gallery.js`.
- **Service section photos**: each of the 6 services has its own section
  on the Services page with 3 photos. Drop them into
  `public/images/services/<slug>/` and update that service's `images`
  array in `src/data/services.js`.
- **Accent font (Gagalin)**: add your licensed font file to `public/fonts/`
  see `public/fonts/README.md`.

## SEO

- Per-page `<title>`/meta description via `src/components/seo/SEO.jsx`.
- LocalBusiness/HomeAndConstructionBusiness JSON-LD schema via
  `src/components/seo/LocalBusinessSchema.jsx` (rendered on the homepage).
- Update the canonical domain in `index.html` and `SEO.jsx` once the site
  has a live domain.

## Forms

`QuoteForm` and `ContactForm` are fully built with validation but are not
wired to a backend. Connect them to your form service or API of choice
(Formspree, Netlify Forms, a custom endpoint, etc.); see the `TODO`
comments in each component.

## Using GitHub

This project is already a git repository with an initial commit. To push
it to GitHub:

```bash
git remote add origin https://github.com/<your-username>/<your-repo>.git
git branch -M main
git push -u origin main
```

A GitHub Actions workflow at `.github/workflows/ci.yml` runs `npm ci` and
`npm run build` on every push and pull request to `main`, so broken builds
get caught automatically.

### Deploying

**GitHub Pages (already configured for this repo):**

This project is set up to deploy automatically to
`https://benneas60.github.io/mjg-website/` via GitHub Actions
(`.github/workflows/deploy.yml`). One-time setup, done in the browser:

1. In the repo, go to **Settings → Pages**.
2. Under "Build and deployment" → **Source**, choose **GitHub Actions**.
3. Push (or re-upload) to the `main` branch. The **Actions** tab will show
   the "Deploy to GitHub Pages" workflow running, then the site goes live
   at the URL above in a minute or two.

If you ever rename the repository, update the `base` path in
`vite.config.js` to match (e.g. `/new-repo-name/`) or the site's images
and internal links will 404.

Because GitHub Pages doesn't support the server-side rewrites that
`react-router-dom`'s standard router needs, this project uses
`HashRouter` instead (URLs look like `.../#/services`). If you later move
to Vercel or Netlify, which do support this, you can switch back to
`BrowserRouter` in `src/main.jsx` for cleaner URLs.

**Vercel or Netlify** (alternative, no `base` path or router changes needed):

- **Vercel**: import the GitHub repo at vercel.com/new
- **Netlify**: "Add new site" -> "Import an existing project" -> pick the repo

Both auto-detect the Vite config and handle SPA routing correctly, so if
you go this route, set `base: '/'` in `vite.config.js` and switch back to
`BrowserRouter` in `src/main.jsx` first.


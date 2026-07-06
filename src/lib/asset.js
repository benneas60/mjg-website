// Prefixes a public-folder asset path with Vite's configured base URL.
//
// This matters because this site is hosted at a sub-path on GitHub Pages
// (e.g. yourname.github.io/mjg-website/) rather than at a domain root.
// A hardcoded path like "/logo/mjg-logo-mark.png" would resolve to
// yourname.github.io/logo/mjg-logo-mark.png and 404. This helper makes
// every asset reference resolve correctly no matter where the site is
// deployed, change `base` in vite.config.js and everything still works.
export function asset(path) {
  const clean = path.replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${clean}`
}

// Gallery data source. The gallery page is a fixed grid of 15 photo slots
// (5 rows x 3 columns), each a 4:3 rectangle. No categories, no tabs, no
// video support.
//
// HOW TO ADD YOUR OWN PHOTOS:
//   1. Drop a photo into /public/images/gallery/, ideally already cropped
//      or shot close to a 4:3 ratio so it fills the tile cleanly.
//   2. Update the matching entry's src below (no leading slash).
//
// Paths are resolved through the asset() helper at render time, which
// keeps everything working whether the site is hosted at a domain root
// or a sub-path like GitHub Pages.

export const galleryItems = Array.from({ length: 15 }, (_, i) => ({
  id: `g${i + 1}`,
  src: `images/gallery/placeholder-${i + 1}.jpg`,
  alt: `Completed project photo ${i + 1}`,
}))

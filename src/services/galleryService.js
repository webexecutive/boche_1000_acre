import { gallery } from '../data/gallery.js';

// O(1) lookup map — built once at module load
const galleryMap = Object.fromEntries(
  gallery.map(img => [img.id, img])
);

/**

* Resolve a single image by global ID.
* Returns the item with a `variants` object containing all URLs.
*
* @param {number} id
* @returns {{ id, category, alt, showInGallery, variants: { small, medium, large, blur } } | null}
  */
export function getImageById(id) {
  const img = galleryMap[id];
  if (!img) return null;

  const base =
    img.category === "banner"
      ? `/images/gallery/banner/${id}`
      : `/images/gallery/${img.category}/${id}`;

  return {
    ...img,
    variants: {
      small: `${base}/small.webp`,
      medium: `${base}/medium.webp`,
      large: `${base}/large.webp`,
      blur: `${base}/blur.webp`,
    },
  };
}

/**

* Get all images, or filter by category.
* Only returns images that should be visible in gallery.
*
* @param {string} [category] — omit or pass 'all' for everything
* @returns {Array}
  */
export function getImagesByCategory(category) {
  const source =
    !category || category === 'all'
      ? gallery
      : gallery.filter(img => img.category === category);

  return source
    .filter(img => img.showInGallery !== false) // 🔥 visibility control
    .map(img => getImageById(img.id))
    .filter(Boolean);
}

/**

* Resolve an array of global image IDs to full items with variants.
* Used in events, banners, etc.
*
* NOTE: Does NOT filter by showInGallery
* because hidden images may still be used elsewhere.
*
* @param {number[]} ids
* @returns {Array}
  */
export function resolveImageIds(ids = []) {
  return ids
    .map(id => getImageById(id))
    .filter(Boolean);
}

// Real Unsplash photography (hotlinked CDN). Build sizes on demand.
const CDN = 'https://images.unsplash.com/'

/** Build a responsive Unsplash URL. */
export const uns = (id, w = 1400, q = 72) =>
  `${CDN}${id}?auto=format&fit=crop&w=${w}&q=${q}`

// Named photo slugs — only the ones the site actually renders.
export const IMG = {
  // Hero / cinematic + closing CTAs
  sleekNight: 'photo-1764013178104-d937aaf92e2c',
  ferrariDark: 'photo-1645400379459-f6fd3d963fd4',
  yellowNight: 'photo-1593481672478-df11c8d22085',

  // Exotics
  mclaren: 'photo-1592199299806-e7349699f6a9',
  lambo1: 'photo-1615394695852-da39a8df9bf1',

  // Luxury
  bmwM3: 'photo-1625690096555-a0a4d190901c',
  mercReflect: 'photo-1485291783200-3e6868304e3b',
  blackBuilding: 'photo-1692632146184-08b6f4828a23',
  suvRoad: 'photo-1626470526588-5aea3bc65d2a',

  // Interior
  bentleyInt: 'photo-1629820408206-e9fc918abf63',

  // Everyday
  whiteFord: 'photo-1560037962-08931d95007f',
  whiteDriveway: 'photo-1773609689026-062b9216661a',
  mustangWash: 'photo-1575844611398-2a68400b437c',

  // City / context
  nyNight: 'photo-1506606401543-2e73709cebb4',
}

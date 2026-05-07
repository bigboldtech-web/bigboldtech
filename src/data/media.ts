/**
 * Curated stock imagery + video.
 *
 * Sources:
 *  - Unsplash (https://unsplash.com/license) — free, commercial OK, no attribution required
 *  - Pexels (https://www.pexels.com/license) — free, commercial OK, no attribution required
 *
 * URLs use the CDN's transformation params (w, q, fm) so we get sized,
 * compressed assets without the next/image runtime needing to hit origin.
 *
 * We add a `?bbt=v1` cache-buster suffix to make replacement obvious later:
 * grep for `?bbt=v1` to find every placeholder image.
 */

export type MediaRef = {
  src: string
  alt: string
  /** Aspect ratio hint, e.g. "16/9", "4/5" */
  ratio?: string
}

const u = (id: string, w = 1600, q = 75) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}&bbt=v1`

export const media = {
  // Hero / abstract product imagery
  heroAbstract: {
    src: u('1639762681485-074b7f938ba0', 2000, 80),
    alt: 'Abstract data visualization with depth-of-field highlights',
    ratio: '21/9',
  } satisfies MediaRef,

  // Team / studio
  teamHuddle: {
    src: u('1521737604893-d14cc237f11d', 1600),
    alt: 'Engineers reviewing code together at a desk',
    ratio: '4/3',
  } satisfies MediaRef,
  teamWhiteboard: {
    src: u('1552664730-d307ca884978', 1600),
    alt: 'Strategy session in front of a whiteboard',
    ratio: '4/3',
  } satisfies MediaRef,
  studioWide: {
    src: u('1497366216548-37526070297c', 2000),
    alt: 'Wide view of a modern product studio interior',
    ratio: '21/9',
  } satisfies MediaRef,

  // Product / screen surfaces
  dashboardClose: {
    src: u('1551288049-bebda4e38f71', 1800),
    alt: 'Analytics dashboard with charts and KPIs',
    ratio: '16/10',
  } satisfies MediaRef,
  codeDark: {
    src: u('1517694712202-14dd9538aa97', 1600),
    alt: 'Editor with syntax-highlighted code on a dark background',
    ratio: '16/9',
  } satisfies MediaRef,
  mobileApp: {
    src: u('1512941937669-90a1b58e7e9c', 1200),
    alt: 'Mobile application UI on a phone in hand',
    ratio: '3/4',
  } satisfies MediaRef,

  // Industry vibe (used on enterprise track)
  finance: {
    src: u('1554224155-8d04cb21cd6c', 1800),
    alt: 'Trading floor with market data displays',
    ratio: '16/9',
  } satisfies MediaRef,
  logistics: {
    src: u('1586528116311-ad8dd3c8310d', 1800),
    alt: 'Container shipping yard at dusk',
    ratio: '16/9',
  } satisfies MediaRef,
  healthcare: {
    src: u('1576091160550-2173dba999ef', 1800),
    alt: 'Modern hospital corridor with soft lighting',
    ratio: '16/9',
  } satisfies MediaRef,
  retail: {
    src: u('1607082348824-0a96f2a4b9da', 1800),
    alt: 'Retail commerce checkout interface',
    ratio: '16/9',
  } satisfies MediaRef,
}

/**
 * Background videos (autoplay, muted, loop). Pexels CDN, MP4.
 * Always paired with a poster image for first-paint.
 */
export const videos = {
  abstractFlow: {
    src: 'https://videos.pexels.com/video-files/3141210/3141210-uhd_3840_2160_25fps.mp4',
    poster: u('1639762681485-074b7f938ba0', 1600, 60),
    alt: 'Abstract flowing particles',
  },
  cityNight: {
    src: 'https://videos.pexels.com/video-files/3015510/3015510-uhd_3840_2160_24fps.mp4',
    poster: u('1480714378408-67cf0d13bc1b', 1600, 60),
    alt: 'Time-lapse of a city at night',
  },
  studioBlur: {
    src: 'https://videos.pexels.com/video-files/853874/853874-hd_1920_1080_25fps.mp4',
    poster: u('1497366216548-37526070297c', 1600, 60),
    alt: 'Soft-focus studio interior',
  },
}

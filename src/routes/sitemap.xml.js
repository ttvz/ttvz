export async function get() {
    const body = sitemap()

    const headers = {
        'Cache-Control': 'max-age=0, s-maxage=3600',
        'Content-Type': 'application/xml',
    }
    return {
        headers,
        body,
    }
}

const sitemap = () => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  <url>
    <loc>https://www.ttvz.fr</loc>
    <lastmod>2021-01-11</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.ttvz.fr/about</loc>
    <lastmod>2021-01-11</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://www.ttvz.fr/contact</loc>
    <lastmod>2021-01-11</lastmod>
    <changefreq>monthly</changefreq>
  </url>
</urlset>`
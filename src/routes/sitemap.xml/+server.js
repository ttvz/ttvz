const SITE = 'https://www.ttvz.fr';
const LASTMOD = '2026-06-28';

export const prerender = true;

export function GET() {
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
	<url>
		<loc>${SITE}/fr</loc>
		<lastmod>${LASTMOD}</lastmod>
		<changefreq>monthly</changefreq>
		<priority>1.0</priority>
		<xhtml:link rel="alternate" hreflang="fr" href="${SITE}/fr"/>
		<xhtml:link rel="alternate" hreflang="en" href="${SITE}/en"/>
		<xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/fr"/>
	</url>
	<url>
		<loc>${SITE}/en</loc>
		<lastmod>${LASTMOD}</lastmod>
		<changefreq>monthly</changefreq>
		<priority>0.9</priority>
		<xhtml:link rel="alternate" hreflang="fr" href="${SITE}/fr"/>
		<xhtml:link rel="alternate" hreflang="en" href="${SITE}/en"/>
		<xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/fr"/>
	</url>
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}

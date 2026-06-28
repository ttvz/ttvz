export const SITE_URL = 'https://www.ttvz.fr';
export const OG_IMAGE = '/og-image.png';
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export function personLd() {
	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Person',
				'@id': `${SITE_URL}#thibaut`,
				name: 'Thibaut Valez',
				url: SITE_URL,
				jobTitle: 'Consultant produit',
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Lyon',
					addressCountry: 'FR'
				},
				sameAs: ['https://linkedin.com/in/thibaut-valez']
			},
			{
				'@type': 'ProfessionalService',
				'@id': `${SITE_URL}#ttvz`,
				name: 'TTVZ - Conseil produit',
				url: SITE_URL,
				areaServed: ['FR', 'CH', 'EU'],
				founder: { '@id': `${SITE_URL}#thibaut` },
				knowsAbout: [
					'Product management',
					'Conduite du changement',
					'Discovery produit',
					'Priorisation par la valeur'
				]
			}
		]
	};
}

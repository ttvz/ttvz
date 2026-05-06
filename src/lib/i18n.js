export const SUPPORTED_LOCALES = ['fr', 'en'];
export const DEFAULT_LOCALE = 'fr';

const LEGACY_MAP = {
	'fr-FR': 'fr',
	'en-EN': 'en',
	'en-US': 'en',
	'en-GB': 'en'
};

export function normalizeLocale(slug) {
	if (!slug) return null;
	if (SUPPORTED_LOCALES.includes(slug)) return slug;
	if (LEGACY_MAP[slug]) return LEGACY_MAP[slug];
	return null;
}

export function isLegacyLocale(slug) {
	return Object.prototype.hasOwnProperty.call(LEGACY_MAP, slug);
}

export function detectLocale(navigatorLocale) {
	if (!navigatorLocale) return DEFAULT_LOCALE;
	const short = navigatorLocale.toLowerCase().split('-')[0];
	return SUPPORTED_LOCALES.includes(short) ? short : DEFAULT_LOCALE;
}

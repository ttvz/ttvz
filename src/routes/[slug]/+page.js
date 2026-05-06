import { redirect, error } from '@sveltejs/kit';
import { SUPPORTED_LOCALES, normalizeLocale, isLegacyLocale } from '$lib/i18n.js';

export function load({ params }) {
	const { slug } = params;

	if (isLegacyLocale(slug)) {
		redirect(301, `/${normalizeLocale(slug)}`);
	}

	if (!SUPPORTED_LOCALES.includes(slug)) {
		error(404, 'Not found');
	}

	return { locale: slug };
}

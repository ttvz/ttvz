import { redirect } from '@sveltejs/kit';
import { normalizeLocale, DEFAULT_LOCALE } from '$lib/i18n.js';

export function load({ params }) {
	const target = normalizeLocale(params.slug) ?? DEFAULT_LOCALE;
	redirect(301, `/${target}#contact`);
}

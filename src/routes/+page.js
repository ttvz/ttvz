import { redirect } from '@sveltejs/kit';
import { get } from 'svelte/store';
import { persisted } from 'svelte-persisted-store';
import { detectLocale, DEFAULT_LOCALE, SUPPORTED_LOCALES } from '$lib/i18n.js';

export const prerender = false;

export function load({ request }) {
	let target = DEFAULT_LOCALE;

	if (typeof window !== 'undefined') {
		const preferences = persisted('preferences', { locale: null });
		const stored = get(preferences).locale;
		if (stored && SUPPORTED_LOCALES.includes(stored)) {
			target = stored;
		} else {
			target = detectLocale(navigator.language);
		}
	} else {
		const accept = request?.headers?.get('accept-language') || '';
		const first = accept.split(',')[0]?.trim();
		target = detectLocale(first);
	}

	redirect(308, `/${target}`);
}

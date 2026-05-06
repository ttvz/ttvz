import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '$lib/i18n.js';

export async function handle({ event, resolve }) {
	const segment = event.url.pathname.split('/')[1];
	const lang = SUPPORTED_LOCALES.includes(segment) ? segment : DEFAULT_LOCALE;

	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('<html lang="fr">', `<html lang="${lang}">`)
	});
}

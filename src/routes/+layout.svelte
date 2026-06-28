<script>
	import '@fontsource/jost/300.css';
	import '@fontsource/jost/400.css';
	import '@fontsource/jost/500.css';
	import '@fontsource/jost/600.css';
	import '@fontsource/jost/700.css';
	import '@fontsource/jost/300-italic.css';
	import '@fontsource/jost/400-italic.css';
	import '@fontsource/jost/500-italic.css';

	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { addMessages, init, locale as i18nLocale } from 'svelte-i18n';
	import { page } from '$app/stores';

	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';

	import en from '../lang/en.json';
	import fr from '../lang/fr.json';

	import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from '$lib/i18n.js';

	addMessages('fr', fr);
	addMessages('en', en);
	init({ fallbackLocale: DEFAULT_LOCALE, initialLocale: DEFAULT_LOCALE });

	const localeStore = writable(DEFAULT_LOCALE);
	setContext('locale', localeStore);

	$: {
		const slug = $page.params?.slug;
		const next = SUPPORTED_LOCALES.includes(slug) ? slug : DEFAULT_LOCALE;
		localeStore.set(next);
		i18nLocale.set(next);
	}
</script>

<a class="skip-link" href="#main">Aller au contenu</a>
<Header />
<main id="main" tabindex="-1">
	<slot />
</main>
<Footer />

<style>
	main {
		display: block;
		min-height: 60vh;
		outline: none;
	}
	.skip-link {
		position: absolute;
		left: -9999px;
		top: 0;
		padding: 0.75rem 1rem;
		background: var(--color-text);
		color: #fff;
		font-size: 0.95rem;
		z-index: 999;
		border-radius: var(--radius-sm);
	}
	.skip-link:focus {
		left: 1rem;
		top: 1rem;
	}
</style>

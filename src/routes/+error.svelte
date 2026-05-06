<script>
	import { page } from '$app/stores';
	import { getContext } from 'svelte';
	const localeStore = getContext('locale');
</script>

<svelte:head>
	<title>404 — ttvz</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<section class="section error">
	<div class="container-narrow">
		<p class="eyebrow">Erreur {$page.status}</p>
		<h1>Page introuvable</h1>
		<p class="lead">Le contenu que vous cherchez n'existe pas ou a été déplacé.</p>
		<a class="text-link" href={`/${$localeStore ?? 'fr'}`}>Retour à l'accueil →</a>
	</div>
</section>

<style lang="scss">
	.error {
		padding-block: clamp(6rem, 12vw, 10rem);
	}
	.lead {
		color: var(--color-text-soft);
		font-size: 1.1rem;
		margin-bottom: 2rem;
	}
</style>

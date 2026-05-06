<script>
	import { _ } from 'svelte-i18n';
	import { getContext } from 'svelte';
	import { goto } from '$app/navigation';
	import { persisted } from 'svelte-persisted-store';

	const localeStore = getContext('locale');
	const preferences = persisted('preferences', { locale: null });

	let scrolled = false;

	function setLocale(target) {
		if ($localeStore === target) return;
		preferences.set({ locale: target });
		const hash = typeof window !== 'undefined' ? window.location.hash : '';
		goto(`/${target}${hash}`, { replaceState: false });
	}
</script>

<svelte:window on:scroll={() => (scrolled = window.scrollY > 8)} />

<header class:scrolled aria-label="navigation principale">
	<div class="bar container">
		<a class="logo" href={`/${$localeStore}`} aria-label="ttvz — accueil">
			<span aria-hidden="true">ttvz</span>
		</a>

		<nav class="anchors" aria-label="sections">
			<a href={`/${$localeStore}#approche`}>{$_('nav.approach')}</a>
			<a href={`/${$localeStore}#missions`}>{$_('nav.work')}</a>
			<a href={`/${$localeStore}#contact`}>{$_('nav.contact')}</a>
		</nav>

		<div class="right">
			<div class="lang" role="group" aria-label="langue">
				<button
					type="button"
					class:active={$localeStore === 'fr'}
					on:click={() => setLocale('fr')}>FR</button
				>
				<span aria-hidden="true">·</span>
				<button
					type="button"
					class:active={$localeStore === 'en'}
					on:click={() => setLocale('en')}>EN</button
				>
			</div>
			<a class="cta" href={$_('contact.calendly')} target="_blank" rel="noopener">
				{$_('nav.book')}
			</a>
		</div>
	</div>
</header>

<style lang="scss">
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 50;
		background: rgba(255, 255, 255, 0);
		backdrop-filter: blur(0);
		transition:
			background 0.25s var(--ease-out),
			backdrop-filter 0.25s var(--ease-out),
			border-color 0.25s var(--ease-out);
		border-bottom: 1px solid transparent;
	}

	header.scrolled {
		background: rgba(255, 255, 255, 0.85);
		backdrop-filter: saturate(180%) blur(12px);
		border-bottom-color: var(--color-rule);
	}

	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		height: 72px;
	}

	.logo {
		font-weight: 700;
		font-size: 1.35rem;
		letter-spacing: -0.02em;
		color: var(--color-text);
	}

	.logo span {
		color: var(--color-accent);
	}

	.anchors {
		display: none;
		gap: 2rem;
	}

	.anchors a {
		font-size: 0.95rem;
		color: var(--color-text-soft);
	}

	.anchors a:hover {
		color: var(--color-accent);
	}

	.right {
		display: flex;
		align-items: center;
		gap: 1.25rem;
	}

	.lang {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		font-size: 0.85rem;
		color: var(--color-text-muted);
	}

	.lang button {
		font-weight: 400;
		color: var(--color-text-muted);
		letter-spacing: 0.05em;
	}

	.lang button.active {
		color: var(--color-text);
		font-weight: 500;
	}

	.lang button:hover {
		color: var(--color-accent);
	}

	.cta {
		display: inline-flex;
		align-items: center;
		padding: 0.55rem 1rem;
		background: var(--color-text);
		color: #fff;
		font-size: 0.9rem;
		font-weight: 500;
		border-radius: var(--radius-sm);
		transition: background 0.18s var(--ease-out);
	}

	.cta:hover {
		background: var(--color-accent);
	}

	@media (min-width: 820px) {
		.anchors {
			display: flex;
		}
	}

	@media (max-width: 520px) {
		.cta {
			display: none;
		}
	}
</style>

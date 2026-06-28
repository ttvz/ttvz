<script>
	import { _ } from 'svelte-i18n';
	const year = new Date().getFullYear();
</script>

<footer>
	<div class="container inner">
		<div class="brand">
			<span class="logo">ttvz</span>
			<span class="muted">© Thibaut Valez {year}</span>
		</div>
		<nav class="links" aria-label="liens secondaires">
			<a href={$_('contact.calendly')} target="_blank" rel="noopener">Calendly</a>
			<a href={$_('contact.linkedin')} target="_blank" rel="noopener">LinkedIn</a>
		</nav>
	</div>
</footer>

<style>
	footer {
		border-top: 1px solid var(--color-rule);
		padding-block: 2.5rem;
		background: var(--color-bg);
	}
	.inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1.5rem;
		flex-wrap: wrap;
	}
	.brand {
		display: flex;
		align-items: baseline;
		gap: 1rem;
	}
	.logo {
		color: var(--color-text);
		font-style: italic;
		font-weight: 400;
		font-size: 1.6rem;
		letter-spacing: 0.02em;
	}
	.muted {
		font-size: 0.66rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.26em;
		color: var(--color-text-muted);
	}
	.links {
		display: flex;
		gap: 1.75rem;
		flex-wrap: wrap;
	}
	.links a {
		font-size: 0.66rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.26em;
		color: var(--color-text-muted);
	}
	.links a:hover {
		color: var(--color-accent);
	}
</style>

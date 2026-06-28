<script>
	import { _ } from 'svelte-i18n';
	import { page } from '$app/stores';
	import { SITE_URL, OG_IMAGE, OG_IMAGE_WIDTH, OG_IMAGE_HEIGHT, personLd } from '$lib/seo.js';

	$: lang = $page.params?.slug === 'en' ? 'en' : 'fr';
	$: canonical = `${SITE_URL}/${lang}`;
	$: ogLocale = lang === 'fr' ? 'fr_FR' : 'en_US';
	$: ogLocaleAlt = lang === 'fr' ? 'en_US' : 'fr_FR';
	$: jsonLd = JSON.stringify(personLd());

	$: offers = [
		{
			index: $_('offers.o1_index'),
			title: $_('offers.o1_title'),
			lead: $_('offers.o1_lead'),
			description: $_('offers.o1_description')
		},
		{
			index: $_('offers.o2_index'),
			title: $_('offers.o2_title'),
			lead: $_('offers.o2_lead'),
			description: $_('offers.o2_description')
		}
	];

	$: missions = [
		{
			client: $_('missions.m1_client'),
			meta: $_('missions.m1_meta'),
			period: $_('missions.m1_period'),
			metric: $_('missions.m1_metric'),
			description: $_('missions.m1_description')
		},
		{
			client: $_('missions.m2_client'),
			meta: $_('missions.m2_meta'),
			period: $_('missions.m2_period'),
			metric: $_('missions.m2_metric'),
			description: $_('missions.m2_description')
		},
		{
			client: $_('missions.m3_client'),
			meta: $_('missions.m3_meta'),
			period: $_('missions.m3_period'),
			metric: $_('missions.m3_metric'),
			description: $_('missions.m3_description')
		},
		{
			client: $_('missions.m4_client'),
			meta: $_('missions.m4_meta'),
			period: $_('missions.m4_period'),
			metric: $_('missions.m4_metric'),
			description: $_('missions.m4_description')
		}
	];

	$: facts = [
		{
			value: $_('facts.a_value'),
			unit: $_('facts.a_unit'),
			label: $_('facts.a_label'),
			detail: $_('facts.a_detail')
		},
		{
			value: $_('facts.b_value'),
			unit: $_('facts.b_unit'),
			label: $_('facts.b_label'),
			detail: $_('facts.b_detail')
		},
		{
			value: $_('facts.c_value'),
			unit: $_('facts.c_unit'),
			label: $_('facts.c_label'),
			detail: $_('facts.c_detail')
		}
	];

	$: labs = [
		{
			name: $_('labs.l1_name'),
			tagline: $_('labs.l1_tagline'),
			description: $_('labs.l1_description')
		},
		{
			name: $_('labs.l2_name'),
			tagline: $_('labs.l2_tagline'),
			description: $_('labs.l2_description')
		}
	];
</script>

<svelte:head>
	<title>{$_('seo.title')}</title>
	<meta name="description" content={$_('seo.description')} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
	<meta name="author" content="Thibaut Valez" />

	<link rel="canonical" href={canonical} />
	<link rel="alternate" hreflang="fr" href={`${SITE_URL}/fr`} />
	<link rel="alternate" hreflang="en" href={`${SITE_URL}/en`} />
	<link rel="alternate" hreflang="x-default" href={`${SITE_URL}/fr`} />

	<meta property="og:type" content="profile" />
	<meta property="og:site_name" content="ttvz" />
	<meta property="og:title" content={$_('seo.title')} />
	<meta property="og:description" content={$_('seo.description')} />
	<meta property="og:url" content={canonical} />
	<meta property="og:locale" content={ogLocale} />
	<meta property="og:locale:alternate" content={ogLocaleAlt} />
	<meta property="og:image" content={`${SITE_URL}${OG_IMAGE}`} />
	<meta property="og:image:width" content={String(OG_IMAGE_WIDTH)} />
	<meta property="og:image:height" content={String(OG_IMAGE_HEIGHT)} />
	<meta property="og:image:alt" content="Thibaut Valez - Conseil produit" />
	<meta property="profile:first_name" content="Thibaut" />
	<meta property="profile:last_name" content="Valez" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={$_('seo.title')} />
	<meta name="twitter:description" content={$_('seo.description')} />
	<meta name="twitter:image" content={`${SITE_URL}${OG_IMAGE}`} />

	{@html `<script type="application/ld+json">${jsonLd}<\/script>`}
</svelte:head>

<section id="hero" class="hero">
	<div class="container hero__inner">
		<p class="eyebrow hero__eyebrow">{$_('hero.eyebrow')}</p>
		<h1 class="hero__title">{$_('hero.title')}</h1>
		<p class="hero__lead">{$_('hero.lead')}</p>
		<div class="hero__cta">
			<a class="cta" href={$_('contact.calendly')} target="_blank" rel="noopener">
				{$_('hero.cta_primary')}
				<span aria-hidden="true">→</span>
			</a>
			<a class="hero__secondary" href={$_('contact.linkedin')} target="_blank" rel="noopener">
				{$_('hero.cta_secondary')}
				<span aria-hidden="true">↗</span>
			</a>
		</div>
	</div>
</section>

<section id="offres" class="section section--cream offers">
	<div class="container">
		<p class="eyebrow">{$_('offers.eyebrow')}</p>
		<p class="offers__lead">{$_('offers.lead')}</p>
		<div class="offers__grid">
			{#each offers as offer}
				<article class="offers__card">
					<span class="offers__index">{offer.index}</span>
					<h2 class="offers__title">{offer.title}</h2>
					<p class="offers__card-lead">{offer.lead}</p>
					<p class="offers__description">{offer.description}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<section id="approche" class="section approach">
	<div class="container">
		<p class="eyebrow">{$_('approach.eyebrow')}</p>
		<ol class="approach__claims">
			<li class="approach__claim">{$_('approach.claim_a')}</li>
			<li class="approach__claim">{$_('approach.claim_b')}</li>
			<li class="approach__claim">{$_('approach.claim_c')}</li>
		</ol>
		<div class="approach__method">
			<p class="approach__lead">{$_('approach.lead')}</p>
			<p class="approach__honesty">{$_('approach.honesty')}</p>
		</div>
	</div>
</section>

<section id="facts" class="section section--cream facts">
	<div class="container">
		<p class="eyebrow facts__eyebrow">{$_('facts.eyebrow')}</p>
		<ul class="facts__grid">
			{#each facts as fact}
				<li class="facts__item">
					<span class="facts__value">
						{fact.value}{#if fact.unit}<span class="facts__unit">{fact.unit}</span>{/if}
					</span>
					<span class="facts__label">{fact.label}</span>
					<span class="facts__detail">{fact.detail}</span>
				</li>
			{/each}
		</ul>
		<p class="facts__certifs">
			<span class="facts__certifs-label">{$_('facts.certifs_label')}</span>
			<span class="facts__certifs-list">{$_('facts.certifs_list')}</span>
		</p>
	</div>
</section>

<section id="missions" class="section missions">
	<div class="container">
		<p class="eyebrow">{$_('missions.eyebrow')}</p>
		<ol class="missions__list">
			{#each missions as mission, i}
				<li class="missions__item">
					<span class="missions__index">{String(i + 1).padStart(2, '0')}</span>
					<div class="missions__body">
						<header class="missions__head">
							<h3 class="missions__client">{mission.client}</h3>
							{#if mission.period}
								<span class="missions__period">{mission.period}</span>
							{/if}
						</header>
						<p class="missions__meta">{mission.meta}</p>
						<p class="missions__metric">{mission.metric}</p>
						<p class="missions__description">{mission.description}</p>
					</div>
				</li>
			{/each}
		</ol>
		<p class="missions__others">
			<span class="missions__others-label">{$_('missions.others_label')}</span>
			<span class="missions__others-list">{$_('missions.others_list')}</span>
		</p>
	</div>
</section>

<section id="labs" class="section section--cream labs">
	<div class="container">
		<p class="eyebrow">{$_('labs.eyebrow')}</p>
		<p class="labs__lead">{$_('labs.lead')}</p>
		<div class="labs__grid">
			{#each labs as lab}
				<article class="labs__card">
					<h2 class="labs__name">{lab.name}</h2>
					<p class="labs__tagline">{lab.tagline}</p>
					<p class="labs__description">{lab.description}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<section id="contact" class="section final">
	<div class="container">
		<p class="eyebrow final__eyebrow">{$_('final.eyebrow')}</p>
		<h2 class="final__title">{$_('final.title')}</h2>
		<p class="final__lead">{$_('final.lead')}</p>
		<a class="cta final__cta" href={$_('contact.calendly')} target="_blank" rel="noopener">
			{$_('final.cta')}
			<span aria-hidden="true">→</span>
		</a>
		<dl class="final__details">
			<div>
				<dt>{$_('final.label_calendly')}</dt>
				<dd>
					<a href={$_('contact.calendly')} target="_blank" rel="noopener">
						{$_('final.calendly_display')}
					</a>
				</dd>
			</div>
			<div>
				<dt>{$_('final.label_linkedin')}</dt>
				<dd>
					<a href={$_('contact.linkedin')} target="_blank" rel="noopener">
						{$_('final.linkedin_display')}
					</a>
				</dd>
			</div>
		</dl>
	</div>
</section>

<style>
	.hero {
		padding-top: clamp(5.5rem, 9vw, 7.5rem);
		padding-bottom: clamp(2.5rem, 5vw, 4rem);
	}

	.hero__inner {
		display: flex;
		flex-direction: column;
		gap: clamp(1.5rem, 3vw, 2.25rem);
	}

	.hero__eyebrow {
		color: var(--color-accent);
		margin: 0;
	}

	.hero__title {
		font-size: clamp(2.2rem, 4.5vw + 0.6rem, 4.4rem);
		font-weight: 500;
		letter-spacing: -0.025em;
		line-height: 1.05;
		margin: 0;
		max-width: 18ch;
	}

	.hero__title::after {
		content: '';
		display: block;
		width: 2.4rem;
		height: 1px;
		background: var(--color-accent);
		margin-top: clamp(1rem, 2vw, 1.5rem);
	}

	.hero__lead {
		font-size: clamp(1.05rem, 0.7vw + 0.9rem, 1.3rem);
		font-weight: 400;
		line-height: 1.5;
		max-width: 42ch;
		color: var(--color-text-soft);
		margin: 0;
	}

	.hero__cta {
		display: flex;
		align-items: center;
		gap: 2rem;
		flex-wrap: wrap;
		margin-top: clamp(0.5rem, 1vw, 1rem);
	}

	.hero__secondary {
		font-size: 0.95rem;
		color: var(--color-text-soft);
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		padding-bottom: 2px;
		border-bottom: 1px solid transparent;
	}

	.hero__secondary:hover {
		color: var(--color-accent);
		border-bottom-color: var(--color-accent);
	}

	.cta span[aria-hidden] {
		transition: transform 0.18s var(--ease-out);
	}
	.cta:hover span[aria-hidden] {
		transform: translateX(3px);
	}

	@media (prefers-reduced-motion: no-preference) {
		.hero__eyebrow,
		.hero__title,
		.hero__lead,
		.hero__cta {
			animation: heroFade 0.7s var(--ease-out) backwards;
		}
		.hero__title {
			animation-delay: 0.08s;
		}
		.hero__lead {
			animation-delay: 0.18s;
		}
		.hero__cta {
			animation-delay: 0.26s;
		}
	}

	@keyframes heroFade {
		from {
			opacity: 0;
			transform: translateY(8px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	/* ── Offers ─────────────────────────────────────── */

	.offers .container {
		display: grid;
		gap: clamp(1.5rem, 3vw, 2.25rem);
	}

	.offers__lead {
		font-size: clamp(1.2rem, 1.2vw + 0.9rem, 1.6rem);
		font-weight: 400;
		line-height: 1.35;
		letter-spacing: -0.01em;
		color: var(--color-text);
		max-width: 30ch;
		margin: 0;
	}

	.offers__grid {
		display: grid;
		grid-template-columns: 1fr;
		border-top: 1px solid var(--color-rule);
	}

	.offers__card {
		display: grid;
		gap: 0.85rem;
		padding: clamp(1.75rem, 3.5vw, 2.75rem) 0;
		border-bottom: 1px solid var(--color-rule);
		align-content: start;
	}

	.offers__index {
		font-size: 0.78rem;
		font-weight: 500;
		letter-spacing: 0.18em;
		color: var(--color-accent);
		font-feature-settings:
			'tnum' 1,
			'lnum' 1;
	}

	.offers__title {
		font-size: clamp(1.5rem, 1.8vw + 0.9rem, 2.2rem);
		font-weight: 500;
		letter-spacing: -0.015em;
		line-height: 1.15;
		margin: 0;
	}

	.offers__card-lead {
		font-size: 1.1rem;
		font-weight: 500;
		color: var(--color-text);
		line-height: 1.4;
		margin: 0;
		max-width: 38ch;
	}

	.offers__description {
		font-size: 1.02rem;
		line-height: 1.6;
		color: var(--color-text-soft);
		margin: 0;
		max-width: 46ch;
	}

	@media (min-width: 820px) {
		.offers__grid {
			grid-template-columns: repeat(2, 1fr);
			column-gap: clamp(2rem, 5vw, 4.5rem);
		}
		.offers__card {
			border-bottom: 0;
		}
	}

	/* ── Approach ───────────────────────────────────── */

	.approach .container {
		display: grid;
		gap: clamp(2rem, 4vw, 3rem);
	}

	.approach__claims {
		list-style: none;
		margin: 0;
		padding: 0;
		counter-reset: claim;
	}

	.approach__claim {
		font-size: clamp(1.4rem, 1.6vw + 0.9rem, 2.05rem);
		font-weight: 400;
		line-height: 1.3;
		letter-spacing: -0.01em;
		color: var(--color-text);
		padding: clamp(1.4rem, 2.6vw, 2rem) 0;
		border-top: 1px solid var(--color-rule);
		position: relative;
		counter-increment: claim;
		display: grid;
		grid-template-columns: auto 1fr;
		gap: clamp(1rem, 2.5vw, 2rem);
		align-items: baseline;
		max-width: 880px;
	}

	.approach__claim:last-child {
		border-bottom: 1px solid var(--color-rule);
	}

	.approach__claim::before {
		content: counter(claim, decimal-leading-zero);
		font-size: 0.78rem;
		font-weight: 500;
		letter-spacing: 0.18em;
		color: var(--color-accent);
		font-feature-settings:
			'tnum' 1,
			'lnum' 1;
		padding-top: 0.5em;
	}

	.approach__method {
		display: grid;
		gap: 1rem;
		max-width: 62ch;
	}

	.approach__lead {
		font-size: 1.1rem;
		color: var(--color-text);
		line-height: 1.6;
		margin: 0;
	}

	.approach__honesty {
		font-size: 1.02rem;
		color: var(--color-text-soft);
		line-height: 1.6;
		margin: 0;
		padding-left: clamp(1rem, 2vw, 1.5rem);
		border-left: 1px solid var(--color-accent);
	}

	/* ── Facts ──────────────────────────────────────── */

	.facts .container {
		display: grid;
		gap: clamp(1.75rem, 3.5vw, 2.75rem);
	}

	.facts__eyebrow {
		margin: 0;
	}

	.facts__grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: clamp(2rem, 4vw, 3rem);
		border-top: 1px solid var(--color-rule);
		padding-top: clamp(1.5rem, 3vw, 2.25rem);
		margin: 0;
	}

	.facts__item {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.facts__value {
		font-size: clamp(2.4rem, 3.4vw + 1rem, 3.8rem);
		font-weight: 500;
		color: var(--color-accent);
		letter-spacing: -0.04em;
		line-height: 0.95;
		font-feature-settings:
			'tnum' 1,
			'lnum' 1;
		display: flex;
		align-items: baseline;
		gap: 0.15em;
	}

	.facts__unit {
		font-size: 0.42em;
		font-weight: 500;
		letter-spacing: 0.02em;
		color: var(--color-accent);
	}

	.facts__label {
		font-size: 0.78rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.18em;
		color: var(--color-text);
		margin-top: 0.4rem;
	}

	.facts__detail {
		font-size: 0.95rem;
		color: var(--color-text-soft);
		max-width: 34ch;
		line-height: 1.5;
	}

	.facts__certifs {
		display: flex;
		gap: 0.5rem 1rem;
		flex-wrap: wrap;
		align-items: baseline;
		font-size: 0.95rem;
		color: var(--color-text-soft);
		margin: 0;
		max-width: none;
		border-top: 1px solid var(--color-rule);
		padding-top: clamp(1.25rem, 2.5vw, 1.75rem);
	}

	.facts__certifs-label {
		font-size: 0.78rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.18em;
		color: var(--color-text-muted);
	}

	@media (min-width: 720px) {
		.facts__grid {
			grid-template-columns: repeat(3, 1fr);
			gap: clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2.5rem);
		}
	}

	/* ── Missions ───────────────────────────────────── */

	.missions .container {
		display: grid;
		gap: clamp(2rem, 4vw, 3rem);
	}

	.missions__list {
		list-style: none;
		margin: 0;
		padding: 0;
		border-top: 1px solid var(--color-rule);
	}

	.missions__item {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: clamp(1rem, 2.5vw, 2.5rem);
		padding: clamp(1.75rem, 3vw, 2.5rem) 0;
		border-bottom: 1px solid var(--color-rule);
		align-items: start;
	}

	.missions__index {
		font-size: 0.78rem;
		font-weight: 500;
		letter-spacing: 0.18em;
		color: var(--color-accent);
		font-feature-settings:
			'tnum' 1,
			'lnum' 1;
		padding-top: 0.55rem;
		min-width: 2ch;
	}

	.missions__body {
		display: grid;
		gap: 0.6rem;
	}

	.missions__head {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: baseline;
		gap: 0.5rem 1.5rem;
	}

	.missions__client {
		font-size: clamp(1.4rem, 1.5vw + 0.9rem, 1.95rem);
		font-weight: 500;
		letter-spacing: -0.015em;
		line-height: 1.2;
		margin: 0;
	}

	.missions__period {
		font-size: 0.85rem;
		font-weight: 500;
		color: var(--color-text-muted);
		font-feature-settings:
			'tnum' 1,
			'lnum' 1;
		white-space: nowrap;
	}

	.missions__meta {
		font-size: 0.85rem;
		color: var(--color-text-muted);
		text-transform: uppercase;
		letter-spacing: 0.12em;
		margin: 0;
	}

	.missions__metric {
		font-size: 1.05rem;
		font-weight: 500;
		color: var(--color-accent);
		margin: 0.4rem 0 0;
		max-width: none;
	}

	.missions__description {
		font-size: 1rem;
		line-height: 1.6;
		color: var(--color-text-soft);
		max-width: 64ch;
		margin: 0;
	}

	.missions__others {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		align-items: baseline;
		font-size: 0.95rem;
		color: var(--color-text-soft);
		margin: 0;
		max-width: none;
	}

	.missions__others-label {
		font-size: 0.78rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.18em;
		color: var(--color-text-muted);
	}

	.missions__others-list {
		font-weight: 400;
	}

	/* ── Labs ───────────────────────────────────────── */

	.labs .container {
		display: grid;
		gap: clamp(1.5rem, 3vw, 2.25rem);
	}

	.labs__lead {
		font-size: 1.1rem;
		color: var(--color-text-soft);
		line-height: 1.6;
		max-width: 64ch;
		margin: 0;
	}

	.labs__grid {
		display: grid;
		grid-template-columns: 1fr;
		border-top: 1px solid var(--color-rule);
	}

	.labs__card {
		display: grid;
		gap: 0.6rem;
		padding: clamp(1.75rem, 3.5vw, 2.75rem) 0;
		border-bottom: 1px solid var(--color-rule);
		align-content: start;
	}

	.labs__name {
		font-size: clamp(1.6rem, 2vw + 1rem, 2.4rem);
		font-weight: 500;
		letter-spacing: -0.025em;
		line-height: 1.05;
		margin: 0;
	}

	.labs__tagline {
		font-size: 0.78rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.18em;
		color: var(--color-accent);
		margin: 0;
		max-width: none;
	}

	.labs__description {
		font-size: 1.02rem;
		line-height: 1.6;
		color: var(--color-text-soft);
		margin: 0;
		max-width: 46ch;
	}

	@media (min-width: 820px) {
		.labs__grid {
			grid-template-columns: repeat(2, 1fr);
			column-gap: clamp(2rem, 5vw, 4.5rem);
		}
		.labs__card {
			border-bottom: 0;
		}
	}

	/* ── Final / Contact ────────────────────────────── */

	.final {
		padding-block: clamp(5rem, 9vw, 8rem);
	}

	.final__eyebrow {
		margin: 0 0 clamp(1.5rem, 3vw, 2.5rem);
	}

	.final__title {
		font-size: clamp(2rem, 4vw + 0.6rem, 3.6rem);
		font-weight: 500;
		letter-spacing: -0.025em;
		line-height: 1.05;
		margin: 0 0 clamp(0.75rem, 2vw, 1.5rem);
		max-width: 18ch;
	}

	.final__lead {
		max-width: 50ch;
		font-size: clamp(1.05rem, 0.6vw + 0.95rem, 1.2rem);
		line-height: 1.55;
		color: var(--color-text-soft);
		margin: 0 0 clamp(2rem, 4vw, 3rem);
	}

	.final__cta {
		margin-bottom: clamp(3rem, 6vw, 5rem);
	}

	.final__details {
		display: grid;
		grid-template-columns: 1fr;
		gap: clamp(1.25rem, 2vw, 1.75rem);
		border-top: 1px solid var(--color-rule);
		padding-top: clamp(2rem, 4vw, 3rem);
		margin: 0;
	}

	.final__details > div {
		display: grid;
		grid-template-columns: 110px 1fr;
		align-items: baseline;
		gap: 1rem;
	}

	.final__details dt {
		font-size: 0.78rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.18em;
		color: var(--color-text-muted);
		margin: 0;
	}

	.final__details dd {
		font-size: 1.05rem;
		font-weight: 400;
		margin: 0;
	}

	.final__details a {
		color: var(--color-text);
		border-bottom: 1px solid var(--color-rule);
		padding-bottom: 1px;
	}

	.final__details a:hover {
		color: var(--color-accent);
		border-bottom-color: var(--color-accent);
	}
</style>

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
			description: $_('offers.o1_description'),
			extra: $_('offers.o1_workshops')
		},
		{
			index: $_('offers.o2_index'),
			title: $_('offers.o2_title'),
			lead: $_('offers.o2_lead'),
			description: $_('offers.o2_description'),
			conviction: $_('offers.o2_conviction')
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
			unit: '',
			label: $_('facts.b_label'),
			detail: $_('facts.b_detail')
		},
		{
			value: $_('facts.c_value'),
			unit: $_('facts.c_unit'),
			label: $_('facts.c_label'),
			detail: $_('facts.c_detail')
		},
		{
			value: $_('facts.d_value'),
			unit: $_('facts.d_unit'),
			label: $_('facts.d_label'),
			detail: $_('facts.d_detail')
		}
	];

	$: labs = [
		{
			name: $_('labs.l1_name'),
			tagline: $_('labs.l1_tagline'),
			description: $_('labs.l1_description'),
			build: $_('labs.l1_build'),
			linkLabel: $_('labs.l1_link_label'),
			linkUrl: $_('labs.l1_link_url')
		},
		{
			name: $_('labs.l2_name'),
			tagline: $_('labs.l2_tagline'),
			description: $_('labs.l2_description'),
			build: $_('labs.l2_build'),
			linkLabel: $_('labs.l2_link_label'),
			linkUrl: $_('labs.l2_link_url')
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
		<div class="hero__text">
			<p class="eyebrow hero__eyebrow">{$_('hero.eyebrow')}</p>
			<h1 class="hero__title">
				{$_('hero.title')} <em>{$_('hero.title_accent')}</em>
			</h1>
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
		<figure class="hero__media">
			<img
				src="/photo-thibaut_valez.webp"
				alt={$_('hero.photo_caption')}
				width="648"
				height="620"
				fetchpriority="high"
			/>
			<figcaption class="hero__caption">{$_('hero.photo_caption')}</figcaption>
		</figure>
	</div>
</section>

<section id="offres" class="section offers">
	<div class="container">
		<p class="eyebrow">{$_('offers.eyebrow')}</p>
		<div class="offers__grid">
			{#each offers as offer}
				<article class="offers__card">
					<span class="offers__index">{offer.index}</span>
					<h2 class="offers__title">{offer.title}</h2>
					<p class="offers__card-lead">{offer.lead}</p>
					<p class="offers__description">{offer.description}</p>
					{#if offer.extra}
						<p class="offers__description">{offer.extra}</p>
					{/if}
					{#if offer.conviction}
						<p class="offers__conviction">{offer.conviction}</p>
					{/if}
				</article>
			{/each}
		</div>
	</div>
</section>

<section id="approche" class="section section--cream approach">
	<div class="container">
		<p class="eyebrow">{$_('approach.eyebrow')}</p>
		<div class="approach__grid">
			<ol class="approach__claims">
				<li class="approach__claim">{$_('approach.claim_a')}</li>
				<li class="approach__claim">{$_('approach.claim_b')}</li>
				<li class="approach__claim">{$_('approach.claim_c')}</li>
			</ol>
			<div class="approach__method">
				<p class="approach__lead">{$_('approach.lead')}</p>
			</div>
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
		<header class="missions__header">
			<h2 class="missions__title">
				{$_('missions.title')} <em>{$_('missions.title_accent')}</em>
			</h2>
			<p class="missions__selection">
				<span>{$_('missions.selection_label')}</span>
				<span>{$_('missions.selection_period')}</span>
			</p>
		</header>
		<ol class="missions__list">
			{#each missions as mission, i}
				<li class="missions__item">
					<span class="missions__index">{String(i + 1).padStart(2, '0')}</span>
					<div class="missions__id">
						<header class="missions__head">
							<h3 class="missions__client">{mission.client}</h3>
							{#if mission.period}
								<span class="missions__period">{mission.period}</span>
							{/if}
						</header>
						<p class="missions__meta">{mission.meta}</p>
					</div>
					<div class="missions__detail">
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
		<div class="labs__intro">
			<p class="eyebrow">{$_('labs.eyebrow')}</p>
			<p class="labs__lead">{$_('labs.lead')}</p>
		</div>
		<div class="labs__grid">
			{#each labs as lab}
				<article class="labs__card">
					<h2 class="labs__name">{lab.name}</h2>
					<p class="labs__tagline">{lab.tagline}</p>
					<p class="labs__description">{lab.description}</p>
					<p class="labs__build">{lab.build}</p>
					<a class="labs__link" href={lab.linkUrl} target="_blank" rel="noopener">
						{lab.linkLabel}
						<span aria-hidden="true">↗</span>
					</a>
				</article>
			{/each}
		</div>
	</div>
</section>

<section id="contact" class="section final">
	<div class="container final__grid">
		<div class="final__intro">
			<p class="eyebrow final__eyebrow">{$_('final.eyebrow')}</p>
			<h2 class="final__title">
				{$_('final.title')} <em>{$_('final.title_accent')}</em>
			</h2>
			<p class="final__lead">{$_('final.lead')}</p>
			<a class="cta final__cta" href={$_('contact.calendly')} target="_blank" rel="noopener">
				{$_('final.cta')}
				<span aria-hidden="true">→</span>
			</a>
		</div>
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
			<div>
				<dt>{$_('final.base_label')}</dt>
				<dd>{$_('final.base_value')}</dd>
			</div>
		</dl>
	</div>
</section>

<style>
	.hero {
		border-bottom: 1px solid var(--color-rule);
		padding: 0;
	}

	.hero__inner {
		display: grid;
		grid-template-columns: 1fr;
		gap: clamp(2.5rem, 5vw, 4rem);
		align-items: center;
		padding-top: clamp(7rem, 11vw, 9.5rem);
		padding-bottom: clamp(3.5rem, 7vw, 6rem);
	}

	.hero__text {
		display: flex;
		flex-direction: column;
		gap: clamp(1.25rem, 2.5vw, 1.75rem);
	}

	.hero__eyebrow {
		color: var(--color-text-muted);
		margin: 0;
	}

	.hero__title {
		font-size: clamp(2.2rem, 4.5vw + 0.6rem, 3.6rem);
		font-weight: 300;
		letter-spacing: -0.02em;
		line-height: 1.05;
		margin: 0;
		max-width: 16ch;
		text-wrap: balance;
	}

	.hero__title::after {
		content: '';
		display: block;
		width: 3rem;
		height: 1px;
		background: var(--color-text);
		margin-top: clamp(1.25rem, 2.5vw, 2rem);
	}

	.hero__lead {
		font-style: italic;
		font-size: clamp(1.05rem, 0.7vw + 0.9rem, 1.25rem);
		font-weight: 300;
		line-height: 1.55;
		max-width: 42ch;
		color: var(--color-text-soft);
		margin: 0;
	}

	.hero__cta {
		display: flex;
		align-items: center;
		gap: 1.25rem 2rem;
		flex-wrap: wrap;
		margin-top: clamp(0.75rem, 1.5vw, 1.25rem);
	}

	.hero__secondary {
		font-size: 0.72rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.22em;
		color: var(--color-text);
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding-bottom: 5px;
		border-bottom: 1px solid var(--color-text);
	}

	.hero__secondary:hover {
		color: var(--color-accent);
		border-bottom-color: var(--color-accent);
	}

	.hero__media {
		position: relative;
		margin: 0;
		background: #ede8de;
		aspect-ratio: 1 / 1;
		overflow: hidden;
	}

	.hero__media img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 54% 46%;
		filter: grayscale(1);
	}

	.hero__caption {
		position: absolute;
		left: 1.5rem;
		bottom: 1.25rem;
		font-size: 0.62rem;
		font-weight: 500;
		letter-spacing: 0.28em;
		text-transform: uppercase;
		color: #fff;
		text-shadow: 0 1px 6px rgba(0, 0, 0, 0.4);
		pointer-events: none;
	}

	@media (min-width: 900px) {
		.hero__inner {
			grid-template-columns: 1.02fr 0.98fr;
			min-height: 620px;
			gap: clamp(3rem, 6vw, 5rem);
		}
		.hero__media {
			align-self: stretch;
			aspect-ratio: auto;
		}
	}

	@media (max-width: 600px) {
		.hero__text {
			align-items: center;
			text-align: center;
		}
		.hero__title {
			max-width: none;
		}
		.hero__title::after {
			margin-inline: auto;
		}
		.hero__lead {
			max-width: none;
		}
		.hero__cta {
			justify-content: center;
		}
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
		gap: clamp(2.5rem, 5vw, 4.5rem);
	}

	.offers__grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: clamp(1.25rem, 2.5vw, 2rem);
	}

	.offers__card {
		display: grid;
		gap: 1.25rem;
		padding: clamp(1.85rem, 3.5vw, 3rem);
		background: var(--color-surface);
		border: 1px solid var(--color-rule);
		border-radius: var(--radius-md);
		align-content: start;
		transition:
			border-color 0.2s var(--ease-out),
			box-shadow 0.2s var(--ease-out);
	}

	.offers__card:hover {
		border-color: var(--color-accent);
		box-shadow: 0 4px 14px rgba(20, 18, 14, 0.06);
	}

	.offers__index {
		font-style: italic;
		font-weight: 300;
		font-size: 1.15rem;
		color: var(--color-accent);
		font-feature-settings:
			'tnum' 1,
			'lnum' 1;
	}

	.offers__title {
		font-size: clamp(1.45rem, 1.6vw + 0.9rem, 1.85rem);
		font-weight: 400;
		letter-spacing: -0.01em;
		line-height: 1.15;
		margin: 0;
	}

	.offers__card-lead {
		font-size: 1.1rem;
		font-weight: 500;
		color: var(--color-text);
		line-height: 1.45;
		margin: 0;
		max-width: 38ch;
	}

	.offers__description {
		font-size: 1rem;
		font-weight: 300;
		line-height: 1.6;
		color: var(--color-text-soft);
		margin: 0;
		max-width: 46ch;
	}

	.offers__conviction {
		font-style: italic;
		font-size: 1rem;
		font-weight: 300;
		line-height: 1.6;
		color: var(--color-text);
		margin: 0.5rem 0 0;
		padding-top: 1.5rem;
		border-top: 1px solid var(--color-rule);
		max-width: 46ch;
	}

	@media (min-width: 820px) {
		.offers__grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	/* ── Approach ───────────────────────────────────── */

	.approach .container {
		display: grid;
		gap: clamp(2.5rem, 4vw, 3.5rem);
	}

	.approach__grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: clamp(2.5rem, 6vw, 6rem);
		align-items: start;
	}

	.approach__claims {
		list-style: none;
		margin: 0;
		padding: 0;
		counter-reset: claim;
	}

	.approach__claim {
		font-size: clamp(1.35rem, 1.4vw + 0.9rem, 1.85rem);
		font-weight: 300;
		line-height: 1.25;
		letter-spacing: -0.01em;
		color: var(--color-text);
		padding: clamp(1.4rem, 2.6vw, 1.75rem) 0;
		border-bottom: 1px solid var(--color-rule-soft);
		position: relative;
		counter-increment: claim;
		display: grid;
		grid-template-columns: auto 1fr;
		gap: clamp(1rem, 2.5vw, 1.75rem);
		align-items: baseline;
	}

	.approach__claim:first-child {
		padding-top: 0;
	}

	.approach__claim::before {
		content: counter(claim, lower-roman) '.';
		font-style: italic;
		font-weight: 300;
		font-size: 1.4rem;
		letter-spacing: 0;
		color: var(--color-accent);
		line-height: 1;
	}

	.approach__method {
		display: grid;
		gap: 1.4rem;
		max-width: 52ch;
		padding-top: 0.25rem;
	}

	.approach__lead {
		font-size: 1.05rem;
		font-weight: 300;
		color: var(--color-text-soft);
		line-height: 1.6;
		margin: 0;
	}

	.approach__honesty {
		font-size: 1.05rem;
		font-weight: 300;
		color: var(--color-text-soft);
		line-height: 1.6;
		margin: 0;
	}

	@media (min-width: 880px) {
		.approach__grid {
			grid-template-columns: 1.25fr 1fr;
		}
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
		font-size: clamp(2.6rem, 3.4vw + 1rem, 3.6rem);
		font-weight: 300;
		color: var(--color-text);
		letter-spacing: -0.03em;
		line-height: 0.9;
		font-feature-settings:
			'tnum' 1,
			'lnum' 1;
		display: flex;
		align-items: baseline;
		gap: 0.25em;
	}

	.facts__unit {
		font-size: 0.26em;
		font-weight: 500;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--color-accent);
	}

	.facts__label {
		font-size: 0.78rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.16em;
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

	@media (min-width: 560px) {
		.facts__grid {
			grid-template-columns: repeat(2, 1fr);
			gap: clamp(2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2.5rem);
		}
	}

	@media (min-width: 900px) {
		.facts__grid {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	@media (max-width: 559.98px) {
		.facts__item {
			align-items: center;
			text-align: center;
		}
		.facts__value {
			justify-content: center;
		}
		.facts__detail {
			max-width: none;
		}
	}

	/* ── Missions ───────────────────────────────────── */

	.missions .container {
		display: grid;
		gap: clamp(2.5rem, 4vw, 3.5rem);
	}

	.missions__header {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: flex-end;
		gap: 1.5rem 3rem;
	}

	.missions__title {
		font-size: clamp(2rem, 3vw + 1rem, 3rem);
		font-weight: 300;
		letter-spacing: -0.015em;
		line-height: 0.98;
		margin: 0;
	}

	.missions__selection {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		text-align: right;
		font-size: 0.66rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.24em;
		color: var(--color-text-muted);
		margin: 0;
	}

	.missions__list {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.missions__item {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 0.75rem clamp(1rem, 2.5vw, 2.5rem);
		padding: clamp(1.75rem, 3vw, 2.75rem) 0;
		border-top: 1px solid var(--color-rule);
		align-items: start;
	}

	.missions__index {
		font-style: italic;
		font-weight: 300;
		font-size: 1.3rem;
		color: var(--color-accent);
		font-feature-settings:
			'tnum' 1,
			'lnum' 1;
		line-height: 1;
		padding-top: 0.35rem;
	}

	.missions__id {
		display: grid;
		gap: 0.75rem;
		align-content: start;
	}

	.missions__head {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 0.4rem 1rem;
	}

	.missions__client {
		font-size: clamp(1.4rem, 1.5vw + 0.9rem, 1.75rem);
		font-weight: 400;
		letter-spacing: -0.01em;
		line-height: 1.05;
		margin: 0;
	}

	.missions__period {
		font-size: 0.78rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		color: var(--color-text-muted);
		font-feature-settings:
			'tnum' 1,
			'lnum' 1;
		white-space: nowrap;
	}

	.missions__meta {
		font-size: 0.78rem;
		color: var(--color-text-soft);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-weight: 500;
		margin: 0;
	}

	.missions__detail {
		display: grid;
		gap: 0.75rem;
		align-content: start;
		grid-column: 1 / -1;
	}

	.missions__metric {
		font-size: 1.1rem;
		font-weight: 500;
		color: var(--color-text);
		line-height: 1.4;
		margin: 0;
		max-width: none;
	}

	.missions__description {
		font-size: 1rem;
		font-weight: 300;
		line-height: 1.6;
		color: var(--color-text-soft);
		max-width: 56ch;
		margin: 0;
	}

	.missions__others {
		display: flex;
		gap: 0.5rem 1rem;
		flex-wrap: wrap;
		align-items: baseline;
		font-size: 1rem;
		color: var(--color-text);
		margin: 0;
		max-width: none;
		padding-top: clamp(1.5rem, 3vw, 2rem);
		border-top: 1px solid var(--color-rule);
	}

	.missions__others-label {
		font-size: 0.7rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.24em;
		color: var(--color-text-muted);
	}

	.missions__others-list {
		font-weight: 400;
	}

	@media (min-width: 880px) {
		.missions__item {
			grid-template-columns: auto 1fr 1.2fr;
			gap: clamp(2rem, 4vw, 3rem);
		}
		.missions__detail {
			grid-column: auto;
		}
	}

	/* ── Labs ───────────────────────────────────────── */

	.labs .container {
		display: grid;
		gap: clamp(2.5rem, 5vw, 4rem);
	}

	.labs__intro {
		display: grid;
		grid-template-columns: 1fr;
		gap: clamp(1rem, 2vw, 1.5rem);
		align-items: baseline;
	}

	.labs__lead {
		font-size: clamp(1.15rem, 1vw + 0.9rem, 1.4rem);
		font-weight: 300;
		color: var(--color-text);
		line-height: 1.45;
		max-width: 56ch;
		margin: 0;
	}

	.labs__grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: clamp(1.25rem, 2.5vw, 2rem);
	}

	.labs__card {
		display: grid;
		gap: 1.1rem;
		padding: clamp(1.85rem, 3.5vw, 3rem);
		background: var(--color-surface);
		border: 1px solid var(--color-rule);
		border-radius: var(--radius-md);
		align-content: start;
	}

	.labs__name {
		font-size: clamp(1.45rem, 1.6vw + 0.9rem, 1.85rem);
		font-weight: 400;
		letter-spacing: -0.01em;
		line-height: 1.05;
		margin: 0;
	}

	.labs__tagline {
		font-size: 0.78rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--color-accent);
		margin: 0;
		max-width: none;
	}

	.labs__description {
		font-size: 1rem;
		font-weight: 300;
		line-height: 1.6;
		color: var(--color-text-soft);
		margin: 0;
		max-width: 46ch;
	}

	.labs__build {
		font-size: 0.95rem;
		font-weight: 400;
		line-height: 1.55;
		color: var(--color-text);
		margin: 0;
		padding-top: 1.25rem;
		border-top: 1px solid var(--color-rule);
		max-width: 46ch;
	}

	.labs__link {
		justify-self: start;
		font-size: 0.72rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.18em;
		color: var(--color-text);
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		padding-bottom: 4px;
		border-bottom: 1px solid var(--color-text);
		transition:
			color 0.16s var(--ease-out),
			border-color 0.16s var(--ease-out);
	}

	.labs__link:hover {
		color: var(--color-accent);
		border-bottom-color: var(--color-accent);
	}

	@media (min-width: 820px) {
		.labs__intro {
			grid-template-columns: 1fr 1.4fr;
			gap: clamp(2rem, 5vw, 4rem);
		}
		.labs__grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	/* ── Final / Contact ────────────────────────────── */

	.final {
		border-bottom: 0;
		padding-block: clamp(5.5rem, 10vw, 8.5rem);
	}

	.final__grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: clamp(2.5rem, 6vw, 6rem);
		align-items: start;
	}

	.final__eyebrow {
		margin: 0 0 clamp(1.5rem, 3vw, 2.25rem);
	}

	.final__title {
		font-size: clamp(2rem, 4vw + 0.6rem, 3.2rem);
		font-weight: 300;
		letter-spacing: -0.02em;
		line-height: 1.05;
		margin: 0 0 clamp(1rem, 2vw, 1.75rem);
		max-width: 14ch;
		text-wrap: balance;
	}

	.final__lead {
		max-width: 42ch;
		font-size: clamp(1.05rem, 0.6vw + 0.95rem, 1.15rem);
		font-weight: 300;
		line-height: 1.6;
		color: var(--color-text-soft);
		margin: 0 0 clamp(2rem, 4vw, 2.75rem);
	}

	.final__cta {
		margin: 0;
	}

	.final__details {
		display: grid;
		grid-template-columns: 1fr;
		gap: 0;
		margin: 0;
	}

	.final__details > div {
		padding: 1.5rem 0;
		border-top: 1px solid var(--color-rule);
	}

	.final__details dt {
		font-size: 0.7rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.26em;
		color: var(--color-text-muted);
		margin: 0 0 0.65rem;
	}

	.final__details dd {
		font-size: 1.1rem;
		font-weight: 400;
		margin: 0;
	}

	.final__details a {
		color: var(--color-text);
		border-bottom: 1px solid var(--color-rule);
		padding-bottom: 3px;
	}

	.final__details a:hover {
		color: var(--color-accent);
		border-bottom-color: var(--color-accent);
	}

	@media (min-width: 880px) {
		.final__grid {
			grid-template-columns: 1.2fr 1fr;
		}
	}
</style>

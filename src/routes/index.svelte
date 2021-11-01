<script>
    import Overview from "$lib/Overview.svelte";
    import { t, locale } from "../lib/i18n/i18n";
</script>

<svelte:head>
    <title>Thibaut VALEZ | {$t("page.index")}</title>
    <meta name="description" content="{$t("page.index-description")}" />
    <meta
            name="robots"
            content="index, follow, max-snippet:-1,"
    />
    <html lang={$locale} />
</svelte:head>

<Overview/>
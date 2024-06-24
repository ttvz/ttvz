<script>
    import Skills from "$lib/Skills.svelte";
    import { t, locale } from "../../lib/i18n/i18n";
</script>

<svelte:head>
    <title>Thibaut VALEZ | {$t("page.about")}</title>
    <meta name="description" content="{$t("page.about-description")}" />
    <meta
        name="robots"
        content="index, follow, max-snippet:-1,"
/>
</svelte:head>

<div>
    <Skills/>
</div>

<style lang="scss">
    div{
      width: 90vw;
      margin: 0 auto;
    }
</style>
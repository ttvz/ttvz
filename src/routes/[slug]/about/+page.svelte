<script>
    import Skills from "$lib/Skills.svelte";

    import { _ } from "svelte-i18n";
</script>

<svelte:head>
    <title>{$_("page.about.title")}</title>
    <meta name="description" content="{$_('page.about.description')}" />
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
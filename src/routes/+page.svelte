<script>
    import Overview from "$lib/Overview.svelte";
    import { _ } from "svelte-i18n";
</script>

<svelte:head>
    <title>{$_("page.home.title")}</title>
    <meta name="description" content="{$_('page.home.description')}" />
    <meta
            name="robots"
            content="index, follow, max-snippet:-1,"
    />
</svelte:head>

<Overview/>
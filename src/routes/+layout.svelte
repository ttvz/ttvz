<script>
    import "@fontsource/jost";
    import "@fontsource/prompt";

    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';
    import { addMessages, init, getLocaleFromNavigator } from "svelte-i18n";

    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
    import MobileMenu from "$lib/elements/MobileMenu.svelte";

    import en from "../lang/en.json";
    import fr from "../lang/fr.json";

    const mobile_menu = writable();
    $: mobile_menu.set(false);

    setContext('mobile_menu', mobile_menu);

    addMessages("en", en);
    addMessages("fr", fr);
    init({
        fallbackLocale: 'fr',
        initialLocale: getLocaleFromNavigator(),
    });
</script>

<Header/>
{#if $mobile_menu}
    <MobileMenu/>
{/if}
<main>
    <slot></slot>
</main>

<Footer/>

<style lang="scss" global>
  :global(body) {
    margin: 0;
    overflow-x: hidden;
  }
  :global(#svelte){
    display:flex;
    flex-direction:column;
    height: 100vh;
  }
  :global(a) {
    text-decoration: none;
    color: #000;
  }
  :global(li) {
    list-style: none;
  }
  :global(h1,h2,h3,h4,h5,h6) {
    font-family: 'Jost', sans-serif;
    font-weight:500;
    margin: 0;
    padding: 0;
  }
  :global(p,li, a, b, button) {
    font-family: 'Jost', sans-serif;
    font-weight:300;
    margin: 0;
    padding: 0;
  }
  main{
    flex: 1;
    padding-top: 80px;
  }
</style>
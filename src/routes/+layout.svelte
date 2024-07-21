<script>
    import "@fontsource/jost";
    import "@fontsource/prompt";

    import { setContext } from 'svelte';
    import { writable, get } from 'svelte/store';
    import { addMessages, init, getLocaleFromNavigator } from "svelte-i18n";
    import { persisted } from 'svelte-persisted-store'

    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
    import MobileMenu from "$lib/MobileMenu.svelte";

    import en from "../lang/en.json";
    import fr from "../lang/fr.json";

    const defaultLocale = getLocaleFromNavigator();

    const mobile_menu = writable();
    $: mobile_menu.set(false);
    const locale =  writable();
    const preferences = persisted('preferences', {
        locale: 'fr-FR'
    });
    if (get(preferences).locale){
        $: locale.set(get(preferences).locale);
    } else {
        preferences.set({
            locale: defaultLocale
        })
        $: locale.set(defaultLocale);
    }
    setContext('localeContext', locale);

    setContext('mobile_menu', mobile_menu);
    addMessages("en", en);
    addMessages("fr", fr);
    init({
        fallbackLocale: 'fr',
        initialLocale: $locale,
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
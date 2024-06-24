<style lang="scss" global>
  @import url('https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,300;0,500;0,700;1,100;1,300;1,500;1,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,300;0,500;0,700;1,100;1,300;1,500;1,700&display=swap');

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

<script>
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
    import Analytics from "$lib/Analytics.svelte";
    //import { mobile_menu } from '../stores.js';
    import MobileMenu from "$lib/elements/MobileMenu.svelte";
</script>

<Header/>
<!--
{#if $mobile_menu}
    <MobileMenu/>
{/if}
-->
<Analytics />
<main>
    <slot></slot>
</main>

<Footer/>
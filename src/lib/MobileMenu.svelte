<script>
    import { page } from '$app/stores';
    import { getContext } from 'svelte';
    import Header from "$lib/Header.svelte";
    import PaperPlane from "$lib/PaperPlane.svelte";
    import { _ } from "svelte-i18n";

    const mobile_menu = getContext('mobile_menu');
    console.log(mobile_menu)
    const locale = getContext('locale');
    function closeMobileMenu() {
        mobile_menu.update(() => false);
    }
</script>

<div>
    <Header/>

    <ul>
        <li class="link" class:active={$page.path === '/'}><a href="/{locale}" on:click={() => closeMobileMenu()}>{$_("layout.header.nav.home")}</a></li>
        <li class="link" class:active={$page.path === '/about'}><a href="/{locale}/about" on:click={() => closeMobileMenu()}>{$_("layout.header.nav.about")}</a></li>
        <li class="link" class:active={$page.path === '/contact'}><a href="/{locale}/contact" on:click={() => closeMobileMenu()}>{$_("layout.header.nav.contact")}</a></li>
    </ul>
    <PaperPlane/>
    <footer>
        <a href="mailto:{$_('page.contact.email')}">{$_("page.contact.email")}</a>
    </footer>
</div>

<style lang="scss">
  @keyframes slide {
    100% { top: 0; }
  }

    div {
      position: fixed;
      z-index: 10;
      width: 100vw;
      height: 100vh;
      background-color: #FFF200;
      margin: 0;
      top: -100vh;
      animation: slide 0.5s forwards;
    }
    ul{
      margin-top: 20vh;
      padding: 0;
      li{
        text-align: center;
        line-height: 100px;
        font-size: 38px;
      }
    }
    footer{
      position: absolute;
      width:100vw;
      bottom: 90px;
      margin: 0 auto;
      a{
        display: block;
        text-align: center;
      }
    }

</style>
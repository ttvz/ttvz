<script>
    import { t } from "../i18n/i18n";
    import { page } from '$app/stores';
    import { mobile_menu } from '../../stores.js';
    import Header from "$lib/Header.svelte";
    import PaperPlane from "$lib/elements/PaperPlane.svelte";

    function closeMobileMenu() {
        mobile_menu.update(n => false);
    }
</script>

<div>
    <Header/>
    <ul>
        <li class="link" class:active={$page.path === '/'}><a href="/" on:click={() => closeMobileMenu()}>{$t("header_nav.home")}</a></li>
        <li class="link" class:active={$page.path === '/about'}><a href="/about" on:click={() => closeMobileMenu()}>{$t("header_nav.about")}</a></li>
        <li class="link" class:active={$page.path === '/contact'}><a href="/contact" on:click={() => closeMobileMenu()}>{$t("header_nav.contact")}</a></li>
    </ul>
    <PaperPlane/>
    <footer>
        <a href="mailto:thibaut.valez@gmail.com">thibaut.valez@gmail.com</a>
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
      margin-top: 22vh;
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
      bottom: 40px;
      margin: 0 auto;
      .material-icons{
        font-size: 15px;
      }
      a{
        display: block;
        text-align: center;
      }
    }

</style>
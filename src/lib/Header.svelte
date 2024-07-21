<script>
    import { _ } from "svelte-i18n";
    import { page } from '$app/stores';
    import BurgerButton from "$lib/BurgerButton.svelte";
    import {getContext} from "svelte";
    let y;
    let width;

    const localeContext = getContext('localeContext');
</script>

<svelte:window bind:scrollY={y} bind:innerWidth={width}/>

<header class:scrolled={y > 79}>
    <nav>
        <h1 class="logo"><a href="/{$localeContext}">ttvz</a></h1>
        <ul class="links-wrapper">
            {#if width > 1250}
                <li class="link" class:active={$page.path === 'about'}><a href="/{$localeContext}/about">{$_("layout.header.nav.about")}</a></li>
                <li class="link" class:active={$page.path === 'contact'}><a href="/{$localeContext}/contact">{$_("layout.header.nav.contact")}</a></li>
            {:else}
                <li><BurgerButton scrolled={y > 79}/></li>
            {/if}
        </ul>
    </nav>
</header>

<style lang="scss">
  @keyframes scrollMenuAnimation {
    from {background-color: #FFF;}
  }
    header{
      position: fixed;
      width:100%;
      border-bottom: 1px solid #CCC;
      height:79px;
      background-color:#FFF;

      &.scrolled{
        background-color:#000;
        border-bottom: 1px solid #000;
        animation-name: scrollMenuAnimation;
        animation-duration: 1s;
        a{
          color:#FFF;
        }
        .logo a{
          color:#FCF351;
        }
        ul.links-wrapper{
          li.link {
            &::before {
              color: #000;
            }
            &.active {
              &::before {
                color:#FFF;
              }
            }
          }
        }
      }
      nav{
        display: flex;
        width: 75vw;
        margin: 0 auto;
        justify-content: space-between;
        @media (max-width: 1250px) {
          width: 90vw;
        }
      }
    }

    .logo{
        font-size: 40px;
        line-height: 70px;
    }

    ul.links-wrapper {
        display:flex;
        margin: 0;
      li.link{
        list-style: none;
        margin-right: 5vw;
        font-size: 22px;
        line-height: 70px;
        &::before {
            content: ' \25CF';
            font-size: 10px;
            margin-right: 5px;
            color:#FFF;
        }
        &.active {
            &::before {
              color:#000;
            }
        }
      }
    }
</style>
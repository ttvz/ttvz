<script>
    import { t } from "./i18n/i18n";
    import { page } from '$app/stores';
    let y;
</script>

<svelte:window bind:scrollY={y}/>

<header class:scrolled={y > 79}>
    <nav>
        <h1 class="logo"><a href="/">ttvz</a></h1>
        <ul class="links-wrapper">
            <li class="link" class:active={$page.path === '/about'}><a href="/about">{$t("header_nav.about")}</a></li>
            <li class="link" class:active={$page.path === '/contact'}><a href="/contact">{$t("header_nav.contact")}</a></li>
        </ul>
    </nav>
</header>

<style lang="scss">
  @keyframes example {
    from {background-color: #FFF;}
    to {background-color: #OOO;}
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
        animation-name: example;
        animation-duration: 1s;
        a{
          color:#FFF;
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
          width: 95vw;
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
<script>
    import { t, locale, locales } from "./i18n/i18n";
    import Icon from 'svelte-fa'
    import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

    function updateLocale(l) {
        locale.update(n => l);
    }
</script>
<footer>
    <a href="/profil-thibaut_valez.pdf" download><span class="material-icons"><Icon icon={faArrowRight}></Icon></span> {$t("footer.download")}</a>

    <div>
        <button class:active={$locale === 'en'} on:click={() => updateLocale('en')}>en</button> |
        <button class:active={$locale === 'fr'} on:click={() => updateLocale('fr')}>fr</button>
    </div>
</footer>

<style lang="scss">
    footer {
      flex:0;
      width:75vw;
      margin: auto;
      border-top: 1px solid #CCC;
      padding:40px 0 10px;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
    }
    a {
        //@include underline-effect;
      text-transform: uppercase;
    }
    button{
      text-transform: uppercase;
      border: none;
      background: none;
      cursor: pointer;
      font-size: 16px;
      &.active{
        font-weight: 800;
      }
    }
    .material-icons{
      font-size: 14px;
    }
</style>
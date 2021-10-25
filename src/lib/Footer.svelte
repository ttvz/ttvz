<script>
    import { t, locale, locales } from "./i18n/i18n";

    function updateLocale(l) {
        locale.update(n => l);
    }
</script>
<footer>
    <a href="/profil-thibaut_valez.pdf" download><span class="material-icons">call_made</span> {$t("footer.download")}</a>

    <div>
        <a class:active={$locale === 'en'} on:click={() => updateLocale('en')}>en</a> |
        <a class:active={$locale === 'fr'} on:click={() => updateLocale('fr')}>fr</a>
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
    .lang-selector{
    }
    a {
        @include underline-effect;
      text-transform: uppercase;
      &.active{
        font-weight: 800;
      }
    }
    .material-icons{
      font-size: 14px;
    }
</style>
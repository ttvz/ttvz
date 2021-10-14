<script>
    import { t, locale, locales } from "./i18n/i18n";
</script>
<footer>
    <a href="/profil-thibaut_valez.pdf" download>&#8599; {$t("footer.download")}</a>

    <select class="lang-selector" bind:value={$locale}>
        {#each locales as l}
            <option value={l}>{l}</option>
        {/each}
    </select>
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
    }
</style>
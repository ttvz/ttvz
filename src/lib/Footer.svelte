<script>
    import { locale, _ } from "svelte-i18n"
    import Icon from 'svelte-fa'
    import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
    import { goto } from '$app/navigation';
    import {getContext} from "svelte";
    import { persisted } from 'svelte-persisted-store'

    let localeContext = getContext('localeContext');
    const preferences = persisted('preferences', null)

    function updateLocale(l) {
        localeContext.set(l)
        locale.set(l);
        goto('/' + l);

        preferences.set({
            locale: l
        })
    }

</script>
<footer>
    <a href="/{$_('layout.footer.pdf-link')}" download><span class="material-icons"><Icon icon={faArrowRight}/></span> {$_("layout.footer.download")}</a>
    <div>
        <button class:active={$locale === 'en-EN'} on:click={() => updateLocale('en-EN')}>en</button> |
        <button class:active={$locale === 'fr-FR'} on:click={() => updateLocale('fr-FR')}>fr</button>
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
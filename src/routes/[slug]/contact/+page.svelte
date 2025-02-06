<script>
    import Icon from 'svelte-fa'
    import { faLocationDot, faEnvelope, faPhone, faBullseye } from '@fortawesome/free-solid-svg-icons'

    import { _ } from "svelte-i18n";
</script>

<svelte:head>
    <title>{$_("page.contact.title")}</title>
    <meta name="description" content="{$_('page.contact.description')}" />
    <meta
        name="robots"
        content="index, follow, max-snippet:-1,"
    />
</svelte:head>

<section>
    <p><span class="material-icons"><Icon icon={faLocationDot}/></span> {$_("page.contact.localization")}</p>
    <a href="mailto:thibaut.valez@gmail.com"><span class="material-icons"><Icon icon={faEnvelope}/></span> {$_("page.contact.email")}</a>
    <a href="https://www.linkedin.com/in/thibaut-valez-a9014119/" target="_blank"><span class="material-icons"><Icon icon={faBullseye}/></span>{$_("page.contact.social-media")}</a>
</section>

<style lang="scss">
    section{
        margin-top: 100px;
        a, p {
            display: block;
            font-size: 30px;
            font-weight: 300;
            text-align: center;

              @media (max-width: 1250px) {
                margin: 0 20px;
                font-size: 20px;
              }

        }
    }
    .material-icons{
      font-size: 20px;
      margin-right: 5px;
      @media (max-width: 1250px) {
        font-size: 15px;
      }
    }
</style>
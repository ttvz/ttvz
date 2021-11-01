<script>
    import { t, locale } from "../lib/i18n/i18n";
</script>

<svelte:head>
    <title>Thibaut VALEZ | {$t("page.contact")}</title>
    <meta name="description" content="{$t("page.contact-description")}" />
    <meta
        name="robots"
        content="index, follow, max-snippet:-1,"
    />
    <html lang={$locale} />
</svelte:head>

<section>
    <p><span class="material-icons">place</span> Paris | Lyon | France | Europe</p>
    <a href="mailto:thibaut.valez@gmail.com"><span class="material-icons">email</span> thibaut.valez@gmail.com</a>
    <a href="tel:+33685557542"><span class="material-icons">phone_iphone</span> +33 (0)6 85 55 75 42</a>
    <a href="https://www.linkedin.com/in/thibaut-valez-a9014119/" target="_blank"><span class="material-icons">call_made</span>Linkedin</a>
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
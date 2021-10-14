<script>
    import { t, locale } from "../lib/i18n/i18n";
</script>

<svelte:head>
    <title>Thibaut Valez | {$t("page.contact")}</title>
    <meta name="description" content="{$t("page.contact-description")}" />
    <meta
        name="robots"
        content="index, follow, max-snippet:-1,"
    />
    <html lang={$locale} />
</svelte:head>

<section>
    <p>Paris | Lyon | France | Europe</p>
    <a href="mailto:thibaut.valez@gmail.com">&#8599; thibaut.valez@gmail.com</a>
    <a href="tel:+33685557542">&#9742; +33 (0)6 85 55 75 42</a>
    <a href="https://www.linkedin.com/in/thibaut-valez-a9014119/" target="_blank">Linkedin</a>
</section>

<style lang="scss">
    section{
        margin-top: 100px;
        a, p {
            display: block;
            font-size: 30px;
            font-weight: 300;
            text-align: center;
        }
    }

</style>
<script>
    import { t } from "./i18n/i18n";
</script>
<h1 class="title">
    {@html $t("skills.title")}
</h1>
<section>

    <article>
        <img src="skills/agile.jpg" alt="agility iconography"/>
        <h1>{$t("skills.agile-title")}</h1>
        <p>{@html $t("skills.agile")}</p>
    </article>
    <article>
        <img src="skills/dev.jpg" alt="building animation"/>
        <h1>{$t("skills.technical-title")}</h1>
        <p>{@html $t("skills.technical")}</p>
    </article>
    <article>
        <img src="skills/product.jpg" alt="strategic thinking iconography"/>
        <h1>{$t("skills.strategy-title")}</h1>
        <p>{@html $t("skills.strategy")}</p>
    </article>
</section>

<style lang="scss">
    .title{
      font-weight: 300;
      font-size: 44px;
      text-align: center;
      margin: 150px 0 150px;
      @media (max-width: 1250px) {
        margin: 130px 0 180px;
      }
    }
    section{
      display:flex;
      justify-content: space-between;

      @media (max-width: 1250px) {
        flex-direction: column;
      }

      article{
        margin: 0 10px;
        min-height:400px;
        flex-basis:  33%;
        padding:30px;
        box-sizing: border-box;
        img{
          display:block;
          max-height: 230px;
          margin: 0 auto 20px;
        }
        h1{
          font-size: 28px;
          font-weight: 500;
          display:block;

          text-align: center;

          @media (min-width: 1250px) {
            height:110px;
          }

          @media (max-width: 1250px) {
            margin-bottom: 30px;
          }

        }
        p{
          font-size: 22px;
          font-weight: 300;
          min-height: 200px;
            text-align: justify;
        }
      }
    }
</style>

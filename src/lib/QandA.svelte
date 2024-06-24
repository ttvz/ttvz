<script>
    import { t } from "./i18n/i18n";
</script>
<section>
    <h1 class="title">Q&A</h1>
    <p>{$t("qa.subtitle")}</p>

    <article>
        <h1>. {$t("qa.question-a")}</h1>
        <p>{@html $t("qa.answer-a")}</p>
    </article>
    <article>
        <h1>. {$t("qa.question-b")}</h1>
        <p>{@html $t("qa.answer-b")}</p>
    </article>
    <article>
        <h1>. {$t("qa.question-b2")}</h1>
        <p>{@html $t("qa.answer-b2")}</p>
    </article>
    <article>
        <h1>. {$t("qa.question-c")}</h1>
        <p>{@html $t("qa.answer-c")}</p>
    </article>
    <article>
        <h1>. {$t("qa.question-d")}</h1>
        <p>{@html $t("qa.answer-d")}</p>
    </article>
    <article>
        <h1>. {$t("qa.question-e")}</h1>
        <p>{@html $t("qa.answer-e")}</p>
    </article>
    <article>
        <h1>. {$t("qa.question-f")}</h1>
        <p>{@html $t("qa.answer-f")}</p>
    </article>
    <article>
        <h1>. {$t("qa.question-g")}</h1>
        <p>{@html $t("qa.answer-g")}</p>
    </article>
    <article>
        <h1>. {$t("qa.question-h")}</h1>
        <p>{@html $t("qa.answer-h")}</p>
    </article>
    <article>
        <h1>. {$t("qa.question-i")}</h1>
        <p>{@html $t("qa.answer-i")}</p>
    </article>
    <article>
        <h1>. {$t("qa.question-j")}</h1>
        <p>{@html $t("qa.answer-j")}</p>
    </article>
</section>




<style lang="scss">
  section{
    margin-top: 50px;
    padding-bottom: 50px;
    h1 {
      @media (max-width: 1250px) {
        text-align: center;
      }
      &.title {
        font-weight: 300;
        font-size: 40px;
        text-align: center;
        background-color: #F0ECE4;
      }
    }
    p{
      font-style: italic;
      @media (max-width: 1250px) {
        text-align: center;
      }
    }
    article{
      margin-top: 30px;
    }
  }
</style>

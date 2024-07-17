<script>
    import { _ } from "svelte-i18n";
</script>
<section>
    <h1 class="title">{$_('page.about.qa.title')}</h1>
    <p>{$_('page.about.qa.subtitle')}</p>

    <article>
        <h1>. {$_('page.about.qa.question-a')}</h1>
        <p>{@html $_('page.about.qa.answer-a')}</p>
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

<script>
    import { _ } from "svelte-i18n";
    import Icon from 'svelte-fa'
    import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
</script>

<article>
    <section>
        <img class="error-picture desktop-only" width="500" src="{$_('page.error.picture')}" alt="{$_('page.error.alt-picture')}">
    </section>
    <section class="error-infos">
        <h1>Ooops ! Vous avez trouvé le monde perdu !</h1>
        <img class="error-picture mobile-only" width="500" src="{$_('page.error.picture')}" alt="{$_('page.error.alt-picture')}">

        <h2>Revenez sur le sentier balisé :</h2>
        <ul>
            <li><a><span class="material-icons"><Icon icon={faArrowRight}/></span> Retour à l'accueil</a></li>
            <li><a><span class="material-icons"><Icon icon={faArrowRight}/></span> En savoir plus</a></li>
            <li><a><span class="material-icons"><Icon icon={faArrowRight}/></span> Télécharger mon CV</a></li>
            <li><a><span class="material-icons"><Icon icon={faArrowRight}/></span> Me contacter</a></li>
        </ul>
    </section>
</article>


<style lang="scss" global>
    article {
        padding:70px 0;
        width: 75vw;
        margin: 0 auto;
      display: flex;

      .error-infos{
        padding: 0 0 0 100px;
      }
      @media (max-width: 1250px) {
        padding: 50px 0;
        section{
          width: 100%;
        }
        .error-picture{
          width:100%;
        }
      }
      @media (max-width: 1000px) {
        flex-direction: column-reverse;
        .error-infos{
          padding: 0;
        }
      }
    }
    h1 {
      font-size: 26px;
    }
    h2 {
      color: #666666;
      margin-top: 50px;
    }

      @media (max-width: 1000px) {
        .desktop-only {
          display :none;
        }
        .mobile-only{
          margin-top: 20px;
        }
      }
    @media (min-width: 1000px) {
      .mobile-only {
        display :none;
      }
    }

</style>
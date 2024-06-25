<style lang="scss" global>
  a {
    //@include underline-effect;
  }
  .icon-scroll{
    width: 100px;
    height: 30px;
    position: fixed;
    right: 0px;
    bottom: 0px;
    &.hidden{
      display: none;
    }

    .arrow{
      border: solid #000000;
      border-width: 0 4px 4px 0;
      display: inline-block;
      padding: 10px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
      margin-top: -30px;
      margin-left: 40px;
    }
  }
  .identity-picture{
    object-fit: cover;
    width: 100%;
    height: auto;
    @media (max-width: 1250px) {
      margin-top: 50px;
    }
  }
  .overview{
    padding:70px 0px;
    width: 75vw;
    margin: 0 auto;

    @media (max-width: 1250px) {
      padding: 0;
    }

  }
  section{
    display: flex;
    @media (max-width: 1250px) {
      flex-direction: column;
    }
  }
  .pitch {
    font-size: 25px;
    flex:2;
    font-weight: 500;

    a{
      font-size: 25px;
      font-weight: 800;
    }

    @media (max-width: 1250px) {
      text-align: center;
      margin-top: 70px;
      order: 2;
    }
    i{
      font-size: 18px;
      font-weight: 300;
    }
  }
  .identity-infos{
    flex:1;
    padding-left: 200px;
    box-sizing: border-box;

    @media (max-width: 1250px) {
      margin-top: 50px;
      padding-left: 0px;
      text-align: center;
      order: 1;
    }

    h1, h2 {
      font-weight: 300;
      font-size: 22px;
    }
    h2{
      font-style: italic;
      margin-top: 25px;
    }
  }
  .more-infos{
    border-top: 1px solid #CCC;
    margin-top: 50px;
    margin-bottom: 50px;
    padding-top: 30px;
    .story-link{
      width:30%;
      margin-right: 30px;
      @media (max-width: 1250px) {
        width: 100%;
        margin-top: 10px;
      }

      h1{
        font-size: 22px;
        font-weight: 300;
      }
    }
  }
  .pitch .material-icons{
    font-size: 18px;
  }

  .more-infos .material-icons{
    font-size: 14px;
  }
  ul{
    margin:0;
    padding:0;
  }
</style>

<script>
    import { t } from "./i18n/i18n";
    let y;
    let windowSize;

    import Icon from 'svelte-fa'
    import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

</script>

<svelte:window bind:scrollY={y} bind:innerWidth={windowSize}/>
<div class="icon-scroll" class:hidden={y > 150 || windowSize < 1400}>
    <div class="arrow"></div>
</div>

<img width="640" height="360" class="identity-picture" src="./photo-thibaut_valez.webp" alt="thibaut valez 2024">
<article class="overview">
    <section>
        <p class="pitch">
            {@html $t("overview.pitch")}
            <br>
            <a href="/about"><span class="material-icons"><Icon icon={faArrowRight}></Icon></span> {$t("overview.more")}</a> <i>{$t("overview.or")}</i> <a href="mailto:thibaut.valez@gmail.com"><span class="material-icons"><Icon icon={faArrowRight}></Icon></span> thibaut.valez@gmail.com</a>
        </p>
        <div class="identity-infos">
            <h1>
                <b>Thibaut Valez</b><br>
                {@html $t("overview.city")}.</h1>
            <h2>
                <b>Scrum Master | Coach Agile</b>
                <br>  - Freelance -
            </h2>
        </div>
    </section>

    <section class="more-infos">
        <article class="story-link">
            <h1>{$t("overview.background")}</h1>
            <ul>
                <li><a href="/profil-thibaut_valez.pdf" download><span class="material-icons"><Icon icon={faArrowRight}></Icon></span> {$t("overview.background_article")} (pdf)</a></li>
            </ul>
        </article>
        <article class="story-link">
            <h1>{$t("overview.job")}</h1>
            <ul>
                <li><a sveltekit:prefetch href="/about"><span class="material-icons"><Icon icon={faArrowRight}></Icon></span> Scrum master | Coach Agile</a></li>
            </ul>
        </article>
        <article class="story-link">
            <h1>{$t("overview.socials")}</h1>
            <ul>
                <li><a href="https://www.linkedin.com/in/thibaut-valez-a9014119/" target="_blank"><span class="material-icons"><Icon icon={faArrowRight}></Icon></span> Linkedin</a></li>
                <li><a href="https://twitter.com/ttvz_" target="_blank"><span class="material-icons"><Icon icon={faArrowRight}></Icon></span> Twitter</a></li>
                <li><a href="https://github.com/ttvz" target="_blank"><span class="material-icons"><Icon icon={faArrowRight}></Icon></span> Github</a></li>
            </ul>
        </article>
    </section>

</article>

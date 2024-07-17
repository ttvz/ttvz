<script>
    import { _ } from "svelte-i18n";
    let y;
    let windowSize;

    import Icon from 'svelte-fa'
    import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

</script>

<svelte:window bind:scrollY={y} bind:innerWidth={windowSize}/>
<div class="icon-scroll" class:hidden={y > 150 || windowSize < 1400}>
    <div class="arrow"></div>
</div>

<img width="640" height="360" class="identity-picture" src="./{$_('page.home.overview.link-profile-photo')}" alt="{$_('page.home.overview.alt-profile-photo')}">
<article class="overview">
    <section>
        <p class="pitch">
            {@html $_('page.home.overview.pitch')}
            <br>
            <a href="/about"><span class="material-icons"><Icon icon={faArrowRight}/></span> {$_('page.home.overview.more')}</a> <i>{$_('page.home.overview.or')}</i> <a href="mailto:{$_('page.contact.email')}"><span class="material-icons"><Icon icon={faArrowRight}/></span> {$_('page.contact.email')}</a>
        </p>
        <div class="identity-infos">
            <h1>
                <b>{$_('page.home.overview.name')}</b><br>
                {@html $_('page.home.overview.city')}.</h1>
            <h2>
                <b>{$_('page.home.overview.role')}</b>
                <br>  - {$_('page.home.overview.status')} -
            </h2>
        </div>
    </section>

    <section class="more-infos">
        <article class="story-link">
            <h1>{$_('page.home.overview.background')}</h1>
            <ul>
                <li><a href="/{$_('layout.footer.pdf-link')}" download><span class="material-icons"><Icon icon={faArrowRight}/></span> {$_('page.home.overview.background_article')}</a></li>
            </ul>
        </article>
        <article class="story-link">
            <h1>{$_('page.home.overview.job')}</h1>
            <ul>
                <li><a href="/about"><span class="material-icons"><Icon icon={faArrowRight}/></span> {$_('page.home.overview.role')}</a></li>
            </ul>
        </article>
        <article class="story-link">
            <h1>{$_('page.home.overview.socials')}</h1>
            <ul>
                <li><a href="https://www.linkedin.com/in/thibaut-valez-a9014119/" target="_blank"><span class="material-icons"><Icon icon={faArrowRight}/></span> {$_('page.home.overview.linkedin')}</a></li>
                <li><a href="https://twitter.com/ttvz_" target="_blank"><span class="material-icons"><Icon icon={faArrowRight}/></span> {$_('page.home.overview.twitter')}</a></li>
                <li><a href="https://github.com/ttvz" target="_blank"><span class="material-icons"><Icon icon={faArrowRight}/></span> {$_('page.home.overview.github')}</a></li>
            </ul>
        </article>
    </section>

</article>

<style lang="scss" global>
  .icon-scroll{
    width: 100px;
    height: 30px;
    position: fixed;
    right: 0;
    bottom: 0;
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
    padding:70px 0;
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
      padding-left: 0;
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
<script>
    //import { mobile_menu } from '../../stores.js';

    export let scrolled;
</script>

<div class="menu-icon" class:scrolled={scrolled}>
    <!--<input class="menu-icon__cheeckbox" type="checkbox" bind:checked={$mobile_menu}/>-->
    <div>
        <span></span>
        <span></span>
    </div>
</div>

<style lang="scss">

  .menu-icon {
    position: relative;
    cursor: pointer;
    transform: scale(1.5);
    --bar-bg: #000;
    &.scrolled{
      --bar-bg: #FFF;
    }

    .menu-icon__cheeckbox {
      display: block;
      width: 100%;
      height: 200%;
      cursor: pointer;
      z-index: 2;
      -webkit-touch-callout: none;
      position: absolute;
      opacity: 0;
      margin: -5px 0;
    }
    div {
      margin-top: 36px;
      width: 14px;
      height: 6px;
    }
    span {
      position: absolute;
      display: block;
      width: 100%;
      height: 1px;
      background-color: var(--bar-bg, #CCC);
      border-radius: 1px;
      transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);

      &:first-of-type {
        top: 0;
      }
      &:last-of-type {
        bottom: 0;
      }
    }
    .menu-icon__cheeckbox:checked + div {
      span {
        &:first-of-type {
          transform: rotate(45deg);
          top: 2px;
        }
        &:last-of-type {
          transform: rotate(-45deg);
          bottom: 3px;
        }
      }
    }

    &:hover .menu-icon__cheeckbox:checked + div span:first-of-type,
    &:hover .menu-icon__cheeckbox:checked + div span:last-of-type {
      width: 14px;
    }

    &:hover {
      @media (min-width: 1250px) {
        span:first-of-type {
          width: 14px;
        }

        span:last-of-type {
          width: 10px;
        }
      }
    }
  }

</style>
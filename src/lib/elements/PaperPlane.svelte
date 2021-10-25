
<div class="plane-container">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         width="1131.53px" height="379.304px" viewBox="0 0 1131.53 379.304"
         xml:space="preserve" class="plane">
        <polygon fill="#444" points="72.008,0 274.113,140.173 274.113,301.804 390.796,221.102 601.682,367.302 1131.53,0.223"/>
        <polygon fill="#000" points="1131.53,0.223 274.113,140.173 274.113,301.804 390.796,221.102"/>
    </svg>
</div>

<style lang="scss">
  svg {
    max-width: 100%;
    display: block;
  }

  .plane-container {
    width: 100vw;
    z-index: 3;
    position: absolute;
    bottom: 120px;
  }

  .plane {
    width: 100%;
    height: 20px;
  }

  .plane-container {
    -webkit-animation: paper-plane-scoping 2s alternate infinite;
    -moz-animation: paper-plane-scoping 2s alternate infinite;
    animation: paper-plane-scoping 2s alternate infinite;

    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    animation-timing-function: linear;
  }

  @-webkit-keyframes paper-plane-scoping {
    0% {
      -webkit-transform: translateY(0px);
      -moz-transform: translateY(0px);
      transform: translateY(0px);
    }
    100% {
      -webkit-transform: translateY(20px);
      -moz-transform: translateY(20px);
      transform: translateY(20px);
    }
  }

  .plane {
    -webkit-animation-timing-function: ease-in-out;
    -moz-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;

    -webkit-animation: paper-plane-soaring 4s forwards infinite;
    -moz-animation: paper-plane-soaring 4s forwards infinite;
    animation: paper-plane-soaring 4s forwards infinite;
  }
  @-webkit-keyframes paper-plane-soaring {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    40% {
      -webkit-transform: rotate(15deg);
      -moz-transform: rotate(15deg);
      transform: rotate(15deg);
    }
    50% {
      -webkit-transform: rotate(15deg);
      -moz-transform: rotate(15deg);
      transform: rotate(15deg);
    }
    60% {
      -webkit-transform: rotate(-10deg);
      -moz-transform: rotate(-10deg);
      transform: rotate(-10deg);
    }
    70% {
      -webkit-transform: rotate(-10deg);
      -moz-transform: rotate(-10deg);
      transform: rotate(-10deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

</style>
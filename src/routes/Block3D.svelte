<script>
  export let text = "";
  let lines = text.split(" | ");
</script>

<div class="slider">
  <div class="container">
    <div class="slide x">{lines[0]}</div>
    <div class="slide y">{lines[1]}</div>
    <div class="slide z">{lines[2]}</div>
    <div class="slide a">{lines[3]}</div>

  </div>
</div>

<style>
  .slider {
    position: absolute;
    top: 30vh;
    bottom: 0;
    right: 0;
    left: 0;
    width: 300px;
    height: 200px;
    margin: auto;
    -webkit-perspective: 600px;
    perspective: 600px;
    @media (min-width: 775px) {
      right: 20px;
    }
  }

  .slider * {
    transition: all 1s cubic-bezier(0.5, -0.75, 0.2, 1.5);
  }

  .container {
    width: inherit;
    height: inherit;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
  }
  .slide,
  .slide:after,
  .slide:before {
    position: absolute;
    display: block;
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: center;
    position: absolute;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    background-size: cover;
    background-position: center;
  }

  .slide.a{
        /* opacity: 0; */
        transform: rotateX(360deg);
    /* animation: opacitya 6s infinite cubic-bezier(1, -0.75, 0.5, 1.2); */
  }
  .slide.x {
    transform: rotateX(90deg);
    /* opacity: 0; */
    animation: opacityx 5s infinite cubic-bezier(1, -0.75, 0.5, 1.2);
  }
  .slide.y {
    /* opacity: 0; */
    transform: rotateX(180deg);
    animation: opacityy 5s infinite cubic-bezier(1, -0.75, 0.5, 1.2);
  }
  .slide.z {
    /* opacity: 0; */
    transform: rotateX(270deg);
    animation: opacityz 5s infinite cubic-bezier(1, -0.75, 0.5, 1.2);
  }

  .container {
    animation: rotate 6s infinite cubic-bezier(1, -0.75, 0.5, 1.2);
  }

  @keyframes rotate {
    0% {
      transform: rotateX(0deg);
    }
    25%{
      transform: rotateX(90deg);
    }
    50%{
      transform: rotateX(180deg);
    }
    75%{
      transform: rotateX(270deg);
    }
    100%{
      transform: rotateX(360deg);

  }
  }

  @keyframes opacitya {

0% {
opacity: 0;
}
25%{
opacity: 0;
}
50%{
opacity: 0;
}
75%{
opacity: 0;
}
100%{
opacity: 1 ;

}
}

  @keyframes opacityx {

        0% {
  opacity: 1;
    }
    25%{
    opacity: 0;
    }
    50%{
      opacity: 0;
    }
    75%{
      opacity: 0;
    }
    100%{
      opacity: 0;

  }
  }
  @keyframes opacityy {
    0% {
  opacity: 0;
    }
    25%{
    opacity: 01;
    }
    50%{
      opacity: 0;
    }
    75%{
      opacity: 0;
    }
    100%{
      opacity: 0;

  }

  }
  @keyframes opacityz {
    0% {
  opacity: 0;
    }
    25%{
    opacity: 0;
    }
    50%{
      opacity: 1;
    }
    75%{
      opacity: 0;
    }
    100%{
      opacity: 0;

  }

}
</style>

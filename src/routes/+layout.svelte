<script>
	import Nav from "./Nav.svelte"

</script>
<slot/>
<Nav/>
<div class="top-shadow"></div>
<style>
    .top-shadow{
    background-color: black;
    opacity: 0.5;
    height: 20vh;
    width: 150vw;
    pointer-events: none;
    display: block;
    filter: blur(2rem);
    position: fixed;
    top: -11rem;
    left: 0;
    transform: scale(1.5);
    }
</style>
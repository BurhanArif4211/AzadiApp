<script>
	let isNavOpen = false
let slide=false

	const toggleNav = () => {
		isNavOpen = !isNavOpen
        slide=!slide
	}
</script>


	<div
		id="button"
		class="toggle"
    class:toggled={slide}
		on:click={() => {
			toggleNav()
		}}
	>
		<div id="icon" />
	</div>
	<div class="overlayIntro overlay"></div>
	{#if isNavOpen}
		<div id="overlay" on:click={() => {toggleNav();}}/>
	{/if}
<nav class:slide={slide} class="nav" >
			<li class="nav__item"><a href="/">Home</a></li>
			<li class="nav__item"><a href="/About">About</a></li>
			<li class="nav__item"><a href="/Create">Create</a></li>
			<li class="nav__item"><a href="/History">History</a></li>
			<li class="nav__item"><a href="/Games">Games</a></li>
</nav>


<style lang="scss">
/* *NAV Sec */
.nav {
	 top: 0;
	 color: white;
	 font-family: nation;
	 position: fixed;
	 z-index: 3;
	 text-decoration: none;
	 transform: translateX(-200%);
	 transition: all 1s ease;
	 height: 100vh;
	 background: #006400 url('/src/lib/clips/Bunting_nav.jpg');
	 background-position: 0 -780px;
	 background-size: 1080px;
	 background-repeat: no-repeat;
	 padding: 0;
	 text-align: left;
	 padding: 30px;
	 display: flex;
	 flex-direction: column;
	 justify-content: center;
	 perspective: 1000px;
}
 @media (width>=360px) {
	 .nav {
		 height: 117vh;
	}
}
 .slide {
	 transform: translateX(0);
	 background-position: -270px -15px;
	 background-size: 860px;
}
 .nav__item {
	 font-size: clamp(4rem, 4vW, 10rem);
	 display: block;
	 padding: 1.16vh 0;
	 position: relative;
	/* Add this to establish a positioning context */
	 cursor: pointer;
	 text-shadow: 0px 0px 7px black;
	 transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
	 transform-style: preserve-3d;
	/* Enable 3D transformations */
	 transform-style: preserve-3d;
}
 .nav__item:hover {
	 animation: alterer 2s ease-in-out infinite;
	/* Rotate on Y-axis */
}
 @keyframes alterer {
	 0% {
		 transform: rotateX(0deg);
	}
	 50% {
		 transform: rotateX(-360deg);
	}
	 100% {
		 transform: rotateX(0deg);
	}
}
 a {
	 padding: 8px 8px 8px 32px;
	 all: unset;
	 display: block;
}
 #button {
	 background-color: transparent;
	 border: none;
	 cursor: pointer;
	 height: 80px;
	 outline: none;
	 padding: 0px;
	 width: 100px;
}
 #button.toggled #icon {
	 background-color: transparent;
}
 #button.toggled #icon:before {
	 top: 0px;
	 transform: rotate(-45deg);
}
 #button.toggled #icon:after {
	 bottom: 0px;
	 transform: rotate(45deg);
}
 #button #icon {
	 background-color: white;
	 border-radius: 100px;
	 height: 10px;
	 position: relative;
	 transition: all 0.25s;
	 width: 100px;
}
 #button #icon:before, #button #icon:after {
	 background-color: white;
	 border-radius: 100px;
	 content: '';
	 height: 10px;
	 left: 0px;
	 position: absolute;
	 transition: all 0.25s;
	 width: 100px;
}
 #button #icon:before {
	 top: -30px;
}
 #button #icon:after {
	 bottom: -30px;
}
 .toggle {
	 z-index: 4;
	 position: fixed;
	 transform: scale(0.3);
	 top: 30px;
	 left: 9px;
}
 #overlay {
	 position: fixed;
	 display: block;
	 width: 100%;
	 height: 100%;
	 left: 0;
	 top: 0;
	 background-color: rgba(0, 0, 0, 0.5);
	 transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
	 backdrop-filter: blur(5px);
	 z-index: 1;
}
 



</style>

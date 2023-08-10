<script>
	let isNavOpen = false
let slide=false

	const toggleNav = () => {
		isNavOpen = !isNavOpen
    slide=!slide
	}
</script>

<main>
	<button
		id="button"
		class="toggle"
    class:toggled={slide}
		on:click={() => {
			toggleNav()
		}}
	>
		<div id="icon" />
	</button>

	<div class:slide={slide} class="nav">
		<ul  >
			<li class="nav__item">Home</li>
			<li class="nav__item">About</li>
			<li class="nav__item">Create</li>
			<li class="nav__item">History</li>
			<li class="nav__item">Games</li>
		</ul>
	</div>

	{#if isNavOpen}
		<div
			id="overlay"
			on:click={() => {
				toggleNav();
				
			}}
		/>
	{/if}
</main>

<style lang="scss">
  	* {
		padding: 0;
		margin: 0;
		border: 0;}
	/* *NAV Sec */
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 900px;
    padding: 3%;
    height: 100vh;
    z-index: 2;
    text-decoration: none;
    transform: translateX(-200%);
      transition: transform 1s ease;
  }
.slide{
  transform: translateX(0);
}

	ul {
		background-color: #006400;
		position: fixed;
		z-index: 1;
		top: 0;
		bottom: 0;
		left: 0;

		padding: 0;
		text-align: left;
    padding-left:20px ;
		display: flex;
		flex-direction: column;
		justify-content: center;

	}
	.nav__item {
		font-size: clamp(55px, 4vw, 366px);
		display: block;
		padding: 1.16vh 0;
	}



	a {
		padding: 8px 8px 8px 32px;
		text-decoration: none;
		color: #818181;
		display: block;
		transition: 0.3s;
	}

  #button {
		background-color: transparent;
		border: none;
		cursor: pointer;
		height: 80px;
		outline: none;
		padding: 0px;
		width: 100px;

		&.toggled {
			#icon {
				background-color: transparent;

				&:before {
					top: 0px;
					transform: rotate(-45deg);
				}

				&:after {
					bottom: 0px;
					transform: rotate(45deg);
				}
			}
		}

		#icon {
			background-color: white;
			border-radius: 100px;
			height: 10px;
			position: relative;
			transition: all 0.25s;
			width: 100px;

			&:before,
			&:after {
				background-color: white;
				border-radius: 100px;
				content: '';
				height: 10px;
				left: 0px;
				position: absolute;
				transition: all 0.25s;
				width: 100px;
			}

			&:before {
				top: -30px;
			}

			&:after {
				bottom: -30px;
			}
		}
	}
	
	.toggle {
		z-index: 4;
		position: fixed;
		top: 30px;
		left: 20px;
	}
	#overlay {
		position: fixed;
		display: block;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background-color: rgba(0, 0, 0, 0.5);
		transition: 0.5s;
		backdrop-filter: blur(5px);
		z-index: 1;
	}

	body {
		align-items: center;
		display: flex;
		height: 100vh;
		justify-content: center;
		margin: 0px;
		padding: 0px;
		width: 100vw;
	}


</style>

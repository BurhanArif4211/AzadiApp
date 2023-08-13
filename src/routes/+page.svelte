<script>
	import Block3D from "./Block3D.svelte"
	import Nav from "./Nav.svelte"

</script>

<head>
	<title>Azadi | Home</title>
</head>
<video id="video-background" autoplay muted loop>
	<source src="/src/lib/backdrop.mp4" type="video/mp4">
 </video>
<div class="main">
	<div class="header">
		<div class="header__top">Azadi</div>
        <div class="header__main"><!--<Block3D text=" XXXX | YYYY | ZZZZ | AAAA "/>-->PAKISTAN</div>
	</div>

	<!-- <Separate/> -->
	<div class="one">
		<div class="right">

		</div>
		<div class="left">

		</div>
	</div>
	<div class="two">
		<div class="right">

		</div>
		<div class="left">
			
		</div>
	</div>
<!-- <Footer/> -->
<Nav/>
</div>
<style>
	
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;  
}
#video-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
	/* opacity: 0.7; */
    z-index: -1; /* Place the video behind other content */
  }
.main{  
position: relative;
height: 100vh;
}
	.header{

		font-size: clamp(3rem, 6vw, 22rem);;
	}
	.header__main{
		position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
		
	}
	.header__top{
		position: absolute;
        top: 90px;
        left: 30px;
	}

</style>

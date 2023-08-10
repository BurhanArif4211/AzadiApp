<script>
	import Block3D from "./Block3D.svelte"

</script>
<head>
	<title>Azadi | Home</title>
</head>
<body>
	<!--  -->
	<div class="header">
		<div class="header__top">Azadi</div>
        <div class="header__main"><!--<Block3D text=" XXXX | YYYY | ZZZZ | AAAA "/>-->PAKISTAN</div>
	</div>
   
</body>

<style>
	@font-face {
		font-family: nation;
		src: url(../../src/lib/fonts/Nation.ttf);
	}
	* {
		padding: 0;
		margin: 0;
		border: 0;
		font-family: nation;
		color:white;
		background: black;
	}
	body{
		padding: 5%;
		z-index: 0;
	}
	.header{
		font-size: clamp(75px, 6vw, 356px);;
		position: relative;
	}

</style>

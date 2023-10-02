<script>
	import Block3D from './Block3D.svelte';
	import ContactForm from './ContactForm.svelte'
	import ImageCont from './ImageCont.svelte'
	import Separate from './Separate.svelte';
  </script>
  
  <head>
	<title>Azadi | Home</title>
  </head>
  <video id="video-background" autoplay muted loop>
	<source src="/backdrop.mp4" type="video/mp4" />
  </video>
  <div class="main">
	  <div class="header__top">Azadi</div>
	  <div class="header__content">
		<p class="header__main">
		  There is no power on the face of the Earth which can undo Pakistan.
		</p>
		<p class="ref">~Quaid-e-Azam</p>
		<button  class="explore"><a href="/History">Explore</a></button>
	</div>
</div>
<div class="separator"><Separate /></div>
  <div class="one">
	<div class="two">
	<div class="box">
		<div class="heading">Quaid-E-Azam</div>
		<div class="para" >“You are free. you are free to go to your temples. You are free to go to your mosques or to any other places of worship in this State of Pakistan.”</div>
		<div class="ImgCont"><ImageCont src="/images/Mohammad-Ali-Jinnah.webp" align="right" size="31rem"/> </div>
</div>	
</div>
	</div>
  <div class="two">
	<div class="box2">
	<div class="heading" >Contact</div>
	<div class="para" ><ContactForm/></div>
</div>
	<!-- <Footer/> -->

  </div>
  <div class="overlayIntro"></div>
  <style lang="css">

	@font-face {
	  font-family: nation;
	  src: url(/src/lib/fonts/Nation.ttf);
	}
	*{
	font-family: nation;
	  font-size: 62.5%;
	  color:#fff;
	}
  
	#video-background {
	  position: fixed;
	  top: 0;
	  left: 0;
	  width: 100%;
	  height: 100%;
	  object-fit: cover;
	  background: black;
	  /* opacity: 0.7; */
	  z-index: -1;
	}
	.main {
	  font-family: nation;
	  font-size: 62.5%;
	  color: white;
	  position: relative;
	  height: 100vh;
	}

	.header__content {
	font-size: clamp(1rem, 2.16vw, 3rem);
    opacity: 0;
    animation: animate3D 3s forwards cubic-bezier(0.41, 0.03, 0.27, 1.01); /* Apply the animation */
	position: relative;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%, -50%);
	  width:auto; 
	  max-width: 800px; 
	  padding: 50px;
	  border-radius: 2.375rem;
	  /* background: #0064004d; */
	  box-shadow: 0px 0px 25px 30px rgba(0, 100, 0, 0.25) inset;
	  text-align: center;
	}
  
	.ref {
	  font-size: clamp(0.3rem, 3vw, 1rem);
	  position: absolute;
	  bottom: 0;
	  right: 0;
	  transform: translate(-50%, -50%);
	  margin: 0;
	  padding: 0;
	}
  
	.header__top {
	  font-size: clamp(3rem, 6vw, 22rem);
	  position: absolute;
	  top: 90px;
	  left: 5.16vw;
	  z-index: 2;
	  animation: intro 3s cubic-bezier(0.41, 0.03, 0.27, 1.01);
	}
	.header__main{
		font-family: 'poppins',"lato";
	}
	.explore{
	position: absolute;
    background: none;
    color: #fff;
    border: solid #ccc;
    padding: 1rem 2rem;
    border-radius: 100px;
    cursor: pointer;
    transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
    font-size: clamp(1.16vw, 2vh, 2rem);
	
	transform: translate(-50%,0);
	bottom: -100%;
    left: 50%;
    @media (max-width: 775px) {
      padding: 2rem 2rem;
     }
	}
	.explore a{
		text-decoration: none;

	}
	.explore:hover {
	background-color: #fff;
}
.explore:hover a{
	color: black;
}
	.one{
		font-size:clamp(1rem, 2.16vw, 3rem) ;
		height: 100vh;
		padding: 100px;
	}

	.box{
		margin-top: 30vh;
		padding: 1.16vw;
		width: 55.875rem;
flex-shrink: 0;
border-radius: 4.375rem;
border: 0px solid #FFF;
background: rgba(217, 217, 217, 0.03);
box-shadow: 0px 0px 250px 97px rgba(0, 100, 0, 0.15) inset;
	}
.ImgCont{
	padding-right: 10%;
}

	.box2{
		margin-top: 30vh;
		padding: 1.16vw;
		width: 55.875rem;
flex-shrink: 0;
border-radius: 4.375rem;

}
	.heading {
		font-size: clamp(2rem, 6vw, 4rem);


		padding-bottom: 10px;
		}

		.para {
			font-family:  'Poppins', sans-serif;
			font-size: clamp(1rem, 3vw, 2rem);
		}

		.two{
			height: 100vh;
		}


		.overlayIntro{
			pointer-events: none;
		position: fixed;
		display: block;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background-color: black;
		transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
		z-index: 1;
	animation: introOverlay 5s cubic-bezier(0.075, 0.82, 0.165, 1) ;
	opacity: 0;
	}

	@keyframes intro {
	  0% {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	  }
	  50% {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	  }
	  100% {
		top: 90px;
		left: 5.16vw;
		transform: translate(0);
	  }
	}
	@keyframes animate3D {
    0%,50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes introOverlay{
	0%{
		opacity: 1;
	}
	40%{opacity: 1;}

	
	100%{
opacity: 0;
	}
}


	
  </style>
  
<script>
	/**
	 * @type {undefined}
	 */
	let generatedImagePath = undefined ;
	const titles = ['Event1', 'Event2', 'Event3']
let clearCount=0;
 function clearImg(){
	if (clearCount>0){
    generatedImagePath=undefined;
}
clearCount=clearCount+1;
}

	async function handleSubmit(event) {
		const formEl = event.target
		const formData = new FormData(formEl)
		console.log(formData)

		let response = await fetch('/Create', {
			method: 'POST',
			body: formData
		})
		if (response.ok) {
			const responseData = await response.json()
			generatedImagePath = responseData.body.filePath
		} else {
			console.log('Error:', response.message)
		}
	}
</script>

<div class="cont">
	<div class="item">
		<form on:submit|preventDefault={handleSubmit}>
			<label>
				<div class="h2">Select title:</div>
				<select class="drop" name="title" type="text">
					{#each titles as t (t)}
						<option>{t}</option>
					{/each}
				</select>
			</label>

			<label>
				<div class="h2">Your name:</div>
				<input class="input" type="text" name="name" />
			</label>

			<label>
				<div class="h2">Upload background image:</div>
				<input class="input" name="file" type="file" />
			</label>

			<label>
				<div class="h2">Output format:</div>
				<input type="radio" name="outputFormat" value="jpg" /> JPG
				<input type="radio" name="outputFormat" value="pdf" /> PDF
			</label>

			<button on:click={clearImg()} type="submit">Create Wish Card</button>
		</form>
	</div>
	{#if generatedImagePath}
  <div class="display">
    <h2>Your Generated Wish Card</h2>
    <img src={generatedImagePath} alt="Generated Wish Card" />
    <button><a href={generatedImagePath} download>Download Wish Card</a></button>
  </div>
{/if}

</div>

<style>
@font-face {
	  font-family: nation;
	  src: url(/src/lib/fonts/Nation.ttf);
	}	
*{
	font-family: nation;
}
body{
	height: 200vh;
}
.cont {
  display: flex;
  flex-direction: column; /* Stack the elements vertically on smaller screens */
  align-items: center; /* Center elements horizontally */
  font-size: 62.5%;
  color: #ffffff;
  height: 100vh;
  width: 100vw;
  position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
	background-repeat: no-repeat;
  background-attachment: fixed;
  background:url("/src/lib/clips/BACKDROP_DARK.jpg");
}

.item {
	margin-top: 10vh;
  width: 100%; /* Occupy the entire width on smaller screens */
  max-width: 775px; /* Limit the width on larger screens */
  padding: 1rem;
  text-align: center; /* Center the form content */
}

.display {
  width: 100%; /* Occupy the entire width on smaller screens */
  max-width: 775px; /* Limit the width on larger screens */
  padding: 1rem;
  text-align: center; /* Center the generated wish card content */
  margin-top: 20px; /* Add some space between the form and the generated image */
}

.display img {
	width: unset;
	height: unset;
  width: 100%; /* Ensure the image doesn't exceed the container's width */
 
}

@media (min-width: 776px) {
  .cont {
    flex-direction: row; /* Side-by-side layout on larger screens */
	background-position: left;
    justify-content: space-between; /* Spread elements apart horizontally */
  }

  .item {
    width: calc(50% - 20px); /* Take up half of the available width */
    margin-right: 20px; /* Add space between the form and the generated image */
  }

  .display {
    width: calc(50% - 20px); /* Take up half of the available width */
    margin-left: 20px; /* Add space between the form and the generated image */
  }

}

	

label{
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  transition: .5s;	}
  .input{
    width: 100%;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border-radius: 100px;
  border: 1px solid #fff;
  outline: none;
  background: transparent;
  cursor: pointer;
  }
  input:focus, input:valid{
    top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
  }

	.h2 {
		text-align: left;
		font-size: clamp(1rem, 2.2vw, 4rem);
	}
	button{
		all: unset;
		background-color: white;
		border-radius: 100px;
		border: solid #fff 1px ;
		padding: 0.5rem 0.25rem;
        color: black;
		font-size: clamp(0.7rem, 1.2vw, 3.16rem);
	}
  a{
	all: unset;
  display: inline-block;
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  } 
  .drop{
	background-color: transparent;
	font-size: clamp(1rem, 2.2vw, 4rem);
  }
  .drop::selection{
	color: black;
  }

</style>

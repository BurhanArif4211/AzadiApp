<!--src/create/+page.svelte-->


<style src="./page.css"></style>
<script>

  let generatedImagePath = undefined; // To store the generated wish card image path
  const titles = ['Event1', 'Event2', 'Event3'];
  
  async function handleSubmit(event) {
    const formEl= event.target;
    const formData = new FormData(formEl);
    console.log(formData)

    let response = await fetch('/Create', {
      method: 'POST',
      body: formData,
    });
    if (response.ok) {
        const responseData = await response.json();
        generatedImagePath = responseData.body.filePath;
      } else {
        console.log('Error:', response.message);
      }
  }


</script>
<div class="cont">
  <div class="item">
<form  on:submit|preventDefault={handleSubmit}>
  <label>
    <div class="h2">Select title:</div>
    <select name="title" type="text"  >
      {#each titles as t (t)}
        <option >{t}</option>
      {/each}
    </select>
  </label>
 
  <label>
    <div class="h2">Your name:</div>
    <input type="text" name="name" >
  </label>

  <label>
    <div class="h2">Upload background image:</div>
    <input name="file" type="file" >
  </label>

  <label>
    <div class="h2">Output format:</div>
    <input type="radio" name="outputFormat" value="jpg" > JPG
    <input type="radio" name="outputFormat" value="pdf" > PDF
  </label>

  <button type="submit">Create Wish Card</button>
</form>
</div>
<!-- {#if generatedImagePath} -->
  <div class="item">
    <section class="display">
    <h2>Your Generated Wish Card</h2>
    <img src="./src/lib/clips/Bunting_nav.jpg" alt="Generated Wish Card">
    <p><a href={generatedImagePath} download>Download Wish Card</a></p>
  </section>
  </div>
<!-- {/if} -->

</div>

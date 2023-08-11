

<script>

    /**
	 * @type {any}
	 */
    let title;
    /**
	 * @type {any}
	 */
    let name;
    let file;
  
  
    const titles = ['14 August', 'Eid-Ul-Fitr', 'Eid-ul-Adha','Islamic New Year']; // You can replace these with the actual titles
  
    function handleFileChange(event) {
      file = event.target.files[0];
    }
  
    function handleSubmit() {
        if(!title || !name || !file) {
    alert('Please fill out all fields');
    return;
  }

  if(file.size > 10485760) { // 10MB
    alert('File size should be less than 10MB');
    return;
  }

  const data = { title, name, file }; // form data
  
  console.log(data);

  // Here you can add your logic to handle form data
}
  
  </script>
  <div class="wrapper">
  <div class="form-cont">
  <form on:submit|preventDefault={handleSubmit}>
    
    <label>
      Select title:
      <select bind:value={title}>
        {#each titles as t (t)}
          <option>{t}</option>
        {/each}
      </select>
    </label>
   
    <label>
      Enter Your Name/Title: 
      <input type="text" bind:value={name}>
    </label>
  
    <label>
      Upload Background image:
      <input type="file" accept="image/png, image/jpeg" on:change={handleFileChange}>
    </label>
  
    <button type="submit">Create</button>
  
  </form>
</div>
</div>
<style>
    .wrapper {
      display: flex;
      align-items: center;
      justify-content: flex-start; /* Aligns the form to the left of the page */
      height: 100vh;
      width: 95vw;
      font-size: clamp(5rem, 9vw, 17rem); /* Adjust font size using clamp */
    }
  
    .form-cont {
      background-color: #00b30085;
      border-radius: 40px;
      width: min(700px, 60%);
      margin-left: 10%;
      padding: 30px; /* Add some padding for better spacing */
    }
  
    @media (max-width: 775px) {
      .wrapper {
        justify-content: center; /* Center the form horizontally on larger screens */
      }
  
      .form-cont {
        width: min(60%, 800px); /* Adjust the width for larger screens */
      }
    }
  
    button {
      all: unset;
      border: solid white 0.3vh;
      padding: 11px;
      border-radius: 100px;
    }
  
    button:hover {
      background-color: white;
      color: black;
    }
  
    input {
      all: unset;
      border: solid white 0.3vh;
      border-radius: 100px;
      display: block;
      width: 100%; /* Make the input full width */
      padding: 8px; /* Add padding for better appearance */
      box-sizing: border-box; /* Include padding in the width calculation */
    }
  
    label {
      display: block;
      margin-bottom: 10px; /* Add margin between labels */
    }
  
    select {
      all: unset;
      background: #ccc;
      border: solid white 0.5vh;
      padding: 10px 0px;
      color: black;
      border-radius: 100px;
      transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
      width: 100%; /* Make the select full width */
    }
  
    select:hover {
      background-color: black;
      color: white;
    }
  
    select:focus {
      border-color: #006400; /* Add focus border color */
    }
  </style>
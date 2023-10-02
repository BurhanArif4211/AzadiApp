<script>

import { onMount } from 'svelte';
   import OpenSeadragon from 'openseadragon';

   let viewer;

   onMount(() => {
       viewer = OpenSeadragon({
           id: "viewerElement",
           prefixUrl: "/openseadragon/images/",
           tileSources: "/canvas/output.dzi"
       });
       viewer.addHandler('open', function() {
        // Define the rectangle you want to focus on. In this case, the top-left corner.
        var bounds = new OpenSeadragon.Rect(0, 0, 0.5, 0.5); // Adjust these values as needed

        // Use fitBounds or fitBoundsWithConstraints to adjust the viewport
        viewer.viewport.fitBounds(bounds, true);
        // or
        // viewer.viewport.fitBoundsWithConstraints(bounds);
    });


   });

  

</script>
<div class="main">
<div class="veiw-cont" id="viewerElement" ></div>
</div>
<style>
  .main{
    position: relative;
    height: 100vh;
    width: 100vw;
  }
.veiw-cont{
  height: 100vh;
    width: 100vw;
  background-color: black;
}
</style>
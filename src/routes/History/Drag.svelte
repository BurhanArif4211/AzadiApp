<script>
	import { Stage, Layer } from "svelte-konva";


</script>

<Stage config={{ width: 13333, height: 7500, draggable:true }} >
  <Layer>
   <slot></slot>
  </Layer>
</Stage>
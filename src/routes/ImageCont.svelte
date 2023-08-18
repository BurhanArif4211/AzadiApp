<script>
    export let src= "" ;
    export let src1= "" ;
    export let size="500px"

    export let align="left"
    /**
	 * @type {string}
	 */
    let decide;
    if(align=="left"){
        decide=""
    }
    else if(align=="right"){
        decide="position:absolute;right:40px;"
    }
    else if(align=="center"){
        decide="position:absolute;left:50%;transform:translate(-50%,0);"
    }

</script>
<div class="cont">
    <picture>
<source srcset={src1} media="(min-width:775px)"/>
<img style="max-width: {size};{decide}" alt="madick" src={src}/>
    </picture>
</div>
<style>
.cont{
display: block;
}
</style>
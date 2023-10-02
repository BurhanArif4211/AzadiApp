<script>
    export let src= "" ;
    export let src1= "" ;
    export let size="500px"

    export let align="left"

    let decide;
    if(align=="left"){
        decide=""
    }
    else if(align=="right"){
        decide="position:absolute;right:7vw;"
    }
    else if(align=="center"){
        decide="position:absolute;left:50%;transform:translate(-50%,0);"
    }

</script>
<div class="cont" style="{decide}">
    <picture>
<source srcset={src1} media="(min-width:775px)"/>
<img style="max-width: {size};border-radius: 10%;"  alt="madick" src={src}/>
    </picture>
</div>
<style>

</style>
<script>
    export let klass = null;
    export let src = null;
    export let alt = null;
    export let rounded = null;
    export let circle = null;
    export let roundedtop = null;
    export let roundedbottom = null;
    export let roundedleft = null;
    export let roundedright = null;
    export let textright = null;
    export let textcenter = null;
    export let id = null;
</script>

{#if textright || textcenter}
    <div class:text-center={textcenter} class:text-right={textright} {id}>
        <img
            {src}
            class="img-fluid {klass || ''}"
            class:rounded
            class:rounded-circle={circle}
            class:rounded-top={roundedtop}
            class:rounded-bottom={roundedbottom}
            class:rounded-left={roundedleft}
            class:rounded-right={roundedright}
            {alt} />
    </div>
{:else}
    <img
        {id}
        {src}
        class="img-fluid {klass || ''}"
        class:rounded
        class:rounded-circle={circle}
        class:rounded-top={roundedtop}
        class:rounded-bottom={roundedbottom}
        class:rounded-left={roundedleft}
        class:rounded-right={roundedright}
        {alt} />
{/if}

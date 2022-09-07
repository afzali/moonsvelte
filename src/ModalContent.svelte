<script>
    export let klass = null;
    export let media = null;
    export let noclose = null;
    export let title = null;
    export let id = null;
</script>

<div {id} class="modal-content {klass || ''}" class:modal-content-media={media}>
    {#if !noclose}<a href="#/" class="close"> <span>&times;</span> </a>{/if}
    {#if title}
        <h5 class="modal-title">{title}</h5>
    {/if}
    <slot />
</div>

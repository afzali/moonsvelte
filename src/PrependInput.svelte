<script>
    export let klass = null;
    export let type = "text";
    export let id = null;
</script>

<div
    {id}
    class="input-group-prepend {klass || ''}">
    {#if type == 'text'}
        <span class="input-group-text"><slot /></span>
    {:else}
        <slot />
    {/if}
</div>

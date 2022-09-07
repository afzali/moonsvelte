<script>
    export let klass = null;
    export let large = null;
    export let small = null;
    export let toolbar = null;
    export let vertical = null;
    export let id = null;
</script>

{#if toolbar}
    <div class="btn-toolbar {klass || ''}">
        <slot />
    </div>
{:else}
    <div
        {id}
        class="{vertical ? 'btn-group-vertical' : 'btn-group'} {klass || ''}"
        class:btn-group-lg={large}
        class:btn-group-sm={small}>
        <slot />
    </div>
{/if}

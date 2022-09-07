<script>
    export let klass = null;
    export let custom = null;
    export let up = null;
    export let right = null;
    export let left = null;
    export let id = null;
</script>

{#if custom}
    <div data-toggle="dropdown" {id}>
        <slot />
    </div>
{:else}
    <button {id} class="btn {klass || ''}" data-toggle="dropdown" type="button">
        <slot />
        <i class="fa ml-5"
        class:fa-angle-down={!up&&!right&&!left}
        class:fa-angle-up={up}
        class:fa-angle-right={right}
        class:fa-angle-left={left}
        />
    </button>
{/if}

<script>
    export let klass = null;
    export let disabled = null;
    export let active = null;
    export let ellipsis = null;
    export let href = null;
    export let custom = null;
    export let id = null;
</script>

<li {id} class="page-item {klass || ''}" class:disabled class:active class:ellipsis>
    {#if !ellipsis}
        {#if !custom}
            <a {href} class="page-link"><slot /></a>
        {:else}
            <slot />
        {/if}
    {/if}
</li>

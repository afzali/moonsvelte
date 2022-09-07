<script>
    export let klass = null;
    export let custom = null;
    export let active = null;
    export let href = null;
    export let id = null;
</script>

<li {id} class="nav-item {klass || ''}" class:active>
    {#if custom}
        <slot />
    {:else}
        <a {href} class="nav-link"><slot /></a>
    {/if}
</li>

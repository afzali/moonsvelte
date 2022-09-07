<script>
    export let klass = null;
    export let href = null;
    export let icon = null;
    export let active = null;
    export let id = null;
</script>
<a {id} {href} class="sidebar-link {icon ? 'sidebar-link-with-icon' : ''}  {klass || ''}"
    class:active={active}>
    {#if icon}
    <span class="sidebar-icon">
        <i class="fa fa-{icon || ''}"></i>
    </span>
    <slot />
    {:else}
        <slot />
    {/if}
</a>
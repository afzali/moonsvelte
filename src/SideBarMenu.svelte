<script>
    export let klass = null;
    export let id = null;
</script>
<div {id} class="sidebar-menu {klass || ''}">
    <slot />
</div>
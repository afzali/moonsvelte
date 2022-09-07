<script>
    export let klass = null;
    export let id = null;
</script>
<h5 class="sidebar-title {klass || ''}" {id}>
    <slot />
</h5>
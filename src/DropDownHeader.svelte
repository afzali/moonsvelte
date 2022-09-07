<script>
    export let klass = null;
    export let id = null;
</script>

<h6 {id} class="dropdown-header {klass || ''}">
    <slot />
</h6>

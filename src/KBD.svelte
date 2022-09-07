<script>
    export let klass = null;
    export let id = null;
</script>
<kbd {id} class="{klass || ''}">
    <slot />
</kbd>

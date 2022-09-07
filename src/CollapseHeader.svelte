<script>
    export let klass = null;
    export let noicon = null;
    export let id = null;
</script>

<summary {id} class="collapse-header {klass || ''}" class:without-arrow={noicon}>
    <slot />
</summary>

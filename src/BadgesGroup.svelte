<script>
    export let klass = null;
    export let id = null;
</script>

<span {id} class="badge-group {klass || ''}" role="group">
    <slot />
</span>

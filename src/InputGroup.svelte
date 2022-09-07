<script>
    export let klass = null;
    export let large = null;
    export let small = null;
    export let id = null;
</script>

<div
    {id}
    class="input-group {klass || ''}"
    class:input-group-lg={large}
    class:input-group-sm={small}>
    <slot />
</div>

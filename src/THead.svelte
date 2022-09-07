<script>
    export let klass = null;
    export let id = null;
</script>

<thead {id} class={klass || null}>
    <slot />
</thead>

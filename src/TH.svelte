<script>
    export let klass = null;
    export let id = null;
</script>

<th {id} class={klass || null}>
    <slot />
</th>

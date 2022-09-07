<script>
    export let klass = null;
    export let id = null;
</script>

<td {id} class={klass || null}>
    <slot />
</td>

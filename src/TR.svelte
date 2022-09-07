<script>
    export let klass = null;
    export let primary = null;
    export let success = null;
    export let danger = null;
    export let secondary = null;
    export let id = null;
</script>

<tr
    {id}
    class={klass || null}
    class:table-primary={primary}
    class:table-success={success}
    class:table-danger={danger}
    class:table-secondary={secondary}>
    <slot />
</tr>

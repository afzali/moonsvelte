<script>
    export let klass = null;
    export let id = null;
</script>

<tbody {id} class="{klass || null}">
    <slot />
</tbody>
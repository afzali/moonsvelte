<script>
    export let klass = null;
    export let name = null;
    export let required = null;
    export let id = null;
</script>

<label {id} for={name || null} class={klass || ''} class:required><slot /></label>

<script>
    export let klass = null;
    export let invalid = null;
    export let id = null;
</script>

<div {id} class="form-group {klass || ''}" class:is-invalid={invalid}>
    <slot />
</div>

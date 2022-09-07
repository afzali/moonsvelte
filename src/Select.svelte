<script>
    export let klass = null;
    export let id = null;
    export let multiple = null;
    export let label = null;
    export let size = 3;
    export let large = null;
    export let small = null;
    export let invalid = null;
    export let alternative = null;
</script>

{#if label}<label for={id || ''}>{label}</label>{/if}
<select
    multiple={multiple ? 'multiple' : null}
    size={multiple ? size : null}
    class="form-control {klass || ''}"
    {id}
    class:form-control-sm={small}
    class:form-control-lg={large}
    class:is-invalid={invalid}
    class:alt-dm={alternative}>
    <slot />
</select>

<script>
    export let klass = null;
    export let placeholder = null;
    export let type = "text";
    export let value = null;
    export let readonly = null;
    export let large = null;
    export let small = null;
    export let disabled = null;
    export let invalid = null;
    export let alternative = null;
    export let required = null;
    export let id = null;
</script>

<input
    {type}
    class="form-control {klass || ''}"
    {placeholder}
    {value}
    {disabled}
    {id}
    on:click
    {readonly}
    {required}
    class:form-control-lg={large}
    class:form-control-sm={small}
    class:is-invalid={invalid}
    class:alt-dm={alternative} />

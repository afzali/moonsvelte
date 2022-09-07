<script>
    export let klass = null;
    export let value = null;
    export let placeholder = null;
    export let readonly = null;
    export let large = null;
    export let small = null;
    export let disabled = null;
    export let invalid = null;
    export let alternative = null;
    export let id = null;
</script>

<textarea
    {id}
    class="form-control {klass || ''}"
    {placeholder}
    {disabled}
    {readonly}
    class:form-control-lg={large}
    class:form-control-sm={small}
    class:is-invalid={invalid}
    class:alt-dm={alternative} {value}/>

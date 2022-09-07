<script>
    export let klass = null;
    export let action = null;
    export let method = null;
    export let inline = null;
    export let id = null;
</script>

<form {id} {action} {method} class="{klass || null}" class:form-inline={inline}>
    <slot/>
</form>
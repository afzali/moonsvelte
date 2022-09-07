<script>
    export let klass = null;
    export let id = null;
</script>

<div {id} class="form-text {klass || ''}">
    <slot />
</div>

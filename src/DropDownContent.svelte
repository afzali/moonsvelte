<script>
    export let klass = null;
    export let id = null;
</script>

<div {id} class="dropdown-content {klass || ''}">
    <slot />
</div>
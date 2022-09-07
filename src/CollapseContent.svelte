<script>
    export let klass = null;
    export let id = null;
</script>

<div {id} class="collapse-content {klass || ''}">
    <slot />
</div>

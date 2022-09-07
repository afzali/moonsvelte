<script>
    export let klass = null;
    export let id = null;
</script>
<div {id} class="card {klass || ''}">
    <slot />
</div>
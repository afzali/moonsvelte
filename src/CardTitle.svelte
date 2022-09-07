<script>
    export let klass = null;
    export let id = null;
</script>
<h2 {id} class="card-title {klass || ''}">
    <slot />
</h2>
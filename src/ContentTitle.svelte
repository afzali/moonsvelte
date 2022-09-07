<script>
    export let klass = null;
    export let id = null;
</script>
<h1 {id} class="content-title {klass || ''}">
    <slot />
</h1>

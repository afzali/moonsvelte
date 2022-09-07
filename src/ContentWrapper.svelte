<script>
    export let klass = null;
    export let id = null;
</script>
<div {id} class="content-wrapper {klass || ''}">
    <slot />
</div>
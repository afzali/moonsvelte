<script>
    export let klass = null;
    export let id = null;
</script>

<div {id} class="progress {klass || ''}">
    <slot />
</div>

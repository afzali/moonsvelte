<script>
    export let klass = null;
    export let id = null;
</script>

<span {id} class="navbar-text {klass || ''}">
    <slot />
</span>

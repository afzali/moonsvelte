<script>
    export let klass = null;
    export let href = null;
    export let id = null;
</script>

<a {id} {href} class="navbar-brand {klass || ''}">
    <slot />
</a>

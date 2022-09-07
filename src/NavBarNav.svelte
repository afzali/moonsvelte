<script>
    export let klass = null;
    export let id = null;
</script>

<ul {id} class="navbar-nav {klass || ''}">
    <slot/>
</ul>
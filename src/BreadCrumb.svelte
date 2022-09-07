<script>
    export let klass = null;
    export let center = null;
    export let right = null;
    export let id = null;
</script>

<nav>
    <ul
        {id}
        class="breadcrumb {klass || ''}"
        class:text-center={center}
        class:text-right={right}>
        <slot />
    </ul>
</nav>

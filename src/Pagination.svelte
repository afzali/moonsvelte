<script>
    export let klass = null;
    export let center = null;
    export let right = null;
    export let rounded = null;
    export let large = null;
    export let small = null;
    export let id = null;
</script>

<nav>
    <ul
        {id}
        class="pagination {klass || ''}"
        class:text-center={center}
        class:text-right={right}
        class:pagination-rounded={rounded}
        class:pagination-lg={large}
        class:pagination-sm={small}>
        <slot />
    </ul>
</nav>

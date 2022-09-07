<script>
    export let klass = null;
    export let center = null;
    export let right = null;
    export let id = null;
</script>

<div {id} class="dropdown-menu {klass || ''}"
class:dropdown-menu-center={center}
class:dropdown-menu-right={right}>
    <slot/>
</div>  
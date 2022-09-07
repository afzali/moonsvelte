<script>
    export let klass = null;
    export let active = null;
    export let id = null;
</script>

<li {id} class="breadcrumb-item {klass || ''}" class:active>
    <slot />
</li>

<script>
    export let klass = null;
    export let space = null;
    export let spacesmall = null;
    export let spacemedium = null;
    export let spacelarge = null;
    export let spacexlarge = null;
    export let id = null;
</script>

<div
    {id}
    class="row {klass || ''}"
    class:row-eq-spacing={space}
    class:row-eq-spacing-sm={spacesmall}
    class:row-eq-spacing-md={spacemedium}
    class:row-eq-spacing-lg={spacelarge}
    class:row-eq-spacing-xl={spacexlarge}>
    <slot />
</div>

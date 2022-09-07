<script>
    export let danger = null;
    export let primary = null;
    export let link = null;
    export let success = null;
    export let secondary = null;
    export let large = null;
    export let small = null;
    export let block = null;
    export let disabled = null;
    export let active = null;
    export let alternative = null;
    export let square = null;
    export let circle = null;
    export let rounded = null;
    export let type = "button";
    export let klass = null;
    export let tooltip = null;
    export let tooltipposition = "top"; //right | botton | left
    export let tooltipbreakpoint = null; //md | lg | xlg | sm
    export let id = null;
</script>

<button
    {id}
    class="btn {klass || ''}"
    class:btn-danger={danger}
    class:btn-primary={primary}
    class:btn-link={link}
    class:btn-success={success}
    class:btn-secondary={secondary}
    class:btn-lg={large}
    class:btn-sm={small}
    class:btn-block={block}
    class:alt-dm={alternative}
    class:btn-square={square}
    class:rounded-circle={circle}
    class:btn-rounded={rounded}
    class:active
    {disabled}
    data-toggle="{tooltip ? 'tooltip' : null}" 
    data-title="{tooltip}"
    data-placement="{tooltipposition}"
    data-target-breakpoint="{tooltipbreakpoint}"
    on:click
    {type}>
    <slot />
</button>

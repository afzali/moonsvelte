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
    export let href = null;
    export let klass = null;
    export let hyperlink = null;
    export let underline = null;
    export let alertLink = null;
    export let tooltip = null;
    export let tooltipposition = "top"; //right | botton | left
    export let tooltipbreakpoint = null; //md | lg | xlg | sm
    export let pagelink = null;
    export let id = null;
</script>

<a
    {id}
    class={klass || ''}
    class:btn={!hyperlink}
    class:hyperlink
    class:hyperlink-underline={underline}
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
    class:alert-link={alertLink}
    class:page-link={pagelink}
    class:active
    {disabled}
    {href}
    data-toggle={tooltip ? 'tooltip' : null}
    data-title={tooltip}
    data-placement={tooltipposition}
    data-target-breakpoint={tooltipbreakpoint}
    on:click
    role={hyperlink ? 'link' : 'button'}>
    <slot />
</a>

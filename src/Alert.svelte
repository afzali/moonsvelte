<script>
    export let klass = null;
    export let primary = null;
    export let success = null;
    export let secondary = null;
    export let danger = null;
    export let filled = null; //light/dark/empty
    export let close = null;
    export let id = null;

    function onClose(event){
        event.currentTarget.parentNode.classList.add('dispose')
    }
</script>

<div
    {id}
    class="alert {klass || ''} {filled == 'light' ? 'filled-lm' : filled == 'dark' ? 'filled-dm' : filled ? 'filled' : ''}"
    role="alert"
    class:alert-primary={primary}
    class:alert-success={success}
    class:alert-secondary={secondary}
    class:alert-danger={danger}>
    {#if close}
    <button class="close" data-dismiss="alert" on:click={onClose} type="button" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
    {/if}
    <slot class="alert-heading" name="heading" />
    <slot />
</div>

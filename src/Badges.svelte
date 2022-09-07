<script>
    export let klass = null;
    export let link = null;
    export let pill = null;
    export let href = null;
    export let primary = null;
    export let success = null;
    export let secondary = null;
    export let danger = null;
    export let id = null;
</script>

{#if link}
    <a
        {id}
        {href}
        class="badge {klass || ''}"
        class:badge-pill={pill}
        class:badge-primary={primary}
        class:badge-success={success}
        class:badge-secondary={secondary}
        class:badge-danger={danger}><slot /></a>
{:else}
    <span
        class="badge {klass || ''}"
        class:badge-pill={pill}
        class:badge-primary={primary}
        class:badge-success={success}
        class:badge-secondary={secondary}
        class:badge-danger={danger}><slot /></span>
{/if}

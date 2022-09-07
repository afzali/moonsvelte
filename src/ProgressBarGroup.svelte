<script>
    export let klass = null;
    export let id = null;
</script>

<div {id} class="progress-group {klass || ''}">
    <slot/>
    {#if $$slots.label}
        <span class="progress-group-label">
            <slot name="label" />
        </span>
    {/if}
</div>

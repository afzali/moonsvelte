<script>
    export let klass = null;
    export let percent = 0;
    export let success = null;
    export let secondary = null;
    export let danger = null;
    export let showpercent = null;
    export let animated = null;
    export let id = null;
</script>

<div
    {id}
    class="progress-bar {klass || ''}"
    style="width: {percent}%"
    class:bg-success={success}
    class:bg-secondary={secondary}
    class:bg-danger={danger}
    class:progress-bar-animated={animated}>
    {#if showpercent}{percent}%{/if}
</div>

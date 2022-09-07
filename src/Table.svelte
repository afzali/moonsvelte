<script>
    export let klass = null;
    export let nopadding = null;
    export let striped = null;
    export let hover = null;
    export let border = null;
    export let innerborder = null;
    export let outerborder = null;
    export let responsive = null;
    export let id = null;
</script>

{#if responsive}
    <div class="table-responsive">
        <table
            {id}
            class="table {klass || ''}"
            class:table-no-outer-padding={nopadding}
            class:table-striped={striped}
            class:table-bordered={border}
            class:table-outer-bordered={outerborder}
            class:table-inner-bordered={innerborder}
            class:table-hover={hover}>
            <slot />
        </table>
    </div>
{:else}
    <table
        {id}
        class="table {klass || ''}"
        class:table-no-outer-padding={nopadding}
        class:table-striped={striped}
        class:table-bordered={border}
        class:table-outer-bordered={outerborder}
        class:table-inner-bordered={innerborder}
        class:table-hover={hover}>
        <slot />
    </table>
{/if}

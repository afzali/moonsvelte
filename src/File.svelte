<script>
    export let klass = null;
    export let id = "swt-" + Math.round(Math.random() * 100);
    export let multiple = null;
    export let disabled = null;
    export let accept = null;
    export let value = "No file chosen";
    export let invalid = null;
    export let error = null;

    function onChange(event) {
        if (event.target.files.length === 1) {
            value = event.target.files[0].name;
        } else if (event.target.files.length > 1) {
            value = event.target.files.length + " files";
        } else {
            value = "No file chosen";
        }
    }
</script>

{#if error}
    <div class="form-group is-invalid">
        <div class="invalid-feedback">{error}</div>
        <div class="custom-file {klass || ''}">
            <input
                on:change={onChange}
                type="file"
                {id}
                {multiple}
                {disabled}
                {accept}
                class:is-invalid={invalid} />
            <label for={id}><slot /></label>
            {#if value}
                <div class="file-names">
                    {@html value}
                </div>
            {/if}
        </div>
    </div>
{:else}
    <div class="custom-file {klass}">
        <input
            on:change={onChange}
            type="file"
            {id}
            {multiple}
            {disabled}
            {accept}
            class:is-invalid={invalid} />
        <label for={id}><slot /></label>
        {#if value}
            <div class="file-names">
                {@html value}
            </div>
        {/if}
    </div>
{/if}

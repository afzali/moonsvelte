<script>
    export let klass = null;
    export let id = "swt-" + Math.round(Math.random() * 100);
    export let checked = null;
    export let disabled = null;
    export let blank = null;
</script>

<div class="custom-switch {klass || ''}">
    <input type="checkbox" {id} value="" {checked} {disabled} />
    <label for={id} class:blank={blank}>
        {#if !blank}
            <slot />
        {/if}</label>
</div>

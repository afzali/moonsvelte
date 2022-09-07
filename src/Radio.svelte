<script>
    export let klass = null;
    export let id = "rad-" + Math.round(Math.random() * 100);
    export let checked = null;
    export let disabled = null;
    export let blank = null;
    export let name = "rad-grp-" + Math.round(Math.random() * 100);
    export let value = null;
</script>

<div class="custom-radio {klass || ''}">
    <input type="radio" {name} {id} {value} {checked} {disabled} />
    <label for={id} class:blank={blank}>
        {#if !blank}
            <slot />
        {/if}
    </label>
</div>

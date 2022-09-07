<script>
    export let klass = null;
    export let open = null;
    export let id = null;
</script>

<details {id} class="collapse-panel {klass || ''}" {open}>
    <slot />
</details>

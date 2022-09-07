<script>
    export let klass = null;
    export let type = null;
    export let id = null;
</script>
<div {id} class="{type ? 'col-'+type : 'col'} {klass | ''}">
    <slot />
</div>
<!-- <i class="fa fa-{Object.keys($$restProps)[0]} {$$restProps.klass}"></i> -->
<script>
	export let name = null;
	export let klass = null;
	export let id = null;
</script>
<i {id} class="fa {name ? 'fa-'+name : ''} {klass || ''}"></i>
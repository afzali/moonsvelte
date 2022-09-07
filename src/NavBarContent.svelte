<script>
	export let klass = null;
	export let id = null;
</script>
<div {id} class="navbar-content {klass || ''}">
	<slot />
</div>
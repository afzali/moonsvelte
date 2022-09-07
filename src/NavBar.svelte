<script>
	export let bottom = null;
	export let klass = null;
	export let id = null;
</script>

<nav {id} class="navbar {klass || ''}" class:navbar-fixed-bottom={bottom}>
	<slot />
</nav>

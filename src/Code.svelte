<script>
	export let klass = null;
	export let id = null;
</script>
<code {id} class="code {klass || ''}">
	<slot/>
</code>
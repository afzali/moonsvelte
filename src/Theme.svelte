<script>
	import { onMount } from 'svelte';
	
	export let type = "light";
	
	function loadTheme(){
		//type = window.localStorage.getItem("theme") || "light"
	}
	
	function saveTheme(){
		//window.localStorage.setItem("theme", type);
	}
	
		$: {
			if(type == "dark") {
				document.body.classList.add("dark-mode");
			}else if(type == "auto"){
				if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
					document.body.classList.add("dark-mode");
				}else{
					document.body.classList.remove("dark-mode");
				}
			}else{
				document.body.classList.remove("dark-mode");
			}
		}
	onMount(() => {
		//loadTheme();
		document.body.classList.add("with-custom-webkit-scrollbars");
		document.body.classList.add("with-custom-css-scrollbars");
	});
</script>

<svelte:head>
	<link href="halfmoon-variables.css" rel="stylesheet" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0=" crossorigin="anonymous" />
</svelte:head>

<script>
    export let klass = null;
    export let small = null;
    export let medium = null;
    export let large = null;
    export let xlarge = null;
    export let fluid = null;
    export let id = null;
</script>
<div {id} class="container {klass || ''}"
    class:container-sm={small} 
    class:container-md={medium} 
    class:container-lg={large}  
    class:container-xl={xlarge} 
    class:container-fluid={fluid}
>
<slot />
</div>
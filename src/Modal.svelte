<script>
    //rahe js ham dare baraye baz shodan
    export let klass = null;
    export let name = "modal";
    export let full = null;
    
    function onBodyKeyDown(event) {
        let hash = window.location.hash.substring(1);
        if (event.keyCode == 27 && hash) {
            console.log("esc", hash && hash !="/");
            let elem = document.getElementById(
                window.location.hash.substring(1)
            );
            if (elem.classList.contains("modal")) {
                if (!elem.getAttribute("data-esc-dismissal-disabled")) {
                    window.location.hash = "#";
                    event.preventDefault();
                }
            }
        }
    }
</script>

<svelte:body on:keydown={onBodyKeyDown} />

<div  class="modal {klass || ''}" id={name} class:modal-full={full}>
    <div class="modal-dialog">
        <slot />
    </div>
</div>

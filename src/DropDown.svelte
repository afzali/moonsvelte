<script>
    export let klass = null;
    export let arrow = null;
    export let up = null;
    export let right = null;
    export let left = null;
    export let hover = null;
    export let id = null;
    let active = null;
    // bug darim kolan kolesh baresi shavad

    function onClick(event) {
        // console.log(active, event.target.closest("[data-toggle='dropdown']"), event.currentTarget);
        let btn = event.target.closest("[data-toggle='dropdown']");
        if (active && btn) {
            removeDropDown();
        } else if (!active && btn) {
            removeDropDown();
            active = true;
            event.target
                .closest("[data-toggle='dropdown']")
                .classList.add("active");
        }
    }
    function onBodyClick(event) {
        //console.log("body click", active);
        if (active) {
            removeDropDown();
        }
    }
    function onBodyKeyDown(event) {
        if (active && event.keyCode == 27) {
            removeDropDown();
        }
    }

    function removeDropDown() {
        active = false;
        var elems = document.querySelectorAll(
            "[data-toggle='dropdown'].active"
        );
        for (var i = 0; i < elems.length; i++) {
            elems[i].classList.remove("active");
            elems[i].closest(".dropdown").classList.remove("show");
        }
    }

    // function onMoseOver(event) {
    //     if (!hover) return;
    //     onBodyClick(event);
    // }

</script>

<svelte:body on:click={onBodyClick} on:keydown={onBodyKeyDown} />
<div
    {id}
    class="dropdown {klass || ''}"
    class:with-arrow={arrow}
    class:dropup={up}
    class:dropright={right}
    class:dropleft={left}
    class:toggle-on-hover={hover}
    on:click|stopPropagation={onClick}
    class:show={active}>
    <slot />
</div>

<script>
	import Toast from "./Toast";

	export let navbar = null;
	export let sidebar = null;
	export let fixBottom = null;
	export let hidesticky = null;
	export let klass = null;
	export let sideBarOverlay = null;
	export let sideBarHidden = null;
	export let sideBarFull = null;
	export let transition = null;
	export let id = null;
	let sideBarType = "default"; //full-height || overlayed-all || overlayed-sm-and-down

	if (sideBarOverlay) {
		sideBarType = "overlayed-all";
	} else if (sideBarFull) {
		sideBarType = "full-height";
	} else {
		sideBarType = "default";
	}

	function initAlert(alertElement, toast) {
		if (!alertElement.classList.contains("show")) {
			let timeShown = toast.timeShown;
			// Add .alert-block class if it does not exist
			if (!alertElement.classList.contains("alert-block")) {
				alertElement.classList.add("alert-block");
			}

			// Show the alert
			// The 0.25 seconds delay is for the animation
			var _t1 = setTimeout(function () {
				alertElement.classList.add("show");
			}, 250);

			// Wait some time (timeShown + 250) and fade out the alert
			let timeToFade = timeShown + 250;
			var _t2 = setTimeout(function () {
				alertElement.classList.add("fade");
			}, timeToFade);

			// Wait some more time (timeToFade + 500) and dispose the alert (by removing the .alert-block class)
			// Again, the extra delay is for the animation
			// Remove the .show and .fade classes (so the alert can be toasted again)
			let timeToDestroy = timeToFade + 500;
			var _t3 = setTimeout(function () {
				closeClick(alertElement, true);
			}, timeToDestroy);
		}
		return {
			destroy() {
				_t1 && clearTimeout(_t1);
				_t2 && clearTimeout(_t2);
				_t3 && clearTimeout(_t3);
			},
		};
	}

	function closeClick(event, isElm) {
		let target = isElm ? event : event.currentTarget.parentNode;
		target.classList.add("dispose");
		Toast.remove(target.getAttribute("data-id"));
	}
</script>

<div
	{id}
	class="page-wrapper {klass || ''}"
	class:with-navbar={navbar}
	class:with-sidebar={sidebar}
	class:with-transitions={transition}
	class:with-navbar-fixed-bottom={fixBottom}
	data-sidebar-hidden={sideBarHidden ? 'hidden' : null}
	data-sidebar-type={sideBarType}>
	{#if !hidesticky}
		<div class="sticky-alerts">
			{#each $Toast as toast (toast.id)}
				<div
					class="alert {toast.alertType} {toast.fillType}"
					use:initAlert={toast}
					data-id="{toast.id}">
					{#if toast.hasDismissButton}
						<button
							class="close"
							on:click={closeClick}
							type="button"><span>&times;</span></button>
					{/if}
					<h4 class="alert-heading">{toast.title}</h4>
					{@html toast.content}
				</div>
			{/each}
		</div>
	{/if}
	{#if sideBarOverlay}
		<div
			class="sidebar-overlay"
			on:click={(e) => {
				sideBarHidden = true;
			}} />
	{/if}
	<slot />
</div>

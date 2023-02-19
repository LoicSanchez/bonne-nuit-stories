<script>
	export let text1;
	export let text2;
	let text = text1;

	let stop = false;
	function onHover() {
		if (!stop) {
			text = text2;
		}
		stop = true;
	}
	function onLeave() {
		if (stop) {
			text = text1;
		}
		stop = false;
	}
    
</script>

<span on:mouseenter={onHover} on:mouseleave={onLeave}>
	{text}
</span>

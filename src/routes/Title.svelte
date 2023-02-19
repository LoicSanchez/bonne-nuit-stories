<script>
	let title = "It's <span>time</span> for a <span>Story</span>";
	import DualText from '$lib/DualText.svelte';

	// title="C'est <span>l'heure</span> d'une <span>Histoire</span>"

	// import { spring } from 'svelte/motion';

	// let count = 0;

	// const displayed_count = spring();
	// $: displayed_count.set(count);
	// $: offset = modulo($displayed_count, 1);

	// function modulo(n, m) {
	// 	// handle negative numbers
	// 	return ((n % m) + m) % m;
	// }
</script>

<h1>
	It's <span>time</span> for a <span><DualText text1="Story" text2="Histoire" /></span>
</h1>

<!-- <div class="counter-digits" style="transform: translate(0, {100 * offset}%)">
			<strong class="hidden" aria-hidden="true">{Math.floor($displayed_count + 1)}</strong>
			<strong>{Math.floor($displayed_count)}</strong>
		</div> -->
<style>
	h1 {
		font-weight: 700;
	}
	h1 span {
		color: var(--primary-500);
	}
</style>

<script>
	export let text;
	import { fade } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let ready = false;
	onMount(() => (ready = true));
</script>

<h1>
	{#if ready}
		{#each text.split(' ') as word, i}
			<span in:fade={{ delay: i * 50, duration: 500, easing: quintInOut }}>{word} </span>
		{/each}
	{/if}
</h1>

<style>
</style>

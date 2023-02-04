<script>
	export let data;
	import Tag from './Tag.svelte';
	import Title from './Title.svelte';
	$: ({ story } = data);
</script>

<div>
	<Title text={story.title} < />
	<p>This story is a {story.type}</p>

	{#each story.tags as tag}
		<Tag text={tag} />
	{/each}

	<div class="row">
		<div class="column left">
			{#each story.body[0].textBits as textBit}
				<p class="text-bit">{@html textBit.text}</p>
			{/each}
		</div>
		<div class="column right">
			{#each story.body[1].textBits as textBit}
				<p class="text-bit">{@html textBit.text}</p>
			{/each}
		</div>
	</div>
</div>

<!-- <pre>{JSON.stringify(story)}</pre> -->
<style>
	div {
		padding: 30px;
	}
	.text-bit:hover {
		background-color: var(--grey-700);
	}
	.text-bit {
		padding: 5px;
		padding-left: 8px;
		border-radius: 5px;
	}
	.row {
		display: flex;
	}
	.column {
		flex: 50%;
		padding: 10px;
	}
</style>

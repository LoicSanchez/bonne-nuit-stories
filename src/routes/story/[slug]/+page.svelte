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

	{#each story.body[0].textBits as textBit, i}
	<div class="row">
		<div class="column left">
				<p class="text-bit">{@html story.body[0].textBits[i].text}</p>

		</div>
		<div class="column right">
				<p class="text-bit">{@html story.body[1].textBits[i].text}</p>
			</div>
		</div>
		{/each}
</div>

<!-- <pre>{JSON.stringify(story)}</pre> -->
<style>
	div {
		padding: 5px;
	}
	.row:hover {
		background-color: var(--grey-700);
	}
	
	.row {
		display: flex;
		padding: 5px;
		padding-left: 8px;
		border-radius: 5px;
	}
	.column {
		flex: 50%;
		padding: 10px;
	}
	.column.left {
		text-align:right;
		padding-right:40px;
	}
	.column.right{
		padding-left:40px;
	}
</style>

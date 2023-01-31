<script>
	import main from '$assets/images/main.svg';
	export let data;
	$: ({ stories } = data);
</script>

<div class="container page">
	<div class="info">
		<h1>
			It's <span>time</span> for a <span>Story</span>
		</h1>
		<p>Shhtt... Bonne nuit, it's time to go to bed.</p>
		<p>Find the story you want for tonight based on your mood.</p>
		<ul>
			{#each stories as story}
				<li>
					<p>{story.title}</p>
				</li>
			{/each}
		</ul>
	</div>
	<img src={main} alt="Camp fire under the moonlight" class="img main-img" />
</div>

<style>
	.page {
		min-height: calc(100vh - var(--nav-height));
		display: grid;
		align-items: center;
		margin-top: -3rem;
	}
	h1 {
		font-weight: 700;
	}
	h1 span {
		color: var(--primary-500);
	}
	p {
		color: var(--text-color);
	}
	.main-img {
		display: none;
	}
	@media (min-width: 992px) {
		.page {
			grid-template-columns: 1fr 1fr;
			column-gap: 3rem;
		}
		.main-img {
			display: block;
		}
	}
</style>

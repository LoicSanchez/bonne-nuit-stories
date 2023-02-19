<script>
	import main from '$assets/images/main.svg';
	import Title from './Title.svelte';
	import DualText from '$lib/DualText.svelte';
	export let data;
	$: ({ stories } = data);
</script>

<div class="container page">
	<div class="info">
		<Title />

		<p><DualText text1="Shhtt... Bonne nuit, it's time to go to bed." text2="Chuuut... Bonne nuit, il est l'heure d'aller au lit."/></p>
		<p>Find the story you want for tonight based on your mood.</p>
	</div>
	<img src={main} alt="Camp fire under the moonlight" class="img main-img" />
	<div>
		<ul>
			{#each stories as story}
				<li>
					<p class="story"><a href="/story/{story.id}">{story.title}</a></p>
				</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.page {
		min-height: calc(100vh - var(--nav-height));
		display: grid;
		align-items: center;
		margin-top: -3rem;
	}

	p {
		color: var(--text-color);
	}
	p a {
		color: var(--text-color-200);
	}
	.story {
		text-transform: capitalize;
	}
	.main-img {
		display: none;
	}
	@media (min-width: 992px) {
		.page {
			grid-template-columns: 1fr 1fr;
			/* column-gap: 3rem; */
		}
		.main-img {
			display: block;
		}
	}
</style>

<script>
	import img from '$assets/images/snot-found.svg';
	import './styles.css';
</script>

<div class="full-page">
	<img src={img} alt="Error, page not found" />
	<h3>Ohhh! Page not found</h3>
	<p>The page doesn't exist</p>
	<a href="/">back home</a>
</div>

<style>
	div {
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}
	img {
		max-width: 600px;
		display: block;
		margin-bottom: 2rem;
	}
	h3 {
		margin-bottom: 0.5rem;
	}
	p {
		margin-top: 0;
		margin-bottom: 0.5rem;
		color: var(--grey-500);
	}
	a {
		color: var(--primary-500);
		text-decoration: underline;
		text-transform: capitalize;
	}
</style>

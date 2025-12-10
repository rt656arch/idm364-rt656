<script>
	import HomeProductCard from '$lib/components/HomeProductCard.svelte';
	import Button from '$lib/components/Button.svelte';

	let { data } = $props();

	console.log('FEATURED:', data.featured);
</script>

<section class="hero">
	<div class="hero-content">
		<h1>Jewelry That Shines With You</h1>
		<p>Elegant designs crafted with brilliance — discover your perfect piece.</p>

		<Button href="/products">Shop All Products</Button>
	</div>
</section>

<section class="featured">
	<div class="featured-header">
		<h2>NEW COLLECTION</h2>
		<p class="subtitle">Swarovski</p>
	</div>

	<div class="featured-grid">
		{#each data.featured as product, i}
			<HomeProductCard {product} index={i} />
		{/each}
	</div>

	<Button href="/products" variant="outline">ALL COLLECTION</Button>
</section>

<style>
	/* --- HERO --- */
	.hero {
		width: 100%;
		padding: 6rem 1.5rem;
		background: #f7f7f7;
		display: flex;
		justify-content: center;
		text-align: center;
	}

	.hero-content {
		max-width: 600px;
	}

	.hero h1 {
		font-size: 3rem;
		margin: 0 0 1rem;
		font-weight: 700;
	}

	.hero p {
		font-size: 1.2rem;
		opacity: 0.7;
		margin-bottom: 2rem;
	}

	/* --- FEATURED SECTION --- */
	.featured {
		padding: 4rem 2rem;
		max-width: 1400px;
		margin: auto;
		background: white;
	}

	.featured-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.featured-header h2 {
		font-size: 4rem;
		font-weight: 400;
		letter-spacing: 0.1em;
		margin: 0;
		text-transform: uppercase;
	}

	.subtitle {
		font-size: 1.2rem;
		margin-top: 0.5rem;
		opacity: 0.8;
	}

	.featured-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
		margin-bottom: 3rem;
	}

	/* --- RESPONSIVE --- */
	@media (max-width: 1024px) {
		.featured-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 768px) {
		.featured-header h2 {
			font-size: 2.5rem;
		}

		.featured-grid {
			grid-template-columns: 1fr;
		}
	}
</style>

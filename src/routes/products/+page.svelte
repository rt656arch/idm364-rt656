<script>
	import ProductCard from '$lib/components/ProductCard.svelte';

	let { data } = $props();
</script>

<div class="products-page">
	<header class="page-header">
		<h1>All COLLECTION</h1>
		<p>Discover our complete collection of bracelets</p>
	</header>

	<div class="products-grid">
		{#each data.products as product, i}
			<ProductCard {product} index={i} />
		{/each}
	</div>
</div>

<style>
	.products-page {
		max-width: 1400px;
		margin: 0 auto;
		padding: 2rem;
	}

	.page-header {
		text-align: center;
		margin-bottom: 3rem;
		padding: 6rem 1.5rem;
	}

	.page-header h1 {
		font-size: 3rem;
		font-weight: 600;
		margin: 0 0 0.5rem;
	}

	.page-header p {
		font-size: 1.2rem;
		opacity: 0.7;
	}

	.products-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1.5rem;
	}

	@media (max-width: 768px) {
		.page-header h1 {
			font-size: 2rem;
		}

		.products-grid {
			grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
			gap: 1.5rem;
		}
	}
</style>

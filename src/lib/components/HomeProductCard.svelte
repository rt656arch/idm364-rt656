<script>
	const { product, index } = $props();
</script>

<a class="product-card" href={`/products/${product.id}`}>
	<img src={product.images?.[1]} alt={product.name} />

	<div class="product-info">
		<span class="product-number">0{index + 1}</span>
		<h3 class="product-name">{product.name}</h3>
		<p class="product-price">${product.price}</p>
	</div>
</a>

<style>
	.product-card {
		display: flex;
		flex-direction: column;
		position: relative;
		text-decoration: none;
		color: black;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		background: white;
		border: 1px solid #e5e5e5;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
		border-radius: 8px;
	}

	.product-card:hover {
		transform: scale(1.02);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
	}

	.product-card img {
		width: 100%;
		border-radius: 8px 8px 0 0;
	}

	.product-info {
		display: flex;
		gap: 0.5rem;
		padding: 1rem;
		border-top: 1px solid #f0f0f0;
	}

	.product-number {
		font-size: 1rem;
		font-weight: 600;
		opacity: 0.5;
	}

	.product-name {
		font-size: 1rem;
		margin: 0;
		flex: 1;
		font-weight: 500;
	}

	.product-price {
		font-size: 1rem;
		margin: 0;
		font-weight: 600;
	}
</style>

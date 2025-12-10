<script>
	const { product, index } = $props();
</script>

<a class="product-card" href={`/products/${product.id}`}>
	<img src={product.images?.[1]} alt={product.name} />

	<div class="product-info">
		<div class="product-text">
			<h3 class="product-name">{product.name}</h3>
			<p class="product-subname">{product.subname}</p>
		</div>
		<p class="product-price">${product.price}</p>
	</div>
</a>

<style>
	.product-card {
		display: flex;
		flex-direction: column;
		text-decoration: none;
		color: black;
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
		background: white;
		border: 1px solid #e5e5e5;
		border-radius: 4px;
	}

	.product-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
	}

	.product-card img {
		width: 100%;
		border-radius: 4px 4px 0 0;
	}

	.product-info {
		display: flex;
		align-items: flex-start;
		padding: 1rem;
		gap: 0.5rem;
		border-top: 1px solid #f0f0f0;
	}

	.product-text {
		flex: 1;
		min-width: 0;
	}

	.product-name,
	.product-price {
		font-size: 1rem;
		margin: 0;
		font-weight: 600;
	}

	.product-subname {
		font-size: 0.95rem;
		color: #666;
		font-style: italic;
		margin: 4px 0 0;
	}
</style>

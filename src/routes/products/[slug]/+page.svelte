<script>
	import AddToCartButton from '$lib/components/AddToCartButton.svelte';

	let { data } = $props();
	let selectedImage = $state(0);
</script>

<div class="product-detail">
	<a href="/products" class="back-link"> ← Back to Products</a>

	<div class="product-container">
		<!-- image gallery -->
		<div class="product-images">
			<div class="main-image">
				<img src={data.product.images?.[selectedImage]} alt={data.product.name} />
			</div>

			{#if data.product.images && data.product.images.length > 1}
				<div class="image-thumbnails">
					{#each data.product.images as image, i}
						<button
							class="thumbnail"
							class:active={selectedImage === i}
							onclick={() => (selectedImage = i)}
						>
							<img src={image} alt={`${data.product.name} view ${i + 1}`} />
						</button>
					{/each}
				</div>
			{/if}
		</div>

		<!-- product info -->
		<div class="product-info">
			<h1>{data.product.name}</h1>

			{#if data.product.subname}
				<p class="subname">{data.product.subname}</p>
			{/if}

			<p class="price">${data.product.price}</p>

			{#if data.product.description}
				<div class="description">
					<h3>Description</h3>
					<p>{data.product.description}</p>
				</div>
			{/if}

			<div class="actions">
				<AddToCartButton product={data.product} />
			</div>
		</div>
	</div>
</div>

<style>
	.product-detail {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	.back-link {
		display: inline-block;
		color: #666;
		font-size: 1.1rem;
		text-decoration: none;
		margin-bottom: 2rem;
		transition: color 0.2s;
	}

	.back-link:hover {
		color: #000;
	}

	.product-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: start;
	}

	/* Image Gallery */
	.product-images {
		position: sticky;
		top: 2rem;
	}

	.main-image {
		width: 100%;
		aspect-ratio: 1 / 1;
		background: #f9f9f9;
		border-radius: 12px;
		overflow: hidden;
		border: 1px solid #e5e5e5;
		margin-bottom: 1rem;
	}

	.main-image img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.image-thumbnails {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
		gap: 0.5rem;
	}

	.thumbnail {
		aspect-ratio: 1 / 1;
		border: 2px solid transparent;
		border-radius: 8px;
		overflow: hidden;
		cursor: pointer;
		background: #f9f9f9;
		padding: 0;
		transition: border-color 0.2s;
	}

	.thumbnail:hover {
		border-color: #ccc;
	}

	.thumbnail.active {
		border-color: #000;
	}

	.thumbnail img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	/* Product Info */
	.product-info h1 {
		font-size: 2.5rem;
		font-weight: 600;
		margin: 0 0 0.5rem;
	}

	.subname {
		font-size: 1.2rem;
		color: #666;
		font-style: italic;
		margin: 0 0 1.5rem;
	}

	.price {
		font-size: 2rem;
		font-weight: 600;
		margin: 0 0 1rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid #e5e5e5;
	}

	.description {
		margin-bottom: 2rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid #e5e5e5;
	}

	.description h3 {
		font-size: 1.2rem;
		font-weight: 600;
		margin: 0 0 1rem;
	}

	.description p {
		line-height: 1.6;
		color: #666;
		margin: 0;
		white-space: pre-wrap;
	}

	.actions {
		margin-top: 2rem;
		padding-top: 2rem;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.product-container {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.product-images {
			position: static;
		}

		.product-info h1 {
			font-size: 2rem;
		}

		.subname {
			font-size: 1rem;
		}

		.price {
			font-size: 1.5rem;
		}
	}
</style>

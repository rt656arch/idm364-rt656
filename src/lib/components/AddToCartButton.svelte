<script>
	import { cart } from '$lib/stores';

	const { product } = $props();

	function handleAddToCart() {
		cart.addItem(product);
	}
</script>

<button class="add-to-cart-button" onclick={handleAddToCart}> Add to Cart </button>

<style>
	.add-to-cart-button {
		width: 100%;
		background: black;
		color: white;
		padding: 1rem 2rem;
		border: none;
		border-radius: 50px;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.add-to-cart-button:hover {
		opacity: 0.85;
	}
</style>

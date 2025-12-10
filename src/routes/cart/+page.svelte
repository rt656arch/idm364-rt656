<script>
	import { cart } from '$lib/stores';
	import Button from '$lib/components/Button.svelte';
	import CartItem from '$lib/components/CartItem.svelte';

	let cartItems = $derived($cart);
	let totalQuantity = $derived(cartItems.reduce((sum, item) => sum + item.quantity, 0));
	let total = $derived(cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0));

	$effect(() => {
		console.log('Cart items:', cartItems);
		console.log('Total:', total);
	});
</script>

<div class="cart-page">
	<h1>Shopping Cart</h1>

	{#if cartItems.length === 0}
		<div class="empty-cart">
			<p>Your cart is empty</p>
			<Button href="/products">Continue Shopping</Button>
		</div>
	{:else}
		<div class="cart-container">
			<div class="cart-items">
				{#each cartItems as item (item.id)}
					<CartItem {item} />
				{/each}
			</div>

			<div class="cart-summary">
				<h2>Order Summary</h2>

				<div class="summary-row">
					<span>Subtotal ({totalQuantity} {totalQuantity === 1 ? 'item' : 'items'})</span>
					<span>${total.toFixed(2)}</span>
				</div>

				<div class="summary-row total">
					<span>Total</span>
					<span>${total.toFixed(2)}</span>
				</div>

				<button class="clear-cart" onclick={() => cart.clear()}> Clear Cart </button>
			</div>
		</div>
	{/if}
</div>

<style>
	.cart-page {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
	}

	.cart-page h1 {
		font-size: 2.5rem;
		margin-bottom: 2rem;
	}

	.empty-cart {
		text-align: center;
		padding: 4rem 2rem;
	}

	.empty-cart p {
		font-size: 1.2rem;
		color: #666;
		margin-bottom: 2rem;
	}

	.cart-container {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: 2rem;
	}

	.cart-items {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.cart-summary {
		background: #f9f9f9;
		padding: 2rem;
		border-radius: 8px;
		height: fit-content;
		position: sticky;
		top: 100px;
	}

	.cart-summary h2 {
		font-size: 1.5rem;
		margin: 0 0 1.5rem;
	}

	.summary-row {
		display: flex;
		justify-content: space-between;
		margin-bottom: 1rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid #e5e5e5;
	}

	.summary-row.total {
		font-size: 1.2rem;
		font-weight: 600;
		border-bottom: 2px solid #000;
		margin-bottom: 1.5rem;
	}

	.clear-cart {
		width: 100%;
		background: transparent;
		color: #666;
		padding: 0.75rem;
		border: 1px solid #e5e5e5;
		border-radius: 4px;
		cursor: pointer;
		margin-top: 1rem;
		transition: all 0.2s;
	}

	.clear-cart:hover {
		background: #f0f0f0;
		color: #000;
	}

	@media (max-width: 768px) {
		.cart-container {
			grid-template-columns: 1fr;
		}

		.cart-summary {
			position: static;
		}
	}
</style>

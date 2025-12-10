<script>
	import { cart } from '$lib/stores';

	const { item } = $props();
</script>

<div class="cart-item">
	<img src={item.images?.[1]} alt={item.name} />

	<div class="item-details">
		<h3>{item.name}</h3>
		<p class="subname">{item.subname}</p>
		<p class="price">${item.price}</p>
	</div>

	<div class="item-quantity">
		<button
			onclick={() => cart.updateQuantity(item.id, item.quantity - 1)}
			disabled={item.quantity <= 1}
		>
			−
		</button>
		<span>{item.quantity}</span>
		<button onclick={() => cart.updateQuantity(item.id, item.quantity + 1)}> + </button>
	</div>

	<div class="item-total">
		${(item.price * item.quantity).toFixed(2)}
	</div>

	<button class="remove-button" onclick={() => cart.removeItem(item.id)}> ✕ </button>
</div>

<style>
	.cart-item {
		display: grid;
		grid-template-columns: 100px 1fr auto auto auto;
		gap: 1rem;
		align-items: center;
		padding: 1rem;
		background: white;
		border: 1px solid #e5e5e5;
		border-radius: 8px;
	}

	.cart-item img {
		width: 100px;
		height: 100px;
		object-fit: contain;
		border-radius: 8px;
	}

	.item-details h3 {
		font-size: 1rem;
		margin: 0 0 4px;
	}

	.item-details .subname {
		font-size: 0.95rem;
		color: #666;
		font-style: italic;
		margin: 0 0 8px;
	}

	.item-details .price {
		font-weight: 600;
		margin: 0;
	}

	.item-quantity {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		border: 1px solid #e5e5e5;
		border-radius: 4px;
		padding: 0.25rem;
	}

	.item-quantity button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 30px;
		height: 30px;
		border: none;
		background: transparent;
		cursor: pointer;
		font-size: 1rem;
	}

	.item-quantity button:hover:not(:disabled) {
		background: #f0f0f0;
	}

	.item-quantity button:disabled {
		opacity: 0.3;
		cursor: not-allowed;
	}

	.item-quantity span {
		min-width: 30px;
		text-align: center;
		font-weight: 600;
	}

	.item-total {
		font-weight: 600;
		font-size: 1.1rem;
		min-width: 80px;
		text-align: right;
	}

	.remove-button {
		width: 30px;
		height: 30px;
		border: none;
		background: transparent;
		color: #666;
		cursor: pointer;
		font-size: 1.2rem;
		transition: color 0.2s;
	}

	.remove-button:hover {
		color: #cb1818;
	}

	@media (max-width: 768px) {
		.cart-item {
			grid-template-columns: 1fr 1fr 1fr;
			grid-template-rows: 10% 45% 45%;
			gap: 0.75rem;
		}

		.cart-item img {
			grid-row: 2;
			justify-self: center;
			/* width: 70%;
			height: 50%; */
		}
		.item-details {
			grid-row: 2;
			grid-column: 2;
		}
		.item-quantity {
			grid-row: 3;
			grid-column: 2;
			justify-content: center;
		}

		.item-total {
			grid-row: 3;
			grid-column: 3;
			justify-self: end;
		}
		.remove-button {
			grid-row: 1;
			grid-column: 3;
			justify-self: end;
		}
	}
</style>

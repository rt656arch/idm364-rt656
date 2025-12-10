<script>
	import '../app.css';
	import { cart } from '$lib/stores';

	let { children } = $props();

	let cartCount = $derived($cart.reduce((total, item) => total + item.quantity, 0));
</script>

<header class="site-header">
	<div class="header-container">
		<a href="/" class="logo">SWAROVSKI</a>

		<nav class="nav">
			<a href="/">Home</a>
			<a href="/products">Shop</a>
			<a href="/cart" class="cart-link">
				Cart
				{#if cartCount > 0}
					<span class="cart-badge">{cartCount}</span>
				{/if}
			</a>
		</nav>
	</div>
</header>

<main>
	{@render children()}
</main>

<style>
	.site-header {
		background: white;
		border-bottom: 1px solid #e5e5e5;
		position: sticky;
		top: 0;
		z-index: 100;
	}

	.header-container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 1.5rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: 700;
		text-decoration: none;
		color: black;
		letter-spacing: 0.05em;
	}

	.logo:hover {
		opacity: 0.7;
	}

	.nav {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	.nav a {
		text-decoration: none;
		color: black;
		font-weight: 500;
		transition: opacity 0.2s;
		position: relative;
	}

	.nav a:hover {
		opacity: 0.6;
	}

	.cart-link {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.cart-badge {
		background: black;
		color: white;
		border-radius: 50%;
		width: 20px;
		height: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.75rem;
		font-weight: 700;
	}

	main {
		min-height: calc(100vh - 80px);
	}

	@media (max-width: 768px) {
		.header-container {
			padding: 1rem 1.5rem;
		}

		.logo {
			font-size: 1.2rem;
		}

		.nav {
			gap: 1rem;
		}

		.nav a {
			font-size: 0.9rem;
		}

		.cart-badge {
			width: 18px;
			height: 18px;
			font-size: 0.7rem;
		}
	}
</style>

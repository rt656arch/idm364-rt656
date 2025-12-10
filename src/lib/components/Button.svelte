<script>
	const { href, children } = $props();
</script>

<a {href} class="button">
	{@render children()}
</a>

<style>
	.button {
		display: inline-block;
		text-align: center;
		text-decoration: none;
		font-size: 1rem;
		font-weight: 600;
		padding: 1rem 2rem;
		border: none;
		cursor: pointer;
		transition: all 0.3s ease;
		background: black;
		color: white;
		border-radius: 50px;
	}

	.button:hover {
		opacity: 0.85;
	}
</style>

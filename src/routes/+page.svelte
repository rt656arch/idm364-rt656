<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>


<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabase_client.js';

  let products = [];
  let loading = true;
  let error = null;

  onMount(async () => {
    const { data, error: err } = await supabase.from('idm364_ecommerce_data').select('*');
    
    if (err) {
      error = err;
      console.error('Supabase error:', err);
    } else {
      products = data;
    }

    loading = false;


  });
</script>

{#if loading}
  <p>Loading products...</p>
{:else if error}
  <p>Error loading products: {error.message}</p>
{:else}
  <div class="product-grid">
    {#each products as product}
      <div class="product-card">
        <img src={product.images[1]} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
      </div>
    {/each}
  </div>
{/if}

<style>
  .product-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; }
  .product-card { border: 1px solid #ccc; padding: 1rem; border-radius: 8px; }
  .product-card img { width: 100%; object-fit: cover; border-radius: 4px; }
</style>
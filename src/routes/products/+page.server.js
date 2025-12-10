import { supabase } from '$lib/supabase_client';

export async function load() {
	const { data, error } = await supabase.from('idm364_ecommerce_data').select('*');

	if (error) {
		console.error('Error fetching products:', error);
		return { products: [] };
	}

	return {
		products: data
	};
}

import { supabase } from '$lib/supabase_client';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const { data, error: supabaseError } = await supabase
		.from('idm364_ecommerce_data')
		.select('*')
		.eq('id', params.slug)
		.single();

	if (supabaseError || !data) {
		console.error('Error fetching product:', supabaseError);
		throw error(404, {
			message: 'Product not found'
		});
	}

	return {
		product: data
	};
}

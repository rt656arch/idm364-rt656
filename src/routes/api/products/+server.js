import { supabase } from '$lib/supabase_client';
import { json } from '@sveltejs/kit';

export async function GET() {
	const { data, error } = await supabase.from('idm364_ecommerce_data').select('*');

	if (error) {
		return {
			status: 500,
			error: new Error(`Could not load products`)
		};
	}

	return json(data);
}

// http://localhost:5173/api/products

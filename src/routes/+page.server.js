import { supabase } from '$lib/supabase_client';

export async function load() {
	const { data, error } = await supabase.from('idm364_ecommerce_data').select('*').limit(4);

	console.log('DATA:', data);
	console.log('ERROR:', error);

	if (error) {
		console.error('Supabase error:', error);
		return { featured: [] };
	}

	return {
		featured: data
	};
}

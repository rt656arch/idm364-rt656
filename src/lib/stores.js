import { writable } from 'svelte/store';

function createCart() {
	let storedCart = [];
	try {
		const stored = localStorage.getItem('cart');
		if (stored) {
			storedCart = JSON.parse(stored);
		}
	} catch (error) {
		storedCart = [];
	}

	const { subscribe, set, update } = writable(storedCart);

	subscribe((value) => {
		try {
			localStorage.setItem('cart', JSON.stringify(value));
		} catch (error) {}
	});

	return {
		subscribe,
		addItem: (product) =>
			update((items) => {
				const existingItem = items.find((item) => item.id === product.id);

				if (existingItem) {
					return items.map((item) =>
						item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
					);
				} else {
					return [...items, { ...product, quantity: 1 }];
				}
			}),
		removeItem: (productId) => update((items) => items.filter((item) => item.id !== productId)),
		updateQuantity: (productId, quantity) =>
			update((items) =>
				items.map((item) => (item.id === productId ? { ...item, quantity } : item))
			),
		clear: () => set([])
	};
}

export const cart = createCart();

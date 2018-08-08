(function() {

	'use strict';

	let app = new Vue({
		el: "#app",
		data: {
			products_array: [
				{id: 1, title: 'Chair',    price: '777'},
				{id: 2, title: 'Armchair', price: '877'},
				{id: 3, title: 'Bed',      price: '977'},
				{id: 4, title: 'Mirror',   price: '1077'},
				{id: 5, title: 'Table',    price: '1177'},
				{id: 6, title: 'Vase',     price: '77'},
				{id: 7, title: 'Lamp',     price: '1377'}
			],
			cart: [],
		},

		computed: {
			summa: function() {
				let total_price = 0;
				for (let i = 0; i <= this.cart.length - 1; i += 1){
					total_price += +this.cart[i].price;
				}
				return total_price;
			}

		},

		methods: {

			get_cart: function() {
				if(JSON.parse(localStorage.getItem("cart"))){
					this.cart = JSON.parse(localStorage.getItem("cart"));
				}
			},

			add_to_cart: function (element) {

				this.cart.push({
					id: this.products_array[element].id,
					name: this.products_array[element].title,
					price: this.products_array[element].price
				});

				localStorage.setItem("cart", JSON.stringify(this.cart));
			},

			remove_from_cart: function (element) {
				this.cart = JSON.parse(localStorage.getItem("cart"));
				this.cart.splice(element, 1);
				localStorage.setItem("cart", JSON.stringify(this.cart));
			}
		}
	});
})();

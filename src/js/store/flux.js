const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			fetchURL: "https://3000-b8b3cc82-70d1-48a0-b9c7-ea988ccd36b4.ws-us02.gitpod.io",
			active: false,
			user: {},
			history: [],
			transactions: [],
			cart: [],
			buynow: null,
			products: [
				{
					name: "Recycle t-shirt",
					image: {
						default:
							"https://cdn.shopify.com/s/files/1/1876/2387/products/KELLY_a0b980d8-056a-49e8-9f7f-288729619d12_2000x.JPG?v=1551835874",
						green:
							"https://cdn.shopify.com/s/files/1/1876/2387/products/KELLY_a0b980d8-056a-49e8-9f7f-288729619d12_2000x.JPG?v=1551835874",
						red:
							"https://cdn.shopify.com/s/files/1/1876/2387/products/HEATHER_RED_f50c21c4-2138-480e-992f-142cc71b7a7f_2000x.JPG?v=1551835874",
						black:
							"https://cdn.shopify.com/s/files/1/1876/2387/products/BLACK_f7d63ee6-bddb-4a6e-a316-13088a442fd1_2000x.JPG?v=1551835874"
					},
					price: 15.99,
					color: [{ green: 10 }, { red: 27 }, { black: 9 }],
					sizes: [{ small: 10 }, { medium: 12 }, { large: 0 }, { XL: 24 }],
					inventory: 46
				},
				{
					name: "Love Earth Beads",
					image: { default: "https://www.brighton.com/photos/product/giant/369560S246660/-/size-os.jpg" },
					price: 10.99,
					color: false,
					sizes: false,
					inventory: 25
				},
				{
					name: "Earth Bracelet",
					image: {
						default:
							"https://canary.contestimg.wish.com/api/webimage/5c09d0d8c14ef40ff1604a2c-large.jpg?cache_buster=b37d7df8d321e3eec323c3d5e1fc15bf",
						gold:
							"https://canary.contestimg.wish.com/api/webimage/5c09d0d8c14ef40ff1604a2c-large.jpg?cache_buster=b37d7df8d321e3eec323c3d5e1fc15bf",
						silver:
							"https://canary.contestimg.wish.com/api/webimage/5c09d0d8c14ef40ff1604a2c-large.jpg?cache_buster=b37d7df8d321e3eec323c3d5e1fc15bf"
					},
					price: 11.99,
					color: [{ gold: 12 }, { silver: 13 }],
					sizes: false,
					inventory: 25
				},
				{
					name: "Earth Necklace Glass Pendant",
					image: {
						default: "https://i.etsystatic.com/6406663/r/il/d22283/674839744/il_794xN.674839744_mjdg.jpg"
					},
					price: 25.99,
					color: false,
					sizes: false,
					inventory: 30
				}
			]
		},
		actions: {
			logging: active => {
				setStore({ active: !active });
			},

			editProfile: userInfo => {
				setStore({ user: userInfo });
			},

			buyNow: item => {
				setStore({
					buynow: item
				});
				return true;
			},

			addUser: user => {
				setStore({ user: user });
			},

			// addUser: user => {
			// 	let store = getStore();
			// 	fetch(store.fetchURL + "/user", {
			// 		method: "POST", // or 'POST'
			// 		body: JSON.stringify({
			// 			firstName: user.firstName,
			// 			lastName: user.lastName,
			// 			email: user.email,
			// 			password: user.password,
			// 			streetAddress: user.streetAddress ? user.streetAddress : "",
			// 			city: user.city ? user.city : "",
			// 			theState: user.theState ? user.theState : "",
			// 			zipCode: user.zipCode ? user.zipCode : "",
			// 			is_active: true
			// 		}), // data can be `string` or {object}!
			// 		headers: {
			// 			"Content-Type": "application/json"
			// 		}
			// 	})
			// 		.then(res => res.json())
			// 		.then(response => {
			// 			console.log("Success:", response);
			// 			setStore({
			// 				user: response
			// 			});
			// 		})
			// 		.catch(error => console.error("Error:", error));
			// 	return true;
			// },

			clearBuyNow: () => {
				setStore({
					buynow: null
				});
			},

			clearCart: () => {
				setStore({
					cart: []
				});
			},

			confirmBuyNowPayment: item => {
				let tempStore = getStore();
				tempStore.history.push(item);
				setStore({ tempStore });
			},

			addTransaction: transaction => {
				let tempStore = getStore();
				tempStore.transactions.push(transaction);
				setStore({ tempStore });
			},

			updateTransaction: () => {
				setTimeout(() => {
					let tempStore = getStore();
					tempStore.transactions[tempStore.transactions.length - 1].status = "confirmed";
					setStore({ tempStore });
				}, 20000);
				setTimeout(() => {
					let tempStore = getStore();
					tempStore.transactions[tempStore.transactions.length - 1].status = "shipped";
					setStore({ tempStore });
				}, 30000);
			},

			addCart: item => {
				let tempStore = getStore();
				tempStore.cart.push(item);
				setStore({ tempStore });
			},

			deleteFromCart: e => {
				let { cart } = getStore();
				setStore({ cart: cart.filter((cart, index) => index != e) });
			},

			subTotal: () => {
				let { cart } = getStore();
				let total = 0;
				for (let x of cart) {
					total += x.subTotal;
				}
				return total;
			},

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

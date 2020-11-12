import React from "react";
import "../../styles/shop.scss";
import "../../styles/cart.scss";
import { Link } from "react-router-dom";
import { CartComponent } from "../component/cartcomponent";
import { Context } from "../store/appContext";

export class Cart extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<Context.Consumer>
				{({ actions, store }) => (
					<div className="container col-4 mx-auto mt-3">
						<h1 className="text-center mt-4 mb-3">CART</h1>
						<div className="row mx-auto">
							{store.cart
								? store.cart.map((item, index) => (
										<CartComponent key={index} item={item} index={index} />
								  ))
								: null}
						</div>
						<h3>{store.cart.length} items in cart</h3>
						<h3>Sub Total: ${actions.subTotal()}</h3>
						<Link to="/payment">
							<button className="mx-auto buyAll" onClick={actions.clearBuyNow}>
								<strong>BUY ALL</strong>
							</button>
						</Link>
					</div>
				)}
			</Context.Consumer>
		);
	}
}

import React from "react";
import "../../styles/shop.scss";
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
					<div className="container col-6 mx-auto mt-3">
						<div className="row mx-auto">
							{store.cart
								? store.cart.map((item, index) => <CartComponent key={index} item={item} />)
								: null}
						</div>
						<h3>Sub Total: {actions.subTotal()}</h3>
						<Link to="/payment">
							<button className="mx-auto" onClick={actions.clearBuyNow}>
								Buy All
							</button>
						</Link>
					</div>
				)}
			</Context.Consumer>
		);
	}
}

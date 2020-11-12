import React from "react";
import "../../styles/shop.scss";
import { Link } from "react-router-dom";
import { Product } from "../component/productcard";
import { Context } from "../store/appContext";

export class Shop extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<>
				<Context.Consumer>
					{({ actions, store }) => (
						<div className="container col-6 mx-auto mt-3">
							<h1 className="mt-4 mb-3 text-center">
								<strong>SHOP</strong>
							</h1>
							<div className="row mx-auto">
								{store.products
									? store.products.map((product, index) => <Product key={index} product={product} />)
									: null}
							</div>
						</div>
					)}
				</Context.Consumer>
			</>
		);
	}
}

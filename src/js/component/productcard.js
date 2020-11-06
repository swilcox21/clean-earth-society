import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Product = props => {
	const { store, actions } = useContext(Context);
	const [currentColor, setCurrentColor] = useState("");

	return (
		<div className="container col-12 col-lg-6 col-sm-12 mx-auto mt-3">
			<Link
				to={{
					pathname: `/details`,
					state: {
						product: props.product
					}
				}}>
				<div className="card">
					<img src={props.product.image.default} className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{props.product.name}</h5>
						<h4 className="card-text">{props.product.price}</h4>
					</div>
				</div>
			</Link>
		</div>
	);
};
Product.propTypes = {
	product: PropTypes.object,
	key: PropTypes.number
};

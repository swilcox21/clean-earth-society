import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CartComponent = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card mb-3">
			<div className="row no-gutters">
				<div className="col-md-4">
					<img src={props.item.image} className="card-img" alt="..." />
				</div>
				<div className="col-md-8">
					<div className="card-body ml-3">
						<h5 className="card-title">{props.item.name}</h5>
						<p className="card-text">
							{props.item.color == "default" ? null : "color: " + props.item.color}
						</p>
						<p className="card-text"> {props.item.size && "size: " + props.item.size}</p>
						<p className="card-text">
							Qty: &nbsp;
							{props.item.units}
						</p>
						<p className="card-text">Price: ${props.item.subTotal}</p>
						<i
							className="fas fa-trash-alt d-flex justify-content-end"
							onClick={() => actions.deleteFromCart(props.index)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
CartComponent.propTypes = {
	item: PropTypes.object,
	index: PropTypes.number,
	key: PropTypes.number
};

import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const CartPayment = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card col-9 mb-3">
			<div className="row no-gutters">
				<div className="col-md-4">
					<img src={props.item.image} className="card-img" alt="..." />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{props.item.name}</h5>
						<p className="card-text cardText">{props.item.color == "default" ? null : props.item.color}</p>
						<p className="card-text cardText">{props.item.size && props.item.size}</p>
						<p className="card-text cardText">Qty: &nbsp; {props.item.units}</p>
						<p className="card-text cardText">{props.item.subTotal}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
CartPayment.propTypes = {
	item: PropTypes.object,
	key: PropTypes.number
};

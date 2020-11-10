import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const HistoryComponent = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card mb-3">
			<div className="row no-gutters">
				<div className="col-md-4">
					<img src={props.recents.image} className="card-img" alt="..." />
				</div>
				<div className="col-md-8">
					<div className="card-body">
						<h5 className="card-title">{props.recents.name}</h5>
						<p className="card-text">{props.recents.color && props.recents.color}</p>
						<p className="card-text">{props.recents.size && props.recents.size}</p>
						<p className="card-text">{props.recents.units}</p>
						<p className="card-text">{props.recents.price}</p>
						<p className="card-text">{props.recents.date}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
HistoryComponent.propTypes = {
	recents: PropTypes.object,
	key: PropTypes.number
};

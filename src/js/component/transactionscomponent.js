import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const TransactionsComponent = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container col-6">
			<table className="table table-dark mt-3">
				<thead>
					<tr>
						<th scope="col" />
						<th scope="col">Date</th>
						<th scope="col">Card</th>
						<th scope="col">Amount</th>
						<th scope="col">Status</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row" />
						<td>{props.recents.date}</td>
						<td>{props.recents.card}</td>
						<td>{props.recents.price}</td>
						<td>{props.recents.status}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};
TransactionsComponent.propTypes = {
	recents: PropTypes.object,
	key: PropTypes.number
};

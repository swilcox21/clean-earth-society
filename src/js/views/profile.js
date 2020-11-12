import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Profile = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container col-6 text-center mt-5">
			<h1>Hello Sam</h1>
			<div className="text-left">
				<h5>
					First Name: &nbsp; &nbsp; <strong>{store.user.firstName}</strong>
				</h5>
				<h5>
					Last Name: &nbsp; &nbsp; <strong>{store.user.lastName}</strong>
				</h5>
				<h5>
					Email: &nbsp; &nbsp; <strong>{store.user.email}</strong>
				</h5>
				<h5>
					password: &nbsp; &nbsp; <strong>{store.user.password}</strong>
				</h5>
			</div>
			<div className="row">
				<Link to={`/history`}>
					<button className="history mt-3 mx-auto">PURCHASE HISTORY</button>
				</Link>
				<Link to={`/transactions`}>
					<button className="history mt-3 mx-auto">TRANSACTIONS</button>
				</Link>
			</div>
		</div>
	);
};

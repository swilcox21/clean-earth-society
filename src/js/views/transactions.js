import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { TransactionsComponent } from "../component/transactionscomponent";

export const Transactions = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container mt-3 col-10">
			<h1 className="text-center mt-4 mb-3">TRANSACTIONS</h1>
			{store.transactions
				? store.transactions.map((recents, index) => <TransactionsComponent key={index} recents={recents} />)
				: null}
			<div className="d-flex justify-content-center">
				<Link to="/profile">
					<button className="btn cartButton ml-1">
						<strong>PROFILE</strong>
					</button>
				</Link>
				<Link to="/history">
					<button className="btn cartButton mr-1">
						<strong>PURCHASE HISTORY</strong>
					</button>
				</Link>
			</div>
		</div>
	);
};

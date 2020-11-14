import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { TransactionsComponent } from "../component/transactionscomponent";

export const Transactions = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container col-10">
			{store.transactions
				? store.transactions.map((recents, index) => <TransactionsComponent key={index} recents={recents} />)
				: null}
		</div>
	);
};

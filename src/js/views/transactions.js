import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Transactions = () => (
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
					<td>11/10/2020</td>
					<td>4864</td>
					<td>$15.99</td>
					<td>Pending</td>
				</tr>
				<tr>
					<th scope="row" />
					<td>11/5/2020</td>
					<td>4864</td>
					<td>$25.99</td>
					<td>Shipped</td>
				</tr>
			</tbody>
		</table>
	</div>
);

import React from "react";
import "../../styles/charities.scss";
import { Link } from "react-router-dom";

export const ToxicFreeFuture = () => (
	<div className="container col-6">
		<img
			className="charitypics col-5"
			src="data:image/jpeg;base64,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"
		/>
		<h1 className="header">Toxic-Free Future</h1>
		<p className="paragraph">
			&nbsp; Founded in 1981, Washington Toxics Coalition (WTC) protects public health and the environment by
			eliminating toxic pollution. WTC promotes alternatives, advocates policies, empowers communities, and
			educates people to create a healthy environment. We believe that all people and other species have the right
			to a healthy environment, free from pollution. We believe in the right to know about toxic chemicals used,
			released, or disposed of in communities. We advocate precedent-setting policies based on the precautionary
			principle and pollution prevention. Our positions are developed from a careful review of science and
			grounded in public policy that promotes a toxic free environment.
		</p>
		<div className="d-flex payment">
			<input type="text" placeholder="$" />
			<button>DONATE</button>
		</div>
		<table className="table table-dark mt-3 col-8">
			<thead>
				<tr>
					<th scope="col" />
					<th scope="col" />
					<th scope="col">Score (1-100)</th>
					<th scope="col">Rating</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row" />
					<td>Overall</td>
					<td>93.98</td>
					<td>
						<i className="fas fa-star" />
						<i className="fas fa-star" />
						<i className="fas fa-star" />
						<i className="fas fa-star" />
					</td>
				</tr>
				<tr>
					<th scope="row" />
					<td>Financial</td>
					<td>97.10</td>
					<td>
						<i className="fas fa-star" />
						<i className="fas fa-star" />
						<i className="fas fa-star" />
						<i className="fas fa-star" />
					</td>
				</tr>
				<tr>
					<th scope="row" />
					<td>Accountability / Trasnparency</td>
					<td>92.00</td>
					<td>
						<i className="fas fa-star" />
						<i className="fas fa-star" />
						<i className="fas fa-star" />
						<i className="fas fa-star" />
					</td>
				</tr>
			</tbody>
		</table>
	</div>
);

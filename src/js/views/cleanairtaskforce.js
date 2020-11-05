import React from "react";
import "../../styles/charities.scss";
import { Link } from "react-router-dom";

export const CleanAirTaskForce = () => (
	<div className="container col-6">
		<img
			className="charitypics col-5"
			src="data:image/png;base64,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"
		/>
		<h1 className="header">Clean Air Task Force</h1>
		<p className="paragraph">
			&nbsp; Clean Air Task Force is a nonprofit environmental organization that works to help safeguard against
			the worst impacts of climate change by catalyzing the rapid global development and deployment of low carbon
			energy and other climate-protecting technologies through research and analysis, public advocacy leadership,
			and partnership with the private sector.
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
					<td>91.97</td>
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
					<td>88.65</td>
					<td>
						<i className="fas fa-star" />
						<i className="fas fa-star" />
						<i className="fas fa-star" />
						<i className="far fa-star" />
					</td>
				</tr>
				<tr>
					<th scope="row" />
					<td>Accountability / Trasnparency</td>
					<td>100.00</td>
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

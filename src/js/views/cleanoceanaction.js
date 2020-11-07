import React, { useContext, useEffect, useState } from "react";
import "../../styles/charities.scss";
import { Link } from "react-router-dom";
import { ModalOcean } from "../component/modalOcean";

export const CleanOceanAction = () => {
	const [showOcean, setShowOcean] = useState(false);

	const handleClose = () => setShow(false);
	const handleShowOcean = () => setShowOcean(true);

	return (
		<div className="container col-6">
			<ModalOcean show={showOcean} onClose={() => setShowOcean(false)} />
			<img
				className="charitypics col-5"
				src="data:image/jpeg;base64,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"
			/>
			<h1 className="header">Clean Ocean Action</h1>
			<p className="paragraph">
				&nbsp; Founded in 1984, Clean Ocean Action (COA) is a broad-based coalition of over 115 active boating,
				business, community, conservation, diving, environmental, fishing, religious, service, student, surfing,
				and womens groups. COA works with these Ocean Wavemakers to clean up and protect the waters of the New
				York Bight from Montauk, NY, to Cape May, NJ. With continuous, relentless efforts COA uses research,
				education, and citizen action to empower people and convince our elected officials to protect our marine
				resources for today and for future generations.
			</p>
			<div className="d-flex payment">
				<button onClick={() => handleShowOcean()}>DONATE</button>
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
						<td>99.87</td>
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
						<td>99.82</td>
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
};

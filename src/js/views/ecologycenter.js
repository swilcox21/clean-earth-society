import React, { useContext, useEffect, useState } from "react";
import "../../styles/charities.scss";
import { Link } from "react-router-dom";
import { ModalEcology } from "../component/modalecology";

export const EcologyCenter = () => {
	const [showEcology, setShowEcology] = useState(false);

	const handleClose = () => setShow(false);
	const handleShowEcology = () => setShowEcology(true);

	return (
		<div className="container col-6">
			<ModalEcology show={showEcology} onClose={() => setShowEcology(false)} />
			<img
				className="charitypics col-5"
				src="https://ecologycenter.org/wp-content/themes/ec/images/ecology_center_header.png"
			/>
			<h1 className="header">Ecology Center</h1>
			<p className="paragraph">
				&nbsp; The Ecology Center is a membership-based, nonprofit environmental organization based in Ann
				Arbor, Michigan. Founded by community activists after the countrys first Earth Day in 1970, the Ecology
				Center is now a regional leader that works for a safe and healthy environment where people live, work,
				and play. The Ecology Center is a Michigan-based nonprofit environmental organization that works at the
				local, state, and national levels for clean production, healthy communities, environmental justice, and
				a sustainable future. The Ecology Center works for a just and healthy environment through grassroots
				organizing, advocacy, education, and demonstration projects. Today, our major programs are: Climate and
				Energy; Environmental Education; Environmental Health Project; HealthyStuff.org; Land Use; and Recycle
				Ann Arbor
			</p>
			<div className="d-flex payment">
				<span onClick={() => handleShowEcology()}>$ DONATE $</span>
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
						<td>91.16</td>
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
						<td>87.50</td>
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
};

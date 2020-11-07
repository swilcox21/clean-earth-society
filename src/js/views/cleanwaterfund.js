import React, { useContext, useEffect, useState } from "react";
import "../../styles/charities.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ModalWater } from "../component/modalwater";

export const CleanWaterFund = () => {
	const [showWater, setShowWater] = useState(false);

	const handleClose = () => setShowWater(false);
	const handleShowWater = () => setShowWater(true);

	return (
		<>
			<ModalWater show={showWater} onClose={() => setShowWater(false)} />
			<div className="container col-6">
				<img className="charitypics col-5" src="https://blog.bonus.ly/hubfs/clean-water-fund-logo.jpg" />
				<h1 className="header">Clean Water Fund</h1>
				<p className="paragraph">
					&nbsp; Clean Water Fund (CWF) works to develop strong grassroots environmental leadership and to
					bring together diverse constituencies to work cooperatively for changes that improve their lives,
					focused on health, consumer, environmental and community problems. Since 1978, Clean Water Fund has
					helped people campaign successfully for cleaner and safer water, cleaner air, and protection from
					toxic pollution in our homes, neighborhoods and workplaces. Clean Water Funds programs build on and
					complement those of Clean Water Action, which has helped develop, pass, strengthen and defend the
					nations major water and toxics laws.
				</p>
				<button onClick={() => handleShowWater()} type="button">
					DONATE
				</button>
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
							<td>89.35</td>
							<td>
								<i className="fas fa-star" />
								<i className="fas fa-star" />
								<i className="fas fa-star" />
								<i className="far fa-star" />
							</td>
						</tr>
						<tr>
							<th scope="row" />
							<td>Financial</td>
							<td>85.49</td>
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
							<td>96.00</td>
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
		</>
	);
};

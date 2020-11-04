import React from "react";
import "../../styles/charities.scss";
import { Link } from "react-router-dom";

export const Charities = () => (
	<div className="container mt-5 text-center">
		<h1>
			These non-profits are doing some amazing work to help protect our mother earth and all of her inhabitants
		</h1>
		<div className="row mx-auto col-10 mt-5">
			<Link to={`/cleanwaterfund/`} className="charitypics col-6">
				<img className="charitypics col-12" src="https://blog.bonus.ly/hubfs/clean-water-fund-logo.jpg" />
			</Link>
			<div className="container col-6 text-left">
				<h3>Clean Water Fund</h3>
				<div>
					Clean Water Fund (CWF) works to develop strong grassroots environmental leadership and to bring
					together diverse constituencies to work cooperatively...
				</div>
				<Link to={`/cleanwaterfund/`}>
					<div className="readmore text-right text-bottom">read more...</div>
				</Link>
			</div>
		</div>
		<div className="row mx-auto col-10 mt-5">
			<img
				className="charitypics col-6"
				src="https://blueandgreentomorrow.com/wp-content/uploads/2018/07/environmental-charity-and-donation-1000x600.jpg"
			/>
			<div className="container col-6 text-left">
				<h3>Charity nubmer 2</h3>
				<h5>Name of the charity</h5>
				<div>Some very breif text describing the charity just enough to take up a few lines of text</div>
				<div className="readmore text-right text-bottom">read more...</div>
			</div>
		</div>
		<div className="row mx-auto col-10 mt-5">
			<img
				className="charitypics col-6"
				src="https://blueandgreentomorrow.com/wp-content/uploads/2018/07/environmental-charity-and-donation-1000x600.jpg"
			/>
			<div className="container col-6 text-left">
				<h3>Charity number 3</h3>
				<h5>Name of the charity</h5>
				<div>Some very breif text describing the charity just enough to take up a few lines of text</div>
				<div className="readmore text-right text-bottom">read more...</div>
			</div>
		</div>
		<div className="row mx-auto col-10 mt-5">
			<img
				className="charitypics col-6"
				src="https://blueandgreentomorrow.com/wp-content/uploads/2018/07/environmental-charity-and-donation-1000x600.jpg"
			/>
			<div className="container col-6 text-left">
				<h3>Charity number 4</h3>
				<h5>Name of the charity</h5>
				<div>Some very breif text describing the charity just enough to take up a few lines of text</div>
				<div className="readmore text-right text-bottom">read more...</div>
			</div>
		</div>
		<div className="row mx-auto col-10 mt-5">
			<img
				className="charitypics col-6"
				src="https://blueandgreentomorrow.com/wp-content/uploads/2018/07/environmental-charity-and-donation-1000x600.jpg"
			/>
			<div className="container col-6 text-left">
				<h3>Charity number 5</h3>
				<h5>Name of the charity</h5>
				<div>Some very breif text describing the charity just enough to take up a few lines of text</div>
				<div className="readmore text-right text-bottom">read more...</div>
			</div>
		</div>
	</div>
);

import React from "react";
import "../../styles/charities.scss";
import { Link } from "react-router-dom";

export const CleanWaterFund = () => (
	<div className="container col-6">
		<img className="charitypics col-5" src="https://blog.bonus.ly/hubfs/clean-water-fund-logo.jpg" />
		<h1 className="header">Clean Water Fund</h1>
		<p className="paragraph">
			&nbsp; Clean Water Fund (CWF) works to develop strong grassroots environmental leadership and to bring
			together diverse constituencies to work cooperatively for changes that improve their lives, focused on
			health, consumer, environmental and community problems. Since 1978, Clean Water Fund has helped people
			campaign successfully for cleaner and safer water, cleaner air, and protection from toxic pollution in our
			homes, neighborhoods and workplaces. Clean Water Funds programs build on and complement those of Clean Water
			Action, which has helped develop, pass, strengthen and defend the nations major water and toxics laws.
		</p>
		<div className="d-flex payment">
			<input type="text" placeholder="$" />
			<button>DONATE</button>
		</div>
	</div>
);

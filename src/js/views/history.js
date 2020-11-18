import React from "react";
import "../../styles/shop.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { HistoryComponent } from "../component/historycomponent";

export class History extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<>
				<Context.Consumer>
					{({ actions, store }) => (
						<>
							<div className="container col-6 mx-auto mt-3">
								<h1 className="text-center mt-4 mb-3">PURCHASE HISTORY</h1>
								<div className="row mx-auto">
									{store.history
										? store.history.map((item, index) => (
												<HistoryComponent key={index} item={item} />
										  ))
										: null}
								</div>
								<div className="d-flex justify-content-center">
									<Link to="/profile">
										<button className="btn cartButton ml-1">
											<strong>PROFILE</strong>
										</button>
									</Link>
									<Link to="/transactions">
										<button className="btn cartButton mr-1">
											<strong>TRANSACTIONS</strong>
										</button>
									</Link>
								</div>
							</div>
						</>
					)}
				</Context.Consumer>
			</>
		);
	}
}

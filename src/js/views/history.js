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
						<div className="container col-6 mx-auto mt-3">
							<div className="row mx-auto">
								{store.history
									? store.history.map((recents, index) => (
											<HistoryComponent key={index} recents={recents} />
									  ))
									: null}
							</div>
						</div>
					)}
				</Context.Consumer>
			</>
		);
	}
}

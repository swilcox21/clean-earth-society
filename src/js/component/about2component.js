import React, { Component } from "react";
import { Spring } from "react-spring";
import PropTypes from "prop-types";

export class AboutComponent2 extends Component {
	render() {
		return (
			<Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 1000, duration: 1000 }}>
				{props => (
					<div style={props}>
						<div style={c2Style}>
							<h1>Component 2</h1>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus nobis adipisci eum
								minima deserunt at porro, veritatis officia commodi itaque voluptates vel suscipit
								assumenda soluta ipsa voluptatibus laudantium labore harum?
							</p>
							<button style={btn} onClick={this.props.toggle}>
								Toggle Component 3
							</button>
						</div>
					</div>
				)}
			</Spring>
		);
	}
}

AboutComponent2.propTypes = {
	toggle: PropTypes.toggle
};

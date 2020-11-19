import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export class About extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		return (
			<>
				<img src="https://scontent-mia3-1.xx.fbcdn.net/v/t31.0-8/12489228_10205898791248910_404348315568235609_o.jpg?_nc_cat=100&ccb=2&_nc_sid=730e14&_nc_ohc=ZtRBYE5qmpgAX-QnreI&_nc_ht=scontent-mia3-1.xx&oh=044102cfd1be69337dc1413144fd782c&oe=5FD03F8E" />
			</>
		);
	}
}

// import React, { useContext, useEffect, useState } from "react";
// import "../../styles/home.scss";
// import { Link } from "react-router-dom";
// import { Transition, animated } from "react-spring";
// import { AboutComponent1 } from "../component/about1component";
// import { AboutComponent2 } from "../component/about2component";
// import { AboutComponent3 } from "../component/about3component";

// export class About extends React.Component {
// 	state = {
// 		showAboutComponent3: false
// 	};

// 	toggle = e => this.setState({ showAboutComponent3: !this.state.showAboutComponent3 });

// 	render() {
// 		return (
// 			<div className="App">
// 				<AboutComponent1 />
// 				<AboutComponent2 toggle={this.toggle} />
// 				<Transition
// 					native
// 					items={this.state.showAboutComponent3}
// 					from={{ opacity: 0 }}
// 					enter={{ opacity: 1 }}
// 					leave={{ opacity: 0 }}>
// 					{show =>
// 						show &&
// 						(props => (
// 							<animated.div style={props}>
// 								<AboutComponent3 />
// 							</animated.div>
// 						))
// 					}
// 				</Transition>
// 			</div>
// 		);
// 	}
// }

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Charities } from "./views/charities";
import { CleanWaterFund } from "./views/cleanwaterfund";
import { EcologyCenter } from "./views/ecologycenter";
import { CleanOceanAction } from "./views/cleanoceanaction";
import { CleanAirTaskForce } from "./views/cleanairtaskforce";
import { ToxicFreeFuture } from "./views/toxicfreefuture";
import { Payment } from "./views/payment";
import { Shop } from "./views/shop";
import { ShopSize } from "./views/shop-size";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { NavBar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NavBar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/charities" component={Charities} />
						<Route exact path="/cleanwaterfund" component={CleanWaterFund} />
						<Route exact path="/ecologycenter" component={EcologyCenter} />
						<Route exact path="/cleanoceanaction" component={CleanOceanAction} />
						<Route exact path="/cleanairtaskforce" component={CleanAirTaskForce} />
						<Route exact path="/toxicfreefuture" component={ToxicFreeFuture} />
						<Route exact path="/shop" component={Shop} />
						<Route exact path="/payment" component={Payment} />

						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

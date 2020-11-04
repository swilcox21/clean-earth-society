import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="container text-center mt-5">
		<div className="missionStatement">
			<div className="appName">Clean Earth Society</div>
			<h3 className="motto">Whether you believe its round or flat we can all agree it needs to be clean!</h3>
			{/* <h5 className="mt-5 helper">what can we help you with today?</h5> */}
			<div className="container d-flex justify-content-center mt-3">
				<Link to={`/charities/`}>
					<a href="#" className="btn btn-success mr-3">
						Donate
					</a>
				</Link>
				<a href="#" className="btn btn-success ml-3 px-4">
					Shop
				</a>
			</div>
		</div>
		<div className="row mx-auto col-10 mt-5">
			<img
				className="charitypics col-6"
				src="https://blueandgreentomorrow.com/wp-content/uploads/2018/07/environmental-charity-and-donation-1000x600.jpg"
			/>
			<div className="container col-6 text-left">
				<h3>This weeks featured charity</h3>
				<h5>Name of the charity</h5>
				<div>Some very breif text describing the charity just enough to take up a few lines of text</div>
				<div className="readmore text-right text-bottom">read more...</div>
			</div>
		</div>
		<h1 className="mt-5">We here at the Clean Earth Society are dedicated to keeping people well informed</h1>
		<div className="container-fluid d-flex justifty-content-between mt-5">
			<div className="col-4">
				<img
					className="blogPics"
					src="https://www.supplychainbrain.com/ext/resources/0-images/article-images/2020/0129_FoodSupplyChain.jpg?1596460279"
				/>
				<h3>article on food supply</h3>
				<p className="text-left">
					the first few lines of a blog about how companies are ruining our food supply
				</p>
				<div className="readMore text-right">read more...</div>
			</div>
			<div className="col-4">
				<img
					className="blogPics"
					src="https://www.closedlooppartners.com/wp-content/uploads/2019/04/B_3-reasons-why-recycling-is-good-business-in-america.jpg"
				/>
				<h3>article on recycling</h3>
				<p className="text-left">the first few lines of a blog about recycling</p>
				<div className="readMore text-right">read more...</div>
			</div>
			<div className="col-4">
				<img
					className="blogPics"
					src="https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2018/12/11/file72b25wdpykn1f1okjb7k-1544470633.jpg?itok=sPpyOlyf"
				/>
				<h3>article on pollution</h3>
				<p className="text-left">the first few lines of a blog about pollution</p>
				<div className="readMore text-right">read more...</div>
			</div>
		</div>
	</div>
);

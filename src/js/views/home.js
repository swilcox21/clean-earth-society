import React from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="container text-center">
		<div className="missionStatement">
			<div className="appName">Clean Earth Society</div>
			<h3 className="motto">Whether you believe its round or flat we can all agree it needs to be clean!</h3>
			<div className="container d-flex justify-content-center mt-3">
				<Link to={`/charities`}>
					<button href="#" className="btn btn-success mr-3">
						Donate
					</button>
				</Link>
				<Link to={`/shop`}>
					<button href="#" className="btn btn-success ml-3 px-4">
						Shop
					</button>
				</Link>
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
				<a
					href="https://www.bsigroup.com/en-GB/blog/food-industry-blog-news/"
					target="_blank"
					rel="noopener noreferrer">
					<img
						className="blogPics col-12"
						src="https://www.bsigroup.com/globalassets/localfiles/160x130/circular-160x130.png"
					/>
				</a>
				<h3>Food Industy Blog</h3>
				<p className="text-left">
					&nbsp; &nbsp; The challenges facing the global food and retail supply chain sector are broad,
					including issues such as organizational resilience, food safety culture, sustainability,
					regenerative agriculture, plastics and packaging, food fraud, novel food and allergens to name a
					few...
				</p>
				<a
					href="https://www.bsigroup.com/en-GB/blog/food-industry-blog-news/"
					target="_blank"
					rel="noopener noreferrer"
					className="readMore text-right">
					<div className="text-right">read more...</div>
				</a>
			</div>
			<div className="col-4">
				<a href="https://recyclenation.com/blog/" target="_blank" rel="noopener noreferrer">
					<img
						className="blogPics"
						src="https://www.closedlooppartners.com/wp-content/uploads/2019/04/B_3-reasons-why-recycling-is-good-business-in-america.jpg"
					/>
				</a>
				<h3>Recycle Nation Blog</h3>
				<p className="text-left">
					&nbsp; &nbsp; Think about the plastics in your home. You likely have several different kinds of the
					seven most common plastics in your cupboards and closets. From plastic juice bottles to detergent
					containers, your home has a lot of plastic in some stage of use. Once its empty, what happens? Its
					just as likely that your waste...
				</p>
				<a
					href="https://recyclenation.com/blog/"
					target="_blank"
					rel="noopener noreferrer"
					className="readMore text-right">
					<div className="text-right">read more...</div>
				</a>
			</div>
			<div className="col-4">
				<a href="https://www.pureearth.org/blog/" target="_blank" rel="noopener noreferrer">
					<img
						className="blogPics"
						src="https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2018/12/11/file72b25wdpykn1f1okjb7k-1544470633.jpg?itok=sPpyOlyf"
					/>
				</a>
				<h3>The Pollution Blog</h3>
				<p className="text-left">
					&nbsp; &nbsp; Pollution investigators from Pure Earths Toxic Sites Identification Program (TSIP)
					have been busy finding and assessing contaminated communities around the world for over a decade. Of
					all the pollutants they find, theres one they keep coming across again and again...
				</p>
				<a
					href="https://www.pureearth.org/blog/"
					target="_blank"
					rel="noopener noreferrer"
					className="readMore text-right">
					<div className="text-right">read more...</div>
				</a>
			</div>
		</div>
	</div>
);

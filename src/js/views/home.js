import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { ModalWater } from "../component/modalwater";
import Carousel from "react-bootstrap/Carousel";

export const Home = () => {
	const [showWater, setShowWater] = useState(false);
	const handleShowWater = () => setShowWater(true);

	return (
		<div className="container text-center">
			<ModalWater show={showWater} onClose={() => setShowWater(false)} />
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
			<div className="row mx-auto col-10 weeklyCharity">
				<Link to={`/cleanwaterfund`} className="charitypics col-6">
					<img className="charitypics col-12" src="https://blog.bonus.ly/hubfs/clean-water-fund-logo.jpg" />
				</Link>
				<div className="container col-6 text-left">
					<h2 className="featureCharity">This weeks featured charity</h2>
					<h3>Clean Water Fund</h3>
					<div>
						Clean Water Fund (CWF) works to develop strong grassroots environmental leadership and to bring
						together diverse constituencies to work cooperatively...
					</div>
					<Link to={`/cleanwaterfund`}>
						<div className="readmore text-right text-bottom">read more...</div>
					</Link>
					<div className="d-flex payment mt-3">
						<span onClick={() => handleShowWater()}>$ DONATE $</span>
					</div>
				</div>
			</div>
			<h1 className="readMore articles mb-3">
				We here at the Clean Earth Society are dedicated to keeping people well informed
			</h1>
			<Carousel>
				<Carousel.Item interval={4000}>
					<img
						className="d-block w-100 carouselImg"
						src="https://media.bizj.us/view/img/10211443/howtofoodindustry*1200xx2724-1537-0-21.jpg"
						alt="First slide"
					/>
					<Carousel.Caption>
						<span className="carouselLabel">Food Industy Blog</span>
						<br />
						<p className="carouselInfo">
							The challenges facing the global food and retail supply chain sector are broad, including
							issues such as organizational resilience, food safety culture...
						</p>
						<a
							href="https://www.bsigroup.com/en-GB/blog/food-industry-blog-news/"
							target="_blank"
							rel="noopener noreferrer"
							className="readMore text-right">
							<span className="text-right carouselReadMore">keep reading...</span>
						</a>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={4000}>
					<img
						className="d-block w-100 carouselImg"
						src="https://www.closedlooppartners.com/wp-content/uploads/2019/04/B_3-reasons-why-recycling-is-good-business-in-america.jpg"
						alt="Second slide"
					/>
					<Carousel.Caption>
						<span className="carouselLabel">Recycle Nation Blog</span>
						<br />
						<p className="carouselInfo">
							Think about the plastics in your home. You likely have several different kinds of the seven
							most common plastics in your cupboards and closets. From plastic juice bottles...
						</p>
						<a
							href="https://recyclenation.com/blog/"
							target="_blank"
							rel="noopener noreferrer"
							className="readMore text-right">
							<span className="text-right carouselReadMore">keep reading...</span>
						</a>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={4000}>
					<img
						className="d-block w-100 carouselImg"
						src="https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2018/12/11/file72b25wdpykn1f1okjb7k-1544470633.jpg?itok=sPpyOlyf"
						alt="Third slide"
					/>
					<Carousel.Caption>
						<span className="carouselLabel">The Pollution Blog</span>
						<br />
						<p className="carouselInfo">
							Pollution investigators from Pure Earths Toxic Sites Identification Program (TSIP) have been
							busy finding and assessing contaminated communities around the world for over a decade...
						</p>
						<a
							href="https://www.pureearth.org/blog/"
							target="_blank"
							rel="noopener noreferrer"
							className="readMore text-right">
							<span className="text-right carouselReadMore">keep reading...</span>
						</a>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

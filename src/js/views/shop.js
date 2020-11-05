import React from "react";
import "../../styles/shop.scss";
import { Link } from "react-router-dom";

export const Shop = () => (
	<div className="container col-6 mx-auto mt-3">
		<div className="row mx-auto">
			<div className="card col-10 col-md-5 col-sm-10 mt-5 mx-auto">
				<img
					src="https://images-na.ssl-images-amazon.com/images/I/51Fqgd0PvxL._AC_UL1005_.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="inlineRadioOptions"
							id="inlineRadio1"
							value="option1"
						/>
						<label className="form-check-label" htmlFor="inlineRadio1">
							S
						</label>
					</div>
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="inlineRadioOptions"
							id="inlineRadio2"
							value="option2"
						/>
						<label className="form-check-label" htmlFor="inlineRadio2">
							M
						</label>
					</div>
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="inlineRadioOptions"
							id="inlineRadio2"
							value="option2"
						/>
						<label className="form-check-label" htmlFor="inlineRadio2">
							L
						</label>
					</div>
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="inlineRadioOptions"
							id="inlineRadio2"
							value="option2"
						/>
						<label className="form-check-label" htmlFor="inlineRadio2">
							XL
						</label>
					</div>
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="inlineRadioOptions"
							id="inlineRadio2"
							value="option2"
						/>
						<label className="form-check-label" htmlFor="inlineRadio2">
							XXL
						</label>
					</div>
					<h5 className="card-title">Recycle t-shirt</h5>
					<h4 className="card-text">$15.99</h4>
				</div>
				<div className="row ml-auto">
					<Link to={`/payment/`}>
						<a href="#" className="btn buyButton mx-1">
							<strong>$ $ $</strong>
						</a>
					</Link>
					<a href="#" className="btn cartButton mx-1">
						<i className="fas fa-cart-plus" />
					</a>
				</div>
			</div>
			<div className="card col-10 col-md-5 col-sm-10 mt-5 mx-auto">
				<img
					src="https://www.brighton.com/photos/product/giant/369560S246660/-/size-os.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Love Earth Beads</h5>
					<h4 className="card-text">$10.99</h4>
				</div>
				<div className="row ml-auto">
					<Link to={`/payment/`}>
						<a href="#" className="btn buyButton mx-1">
							<strong>$ $ $</strong>
						</a>
					</Link>
					<a href="#" className="btn cartButton mx-1">
						<i className="fas fa-cart-plus" />
					</a>
				</div>
			</div>
		</div>
		<div className="row mx-auto">
			<div className="card col-10 col-md-5 col-sm-10 mt-5 mx-auto">
				<img
					src="https://canary.contestimg.wish.com/api/webimage/5c09d0d8c14ef40ff1604a2c-large.jpg?cache_buster=b37d7df8d321e3eec323c3d5e1fc15bf"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="inlineRadioOptions"
							id="inlineRadio1"
							value="option1"
						/>
						<label className="form-check-label" htmlFor="inlineRadio1">
							gold
						</label>
					</div>
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="inlineRadioOptions"
							id="inlineRadio2"
							value="option2"
						/>
						<label className="form-check-label" htmlFor="inlineRadio2">
							silver
						</label>
					</div>
					<h5 className="card-title">Earth Bracelet</h5>
					<h4 className="card-text">$11.99</h4>
				</div>
				<div className="row ml-auto">
					<Link to={`/payment/`}>
						<a href="#" className="btn buyButton mx-1">
							<strong>$ $ $</strong>
						</a>
					</Link>
					<a href="#" className="btn cartButton mx-1">
						<i className="fas fa-cart-plus" />
					</a>
				</div>
			</div>
			<div className="card col-10 col-md-5 col-sm-10 mt-5 mx-auto">
				<img
					src="https://i.etsystatic.com/6406663/r/il/d22283/674839744/il_794xN.674839744_mjdg.jpg"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">Earth Necklace Glass Pendant</h5>
					<h4 className="card-text">$17.99</h4>
				</div>
				<div className="row ml-auto">
					<Link to={`/payment/`}>
						<a href="#" className="btn buyButton mx-1">
							<strong>$ $ $</strong>
						</a>
					</Link>
					<a href="#" className="btn cartButton mx-1">
						<i className="fas fa-cart-plus" />
					</a>
				</div>
			</div>
		</div>
	</div>
);

import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Product = props => {
	const { store, actions } = useContext(Context);
	const [currentColor, setCurrentColor] = useState("");

	return (
		<div className="container col-12 col-lg-6 col-sm-12 mx-auto mt-3">
			<div className="card">
				<img src={props.product.image} className="card-img-top" alt="..." />
				<div className="card-body">
					{props.product.sizes ? (
						<>
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
						</>
					) : null}
					<br />
					{props.product.color
						? props.product.color.map((color, ind) => {
								return (
									<>
										<div className="form-check form-check-inline">
											<input
												onClick={() => setCurrentColor(Object.keys(color))}
												className="form-check-input"
												type="radio"
												name="inlineRadioOptions"
												id="inlineRadio1"
												value="option1"
											/>
											<label className="form-check-label" htmlFor="inlineRadio1">
												{Object.keys(color)}
											</label>
										</div>
									</>
								);
						  })
						: null}
					<h5 className="card-title">{props.product.name}</h5>
					<h4 className="card-text">{props.product.price}</h4>
				</div>
				<div className="row ml-auto">
					<Link to={`/payment/`}>
						<button href="#" className="btn buyButton mx-1">
							<strong>$ $ $</strong>
						</button>
					</Link>
					<a href="#" className="btn cartButton mx-1">
						<i className="fas fa-cart-plus" />
					</a>
				</div>
			</div>
		</div>
	);
};
Product.propTypes = {
	product: PropTypes.object,
	key: PropTypes.number
};

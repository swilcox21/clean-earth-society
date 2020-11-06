import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = props => {
	const { store, actions } = useContext(Context);
	const product = props.location.state.product;
	const [currentColor, setCurrentColor] = useState("default");
	const [currentSize, setCurrentSize] = useState("");
	const history = useHistory();
	// console.log("hi", Object.keys(color));
	return (
		<div className="container col-4 mx-auto mt-3">
			<div className="card">
				<img
					src={product.color ? product.image[currentColor] : product.image.default}
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<fieldset className="radiogroup">
						<legend />
						{product.sizes
							? product.sizes.map((size, index) => (
									<div className="form-check form-check-inline" key={index}>
										<input
											onClick={() => setCurrentSize(Object.keys(size))}
											className="form-check-input"
											type="radio"
											name="sizeradios"
											id={Object.keys(size)}
											value={currentSize}
										/>
										<label className="form-check-label" htmlFor={Object.keys(size)}>
											{Object.keys(size)}
										</label>
									</div>
							  ))
							: null}
					</fieldset>
					<br />
					{product.color
						? product.color.map((color, ind) => {
								return (
									<>
										<div className="form-check form-check-inline">
											<input
												onClick={() => setCurrentColor(Object.keys(color))}
												className="form-check-input"
												type="radio"
												name="colorRadios"
												id={Object.keys(color)}
												value={currentColor}
											/>
											<label className="form-check-label" htmlFor={Object.keys(color)}>
												{Object.keys(color)}
											</label>
										</div>
									</>
								);
						  })
						: null}
					<h5 className="card-title">{product.name}</h5>
					<h4 className="card-text">{product.price}</h4>
				</div>
				<div className="row ml-auto">
					<button
						className="btn buyButton mx-1"
						onClick={e => {
							let item = {
								name: product.name,
								unitPrice: product.price,
								subTotal: 1 * product.price,
								color: currentColor,
								size: currentSize
							};
							actions.buyNow(item);
							history.push("/payment");
						}}>
						$ $ $
					</button>
					{/* <Link to={`/payment/`}>
						<button href="#" className="btn buyButton mx-1">
							<strong>$ $ $</strong>
						</button>
					</Link> */}
					<a href="#" className="btn cartButton mx-1">
						<i className="fas fa-cart-plus" />
					</a>
				</div>
			</div>
		</div>
	);
};

Details.propTypes = {
	product: PropTypes.object,
	key: PropTypes.number,
	location: PropTypes.object
};

import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../../styles/details.scss";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Details = props => {
	const { store, actions } = useContext(Context);
	const product = props.location.state.product;
	const [currentColor, setCurrentColor] = useState("default");
	const [currentSize, setCurrentSize] = useState("");
	const [count, setCount] = useState(1);
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
					<h5 className="card-title">{product.name}</h5>
					<fieldset className="radiogroup">
						<legend />
						{product.sizes
							? product.sizes.map((size, index) => (
									<div className="form-check form-check-inline mb-1" key={index}>
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
					{/* <br /> */}
					{product.color
						? product.color.map((color, ind) => {
								return (
									<>
										<div className="form-check form-check-inline mb-1">
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
					<div className="countInput ml-3">
						<input
							onChange={e => setCount(e.target.value)}
							className="form-check-input countInput pl-2"
							type="number"
							name="count"
							id="count"
							value={count}
						/>
					</div>
					<br />
					<br />
					<h4 className="card-text">${product.price}</h4>
				</div>
				<div className="row mx-auto">
					<button
						className="btn buyButton mx-1"
						disabled={(product.color && currentColor == "default") || (product.sizes && !currentSize)}
						onClick={e => {
							let item = {
								name: product.name,
								unitPrice: product.price,
								units: count,
								subTotal: count * product.price,
								color: currentColor,
								size: currentSize,
								image: product.image[currentColor]
							};
							actions.buyNow(item);
							history.push("/payment");
						}}>
						<strong>$ BUY NOW $</strong>
					</button>
					<button
						href="#"
						className="btn cartButton mx-1"
						disabled={(product.color && currentColor == "default") || (product.sizes && !currentSize)}
						onClick={e => {
							let item = {
								name: product.name,
								unitPrice: product.price,
								subTotal: count * product.price,
								color: currentColor,
								size: currentSize,
								units: count,
								image: product.image[currentColor]
							};
							actions.addCart(item);
						}}>
						<i className="fas fa-cart-plus" />
					</button>
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

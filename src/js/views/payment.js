import React, { useContext, useEffect, useState } from "react";
import "../../styles/payment.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Product } from "../component/productcard";
import { CartPayment } from "../component/cartpayment";
import PropTypes from "prop-types";
import { ModalPayment } from "../component/modalpayment";

const validateForm = errors => {
	let valid = true;
	Object.values(errors).forEach(
		// if we have an error string set valid to false
		val => val.length > 0 && (valid = false)
	);
	return valid;
};

export const Payment = () => {
	const { store, actions } = useContext(Context);
	const [showPayment, setShowPayment] = useState(false);
	const [state, setState] = useState({
		// firstName: store.user.firstName ? store.user.firstName : "",
		// lastName: store.user.lastName ? store.user.lastName : "",
		// streetAddress: store.user.streetAddress ? store.user.streetAddress : "",
		// city: store.user.city ? store.user.city : "",
		// theState: store.user.theState ? store.user.theState : "",
		// zipCode: store.user.zipCode ? store.user.zipCode : "",
		// cardNumber: store.user.cardNumber ? store.user.cardNumber : "",
		// expDate: store.user.expDate ? store.user.expDate : "",
		// cvv: store.user.cvv ? store.user.cvv : "",
		// cardOwner: store.user.cardOwner ? store.user.cardOwner : "",
		firstName: "",
		lastName: "",
		streetAddress: "",
		city: "",
		theState: "",
		zipCode: "",
		cardNumber: "",
		expDate: "",
		cvv: "",
		cardOwner: "",
		errors: {
			firstName: " ",
			lastName: " ",
			streetAddress: " ",
			city: " ",
			theState: " ",
			zipCode: " ",
			cardNumber: " ",
			expDate: " ",
			cvv: " ",
			cardOwner: " "
		}
	});

	const subTotalFunction = () => {
		if (store.buynow) {
			return store.buynow.subTotal;
		} else {
			return actions.subTotal();
		}
	};

	const last4 = cardNumber => {
		let lastFour = cardNumber.substr(12, 15);
		return lastFour;
	};

	const todaysDate = () => {
		var d = new Date();
		let month = "" + (d.getMonth() + 1);
		let day = "" + d.getDate();
		let year = d.getFullYear();
		if (month.length < 2) month = "0" + month;
		if (day.length < 2) day = "0" + day;
		return [month, day, year].join("-");
	};
	// return JSON.stringify(d);

	const handleClose = () => setShow(false);
	const handleShowPayment = () => setShowPayment(true);

	const handleChange = event => {
		event.preventDefault();
		const { name, value } = event.target;
		let errors = state.errors;

		switch (name) {
			case "firstName":
				errors.firstName = value.length < 1 ? "This field is required *" : "";
				break;
			case "lastName":
				errors.lastName = value.length < 1 ? "This field is required *" : "";
				break;
			case "streetAddress":
				errors.streetAddress = value.length < 1 ? "This field is required *" : "";
				break;
			case "city":
				errors.city = value.length < 1 ? "This field is required *" : "";
				break;
			case "theState":
				errors.theState = value.length < 1 ? "This field is required *" : "";
				break;
			case "zipCode":
				errors.zipCode = value.length < 1 ? "This field is required *" : "";
				break;
			case "cardNumber":
				errors.cardNumber = value.length < 1 ? "This field is required *" : "";
				break;
			case "expDate":
				errors.expDate = value.length < 1 ? "This field is required *" : "";
				break;
			case "cvv":
				errors.cvv = value.length < 1 ? "This field is required *" : "";
				break;
			case "cardOwner":
				errors.cardOwner = value.length < 1 ? "This field is required *" : "";
				break;
			default:
				break;
		}

		setState({ errors, [name]: value });

		event.preventDefault();
		if (validateForm(state.errors)) {
			console.info("Valid Form");
		} else {
			console.error("Invalid Form");
		}
	};

	const { errors } = state;
	return (
		<Context.Consumer>
			{({ actions, store }) => (
				<div className="container col-4 mx-auto mt-5">
					<ModalPayment show={showPayment} onClose={() => setShowPayment(false)} />
					<div className="row mx-auto">
						<div className="panel panel-default">
							<div className="panel-body">
								<h3>Shipping Address</h3>
								<div className="form-row mt-4">
									<form onSubmit={handleChange} noValidate />
									<div className="firstName col-md-6 text-left">
										<label htmlFor="firstName">FIRST NAME</label>
										<input
											name="firstName"
											type="text"
											className="form-control"
											placeholder="First Name"
											id="firstName"
											value={state.firstName}
											onChange={handleChange}
											noValidate
										/>
										{errors.firstName.length > 0 && (
											<span className="error">{errors.firstName}</span>
										)}
									</div>
									<div className="lastName col-md-6 text-left">
										<label htmlFor="lastName">LAST NAME</label>
										<input
											type="text"
											className="form-control"
											placeholder="Last Name"
											id="lastName"
											name="lastName"
											value={state.lastName}
											onChange={handleChange}
											noValidate
										/>
										{errors.lastName.length > 0 && <span className="error">{errors.lastName}</span>}
									</div>
								</div>
								<div className="form-group">
									<label>STREET ADDRESS</label>
									<input
										type="text"
										className="form-control"
										placeholder="Full Address with apt #"
										id="streetAddress"
										name="streetAddress"
										value={state.streetAddress}
										onChange={handleChange}
										noValidate
									/>
									{errors.streetAddress.length > 0 && (
										<span className="error">{errors.streetAddress}</span>
									)}
								</div>
								<div className="form-row d-flex justify-content-between">
									<div className="form-group col-md-6 text-left">
										<label htmlFor="city">CITY</label>
										<input
											type="text"
											className="form-control"
											placeholder="City"
											id="city"
											name="city"
											value={state.city}
											onChange={handleChange}
											noValidate
										/>
										{errors.city.length > 0 && <span className="error">{errors.city}</span>}
									</div>
									<div className="form-group col-md-3 text-left">
										<label htmlFor="inputState">STATE</label>
										<select
											className="form-control"
											id="theState"
											name="theState"
											value={state.city}
											onChange={handleChange}
											noValidate>
											<option value="">{state.theState ? state.theState : "Pick a state"}</option>
											<option value="AK">Alaska</option>
											<option value="AL">Alabama</option>
											<option value="AR">Arkansas</option>
											<option value="AZ">Arizona</option>
											<option value="CA">California</option>
											<option value="CO">Colorado</option>
											<option value="CT">Connecticut</option>
											<option value="DC">District of Columbia</option>
											<option value="DE">Delaware</option>
											<option value="FL">Florida</option>
											<option value="GA">Georgia</option>
											<option value="HI">Hawaii</option>
											<option value="IA">Iowa</option>
											<option value="ID">Idaho</option>
											<option value="IL">Illinois</option>
											<option value="IN">Indiana</option>
											<option value="KS">Kansas</option>
											<option value="KY">Kentucky</option>
											<option value="LA">Louisiana</option>
											<option value="MA">Massachusetts</option>
											<option value="MD">Maryland</option>
											<option value="ME">Maine</option>
											<option value="MI">Michigan</option>
											<option value="MN">Minnesota</option>
											<option value="MO">Missouri</option>
											<option value="MS">Mississippi</option>
											<option value="MT">Montana</option>
											<option value="NC">North Carolina</option>
											<option value="ND">North Dakota</option>
											<option value="NE">Nebraska</option>
											<option value="NH">New Hampshire</option>
											<option value="NJ">New Jersey</option>
											<option value="NM">New Mexico</option>
											<option value="NV">Nevada</option>
											<option value="NY">New York</option>
											<option value="OH">Ohio</option>
											<option value="OK">Oklahoma</option>
											<option value="OR">Oregon</option>
											<option value="PA">Pennsylvania</option>
											<option value="PR">Puerto Rico</option>
											<option value="RI">Rhode Island</option>
											<option value="SC">South Carolina</option>
											<option value="SD">South Dakota</option>
											<option value="TN">Tennessee</option>
											<option value="TX">Texas</option>
											<option value="UT">Utah</option>
											<option value="VA">Virginia</option>
											<option value="VT">Vermont</option>
											<option value="WA">Washington</option>
											<option value="WI">Wisconsin</option>
											<option value="WV">West Virginia</option>
											<option value="WY">Wyoming</option>
										</select>
									</div>
									{errors.theState.length > 0 && <span className="error">{errors.theState}</span>}
									<div className="form-group col-md-3 text-left">
										<label htmlFor="inputZip">ZIP CODE</label>
										<input
											type="text"
											className="form-control"
											placeholder="Zip Code"
											id="zipCode"
											name="zipCode"
											value={state.zipCode}
											onChange={handleChange}
											noValidate
										/>
										{errors.zipCode.length > 0 && <span className="error">{errors.zipCode}</span>}
									</div>
								</div>
								<div className="row mx-auto mt-3">
									<div className="inlineimage">
										<img
											className="img-responsive images"
											src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/Mastercard-Curved.png"
										/>
										<img
											className="img-responsive images"
											src="data:image/png;base64,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"
										/>
										<img
											className="img-responsive images"
											src="https://cdn0.iconfinder.com/data/icons/credit-card-debit-card-payment-PNG/128/American-Express-Curved.png"
										/>
										<img
											className="img-responsive images"
											src="https://seeklogo.com/images/D/-logo-C2F4F2FB11-seeklogo.com.png"
										/>
									</div>
								</div>
							</div>
							<div className="panel-body">
								<form role="form">
									<div className="row">
										<div className="form-group ml-3">
											<label>CARD NUMBER</label>
											<div className="input-group">
												<input
													type="tel"
													className="form-control"
													placeholder="Valid Card Number"
													id="cardNumber"
													name="cardNumber"
													value={state.cardNumber}
													onChange={handleChange}
													noValidate
												/>
												{errors.cardNumber.length > 0 && (
													<span className="error">{errors.cardNumber}</span>
												)}
												<span className="input-group-addon">
													<span className="fa fa-credit-card" />
												</span>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="form-group ml-3">
											<label>
												<span>EXPIRATION</span>
											</label>
											<input
												type="tel"
												className="form-control"
												placeholder="MM / YY"
												id="expDate"
												name="expDate"
												onChange={handleChange}
												noValidate
											/>
											{errors.expDate.length > 0 && (
												<span className="error">{errors.expDate}</span>
											)}
										</div>
										<div className="form-group ml-3">
											<label>CV CODE</label>
											<input
												type="tel"
												className="form-control"
												placeholder="CVC"
												id="cvv"
												name="cvv"
												onChange={handleChange}
												noValidate
											/>
											{errors.cvv.length > 0 && <span className="error">{errors.cvv}</span>}
										</div>
									</div>
									<div className="row">
										<div className="form-group ml-3">
											<label>CARD OWNER</label>
											<input
												type="text"
												className="form-control"
												placeholder="Card Owner Name"
												id="cardOwner"
												name="cardOwner"
												onChange={handleChange}
												noValidate
											/>
											{errors.cardOwner.length > 0 && (
												<span className="error">{errors.cardOwner}</span>
											)}
										</div>
									</div>
								</form>
							</div>
							{store.buynow ? (
								<div>
									<div className="card col-9 mb-3">
										<div className="row no-gutters">
											<div className="col-md-4">
												<img src={store.buynow.image} className="card-img" alt="..." />
											</div>
											<div className="col-md-8">
												<div className="card-body">
													<h5 className="card-title">{store.buynow.name}</h5>
													<p className="card-text cardText">
														{store.buynow.color == "default" ? null : store.buynow.color}
													</p>
													<p className="card-text cardText">
														{store.buynow.size && store.buynow.size}
													</p>
													<p className="card-text cardText">
														Qty: &nbsp; {store.buynow.units}
													</p>
													<p className="card-text cardText">{store.buynow.subTotal}</p>
												</div>
											</div>
										</div>
									</div>
									<h3>Sub Total: &nbsp; &nbsp; {store.buynow.subTotal}</h3>
								</div>
							) : null}
							{store.buynow
								? null
								: store.cart.map((item, index) => <CartPayment key={index} item={item} />)}
							{store.buynow ? null : <h3>Sub Total: {actions.subTotal()}</h3>}
							<div className="panel-footer">
								{validateForm(state.errors) && (
									<div className="panel-footer">
										<div className="row">
											<button
												className="btn btn-success btn-lg btn-block"
												onClick={() => {
													store.buynow
														? actions.confirmBuyNowPayment(store.buynow)
														: store.cart.forEach((item, index) => {
																return actions.confirmBuyNowPayment(item);
														  });
													let transaction = {
														date: todaysDate(),
														card: last4(cardNumber.value),
														price: subTotalFunction(),
														status: "pending"
													};
													actions.addTransaction(transaction);
													handleShowPayment();
													actions.clearBuyNow();
													actions.clearCart();
													actions.updateTransaction();
												}}>
												Confirm Payment
											</button>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</Context.Consumer>
	);
};

Payment.propTypes = {
	product: PropTypes.object,
	key: PropTypes.number,
	location: PropTypes.object
};

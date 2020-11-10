import React, { useContext, useEffect, useState } from "react";
import "../../styles/register.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Product } from "../component/productcard";
import PropTypes from "prop-types";

const validEmailRegex = RegExp(
	/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateForm = errors => {
	let valid = true;
	Object.values(errors).forEach(
		// if we have an error string set valid to false
		val => val.length > 0 && (valid = false)
	);
	return valid;
};

export class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			errors: {
				firstName: " ",
				email: " ",
				password: " "
			}
		};
	}
	handleChange = event => {
		event.preventDefault();
		const { name, value } = event.target;
		let errors = this.state.errors;

		switch (name) {
			case "firstName":
				errors.firstName = value.length < 1 ? "This field is required *" : "";
				break;
			case "email":
				errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
				break;
			case "password":
				errors.password = value.length < 8 ? "Password must be atleast 8 characters long!" : "";
				break;
			default:
				break;
		}

		this.setState({ errors, [name]: value });

		event.preventDefault();
		if (validateForm(this.state.errors)) {
			console.info("Valid Form");
		} else {
			console.error("Invalid Form");
		}
	};

	render() {
		const { errors } = this.state;
		return (
			<Context.Consumer>
				{({ actions, store }) => (
					<div className="container col-4 mt-5 loginBox">
						<div className="row">
							<div className="col-md-5 mx-auto">
								<div id="second">
									<div className="myform form ">
										<div className="logo mb-3">
											<div className="col-md-12 text-center">
												<h1>Sign Up</h1>
												<small>please fill all required * feilds</small>
											</div>
										</div>
										<form onSubmit={this.handleChange} noValidate>
											<div className="firstName">
												<label htmlFor="firstName">First Name *</label>
												<input
													type="text"
													name="firstName"
													id="firstName"
													className="form-control"
													aria-describedby="emailHelp"
													placeholder="Enter Firstname"
													onChange={this.handleChange}
													noValidate
												/>
												{errors.firstName.length > 0 && (
													<span className="error">{errors.firstName}</span>
												)}
											</div>
											<div className="lastName">
												<label htmlFor="lastName">Last Name</label>
												<input
													type="text"
													name="lastName"
													className="form-control"
													id="lastName"
													aria-describedby="emailHelp"
													placeholder="Enter Lastname"
													onChange={this.handleChange}
												/>
											</div>
											<div className="email">
												<label htmlFor="email">Email address *</label>
												<input
													type="email"
													name="email"
													className="form-control"
													id="email"
													aria-describedby="emailHelp"
													placeholder="Enter email"
													onChange={this.handleChange}
													noValidate
												/>
												{errors.email.length > 0 && (
													<span className="error">{errors.email}</span>
												)}
											</div>
											<div className="password mb-2">
												<label htmlFor="password">Password *</label>
												<input
													type="password"
													name="password"
													id="password"
													className="form-control"
													aria-describedby="emailHelp"
													placeholder="Enter Password"
													onChange={this.handleChange}
													noValidate
												/>
												{errors.password.length > 0 && (
													<span className="error">{errors.password}</span>
												)}
											</div>
											<br />
											{validateForm(this.state.errors) && (
												<div className="col-md-12 text-center mb-3">
													<Link to={"/login"}>
														<button
															onClick={e => {
																let user = {
																	firstName: this.state.firstName,
																	lastName: this.state.lastName,
																	email: this.state.email,
																	password: this.state.password
																};
																actions.addUser(user);
															}}
															type="submit"
															className=" btn btn-block mybtn btn-primary tx-tfm mt-2 submit">
															REGISTER
														</button>
													</Link>
												</div>
											)}
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</Context.Consumer>
		);
	}
}

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

export class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			errors: {
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
								<div id="first">
									<div className="myform form ">
										<div className="logo mb-3">
											<div className="col-md-12 text-center">
												<h1>Login</h1>
											</div>
										</div>
										<form onSubmit={this.handleChange} noValidate>
											<div className="email">
												<label htmlFor="email">Email address</label>
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
											<div className="password">
												<label htmlFor="password">Password</label>
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
												<div className="col-md-12 text-center ">
													<Link to={"/home"}>
														<button
															onClick={() => actions.logging()}
															type="submit"
															className=" btn btn-block mybtn btn-primary tx-tfm">
															LOGIN
														</button>
													</Link>
												</div>
											)}
											<div className="form-group mt-3">
												<h5 className="text-center">Dont have account?</h5>
											</div>
										</form>
									</div>
									<Link to={"/signup"}>
										<div className="col-md-12 text-center mb-3">
											<button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">
												REGISTER
											</button>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				)}
			</Context.Consumer>
		);
	}
}

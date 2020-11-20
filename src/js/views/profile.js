import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Profile = props => {
	const { store, actions } = useContext(Context);

	const [userInfo, setUserInfo] = useState({
		firstName: store.user.firstName,
		lastName: store.user.lastName,
		email: store.user.email,
		password: store.user.password,
		streetAddress: store.user.streetAddress,
		city: store.user.city,
		theState: store.user.theState,
		zipCode: store.user.zipCode
	});

	const handleChange = e => {
		setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
	};

	return (
		<div className="container loginBox col-3">
			<div>
				<h1 className="text-center mt-2">Profile</h1>
				<small className="">* to edit any field just start typing then hit save *</small>

				<form>
					<div className="form-group d-flex justify-content-between profileLabels mt-2">
						<label className="mt-1">First Name:</label>
						<input
							type="text"
							name="firstName"
							className="form-control col-10 profileInputs"
							value={userInfo.firstName}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group d-flex justify-content-between profileLabels">
						<label className="mt-1">Last Name:</label>
						<input
							type="text"
							name="lastName"
							className="form-control col-10 profileInputs"
							value={userInfo.lastName}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group d-flex justify-content-between profileLabels">
						<label className="mt-1">
							Email:
							<br />
							&nbsp;
						</label>
						<input
							type="email"
							name="email"
							className="form-control col-10 profileInputs"
							value={userInfo.email}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group  d-flex justify-content-between profileLabels">
						<label className="mt-1">
							Password:
							<br />
							&nbsp;
						</label>
						<input
							type="password"
							name="password"
							className="form-control col-10 profileInputs"
							value={userInfo.password}
							onChange={handleChange}
						/>
					</div>
					{/* <div className="form-group d-flex justify-content-between profileLabels">
						<label className="mt-1">Address:</label>
						<input
							type="text"
							name="streetAddress"
							placeholder="save street address for future use..."
							className="form-control col-10 profileInputs"
							value={userInfo.streetAddress}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group  d-flex justify-content-between profileLabels">
						<label className="mt-1">City:</label>
						<input
							type="text"
							name="city"
							placeholder="save city for future use..."
							className="form-control col-10 profileInputs"
							value={userInfo.city}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group d-flex justify-content-between profileLabels">
						<label className="mt-1">State:</label>
						<input
							type="text"
							name="theState"
							placeholder="save state for future use..."
							className="form-control col-10 profileInputs"
							value={userInfo.theState}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group d-flex justify-content-between profileLabels">
						<label className="mt-1">Zip Code:</label>
						<input
							type="text"
							name="zipCode"
							placeholder="save zip code for future use..."
							className="form-control col-10 profileInputs"
							value={userInfo.zipCode}
							onChange={handleChange}
						/>
					</div> */}
					<button
						type="button"
						className="btn btn-primary form-control mb-3"
						onClick={() => actions.editProfile(userInfo)}>
						SAVE
					</button>
					<div className="d-flex justify-content-center">
						<Link to="/transactions">
							<button className="btn cartButton mr-1">
								<strong>TRANSACTIONS</strong>
							</button>
						</Link>
						<Link to="/history">
							<button className="btn cartButton ml-1">
								<strong>PURCHASE HISTORY</strong>
							</button>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

Profile.propTypes = {
	match: PropTypes.object
};

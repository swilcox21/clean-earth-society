import React, { useContext, useState } from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.scss";

export const NavBar = () => {
	const { store, actions } = useContext(Context);
	const [showDropdown, setShowDropdown] = useState(false);
	const [clickedDropDown, setClickedDropdown] = useState(false);
	let show = "";
	if (clickedDropDown) show = "show";
	return (
		<div className="container-fluid bg-dark">
			<nav className="navbar d-flex justify-content-between" id="myNavBar">
				<Link to={`/home`}>
					<span className="homebutton ml-5">
						<i className="fas fa-recycle" /> C. E. S.
					</span>
				</Link>
				<Link to={`/charities`}>
					<span className="navbar-brand navLinks">CHARITIES</span>
				</Link>
				<Link to={`/shop`}>
					<span className="navbar-brand navLinks">SHOP</span>
				</Link>
				<Link to={`/about`}>
					<span className="navbar-brand navLinks">ABOUT</span>
				</Link>

				<a className={"nav-item dropdown row" + (showDropdown ? "show" : "")}>
					<Link to="/cart">
						<span className="shopcart">
							<i className="fas fa-shopping-cart" />
						</span>
					</Link>
					<button
						className="faves btn nav-link dropdown-toggle"
						href="#"
						id="navbarDropdown"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded={clickedDropDown}
						onClick={() => setClickedDropdown(!clickedDropDown)}>
						<span className="badge badge-secondary">
							&nbsp; &nbsp;
							{store.cart.length}
						</span>
					</button>
					<div
						className={store.cart.length > 0 ? "dropdown-menu " + show : "d-none"}
						aria-labelledby="navbarDropdown">
						{store.cart.length > 0
							? store.cart.map((elm, index) => (
									<li
										key={index}
										className="dropdown-item d-flex align-items-center justify-content-between">
										<Link to={`/cart`}>
											{elm.name} &nbsp; {elm.units}
										</Link>
										&nbsp;&nbsp;
										<i className="fas fa-backspace" onClick={() => actions.deleteFromCart(index)} />
									</li>
							  ))
							: null}
					</div>
				</a>
				{store.token ? (
					<>
						<Link to="/profile">
							<h5 className="welcome">Welcome, {store.user.firstName}</h5>
						</Link>
						<span className="logoutButton" onClick={() => actions.logOut(store.token)}>
							<Link to="/home">
								<span className="navbar-brand signup">LOGOUT</span>
							</Link>
						</span>
					</>
				) : (
					<Link to={`/login`}>
						<span className="navbar-brand signup">LOGIN</span>
					</Link>
				)}
			</nav>
		</div>
	);
};

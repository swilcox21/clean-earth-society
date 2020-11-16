import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const ModalPayment = props => {
	const [state, setState] = useState({
		//initialize state here
	});
	const { actions, store } = useContext(Context);
	const handleDoIt = () => {
		actions.deleteContact(props.id);
		props.onClose();
	};

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header paymentModal">
						<h3 className="paymentModalTitle">Your Purchase has been Confirmed! Thank You!</h3>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-footer mx-auto">
						<Link to="/shop">
							<button
								type="button"
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-primary"
								onClick={() => props.onClose()}
								data-dismiss="modal">
								Continue Shopping
							</button>
						</Link>
						<Link to="/transactions">
							<button
								type="button"
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-secondary"
								onClick={() => props.onClose()}
								data-dismiss="modal">
								Transactions
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
ModalPayment.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
ModalPayment.defaultProps = {
	show: false,
	onClose: null,
	id: null
};

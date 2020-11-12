import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const ModalEcology = props => {
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
					<div className="modal-header">
						<h3 className="modal-title">Ecology Center! GREAT CHOICE!!</h3>
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
					<div className="modal-body">
						<h5>
							<strong>We will now be redirecting you to their donations screen</strong>
						</h5>
						<p>once there you can fill out all of the required fields to submit your donation</p>
						<p>
							on behalf of C.E.S. we would like to say thanks for your generosity please feel free to
							revisit and check out our shop to help support this site =]
						</p>
					</div>
					<div className="modal-footer mx-auto">
						<a
							type="button"
							href="https://secure.donationpay.org/ecologycenter/"
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-success"
							onClick={() => props.onClose()}
							data-dismiss="modal">
							PROCEED
						</a>
						<button type="button" className="btn btn-secondary" onClick={() => props.onClose()}>
							STAY PUT
						</button>
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
ModalEcology.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
ModalEcology.defaultProps = {
	show: false,
	onClose: null,
	id: null
};

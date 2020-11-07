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
	return (
        <>
        </>
    );
};

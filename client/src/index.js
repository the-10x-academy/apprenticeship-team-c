import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./Components/HomePage/HomePage";

import HomePage from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
	<React.StrictMode>
		<HomePage />
	</React.StrictMode>,
	rootElement,
);

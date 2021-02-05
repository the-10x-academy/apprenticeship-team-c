
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./Components/HomePage/HomePage";

import reportWebVitals from "./reportWebVitals";
import HomePage from "./App";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
	<React.StrictMode>
		<HomePage />
	</React.StrictMode>,
	document.getElementById("root"),
);

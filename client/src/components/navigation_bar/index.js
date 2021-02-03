import React, { Component } from "react";
import "./header.css";
import clone from "./images/icon.png";
import camera from "./images/camera.png";
import { Link } from "react-router-dom";

class Navbar extends Component {
	render() {
		return (
			<>
				<div class="parentDiv">
					<div class="logoAndText">
						<img className="logo" src={clone} alt="" />
						<p className="instaclone"> Instaclone </p>
					</div>
					<div class="cameraIcon">
						<Link to="/post/create">
							<img className="camera" src={camera} alt="" />
						</Link>
					</div>
				</div>
			</>
		);
	}
}

export default Navbar;

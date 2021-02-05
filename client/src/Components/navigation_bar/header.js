import React, { Component } from "react";
import "./header.css";
import clone from "./images/icon.png";
import camera from "./images/camera.png";
import {Link} from "react-router-dom"

class Navbar extends Component {
	render() {
		return (
			<>
				<div class="parentDiv">
					<div class="header-content">
						<div class="logoAndText">
							<img className="logo" src={clone} alt="" />
							<p className="instaclone"> Instaclone </p>
						</div>
			<Link to="/post/create">
						<div class="cameraIcon">
							<img className="camera" src={camera} alt="" />
						</div>
						</Link>
					</div>
				</div>
			</>
		);
	}
}

export default Navbar;

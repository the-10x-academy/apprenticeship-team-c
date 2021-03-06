import React, { Component } from "react";
import "./header.css";
import clone from "./images/icon.png";
import camera from "./images/camera.png";
import { Link } from "react-router-dom"

class Navbar extends Component {
	render() {
		return (

			<div className="parentDiv">
				<div className="header-content">
					<div className="logoAndText">
						<img className="logo" src={clone} alt="" />
						<Link to="/post"><p className="instaclone"> Instaclone </p>
						</Link>
					</div>
					<Link to="/post/create">
						<div className="cameraIcon">
							<img className="camera" src={camera} alt="" />
						</div>
					</Link>
				</div>
			</div>

		);
	}
}

export default Navbar;

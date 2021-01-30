import React, { Component } from 'react';
import "./header.css";
import clone from "./images/icon.png";
import camera from "./images/camera.png"


class Navbar extends Component{
    render(){
        return(
            <>
                <nav className="NavbarItems">
                    <img className="Navbar-logo" src={clone} alt="logo" ></img>
                    <p className="instaclone">Instaclone</p>
                    <img className="camera" src={camera} alt="camera" ></img>
                </nav>
            </>
        )
    }
}

export default Navbar;
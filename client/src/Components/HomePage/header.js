import React, { Component } from 'react';
import "./header.css";
import clone from "./images/icon.png";
import camera from "./images/camera.png"


class Navbar extends Component{
    render(){
        return(
            <>
                <div class="parentDiv">
                    <div class="logoAndText">
                        <img className="logo" src={clone} alt="" />
                        <p className = "instaclone"> Instaclone </p>
                    </div>
                    <div class="cameraIcon">
                        <img className="camera" src={camera} alt="" />
                    </div>
                
                </div>
            </>
        )
    }
}

export default Navbar;



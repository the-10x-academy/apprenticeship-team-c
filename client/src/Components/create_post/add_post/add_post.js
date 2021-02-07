import React from "react";
import Navbar from "../../navigation_bar/header";
import "./add_post.css";

function AddPost() {
	return (
		<>
		<Navbar />
		<div className="boxComponents">
			<div className="dataCollection">
				<input className="inputFile"  placeholder="No file chosen"></input>
				<button className="browseButton" >Browse</button>
			</div>
			<div className="infoCollection">
				<input className="authorName" placeholder="Author"></input>
				<input className="itemLocation" placeholder="Location"></input>
			</div>
			<div className="descriptionAdding">
				<input className="itemCaption" placeholder="Description"></input>
			</div>
			<div className="postElement">
				<button className="postButton">Post</button>
			</div>
		</div>
		</>
	);
}

export default AddPost;

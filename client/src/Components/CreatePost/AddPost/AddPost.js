import React from "react";
import "./AddPost.css";

function AddPost() {
	return (
		<div className="BoxComponents">
			<div className="part1">
				<input className="inputFile" placeholder="No file chosen"></input>
				<button className="BrowseButton">Browse</button>
			</div>
			<div className="part2">
				<input className="authorName" placeholder="Author"></input>
				<input className="itemLocation" placeholder="Location"></input>
			</div>
			<div className="part3">
				<input className="itemCaption" placeholder="Description"></input>
			</div>
			<div className="part4">
				<button className="PostButton">Post</button>
			</div>
		</div>
	);
}

export default AddPost;

import React, { Component } from "react";
import AddPost from "./AddPost/AddPost";
import Navbar from "../navBar/header";

class CreatePost extends Component {
	render() {
		return (
			<>
				<div>
					<Navbar />
					<AddPost />
				</div>
			</>
		);
	}
}

export default CreatePost;

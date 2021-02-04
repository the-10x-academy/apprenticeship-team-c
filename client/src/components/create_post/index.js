import React, { Component } from "react";
import AddPost from "./add_post";
import Navbar from "../navigation_bar";

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

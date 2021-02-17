import React, { useState } from "react";
import Navbar from "../../navigation_bar/header";
import "./add_post.css";
import Axios from "axios";
import {Link} from "react-router-dom";

function AddPost() {

	const [file, setFile] = useState("");
	const [author, setAuthor] = useState("");
	const [caption, setCaption] = useState("");
	const [location, setLocation] = useState("");

	var enableButton =
		(location.length === 0) || (file.length === 0) || (caption.length === 0) || (author.length === 0);

	const locationChangeHandler = (e) => {
		setLocation(e.target.value);
	};

	const authorChangeHandler = (e) => {
		setAuthor(e.target.value);
	};
	const captionChangeHandler = (e) => {
		setCaption(e.target.value);
	};

	const hiddenFileInput = React.useRef(null);
	const fileChangeHandler = (e) => {
		const file = e.target.files[0];
		setFile(file);
	};

	const send = (e) => {
		const data = new FormData();
		data.append("author", author);
		data.append("caption", caption);
		data.append("location", location);
		data.append("file", file);

		Axios.post("http://localhost:9000/upload", data)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};
	console.log("test", enableButton);

	const handleClick = (event) => {
		hiddenFileInput.current.click();
	  };
	  
	return (
		<>
			<Navbar />

			<div className="boxComponents">
				<div className="dataCollection">
					<input className="inputFile" placeholder="No file choosen" value={file.name}></input>
					<button className="browseButton" onClick={ handleClick }>Browse</button>
					<input
						type="file"
						onChange={fileChangeHandler}
						ref={ hiddenFileInput }
						style={{ display: "none" }}
					></input>
				</div>
				<div className="infoCollection">
					<input
						className="authorName"
						placeholder="Author"
						value={author}
						onChange={authorChangeHandler}
					></input>
					<input
						className="itemLocation"
						placeholder="Location"
						value={location}
						onChange={locationChangeHandler}
					></input>
				</div>
				<div className="descriptionAdding">
					<input
						className="itemCaption"
						placeholder="Description"
						value={caption}
						onChange={captionChangeHandler}
					></input>
				</div>
				<div className="postElement">
				<Link to="/post/">
					<button className="postButton" disabled={enableButton} onClick={send}>
						Post
					</button>
					</Link>
				</div>
			</div>
		</>
	);
}

export default AddPost;

import React, { useState } from "react";
import Navbar from "../../navigation_bar/header";
import "./add_post.css";
import Axios from 'axios';

function AddPost() {
	const [file, setFile]=useState("filename")
	const [author, setAuthor]=useState("")
	const [caption, setCaption]=useState("")
	const [location , setLocation]=useState("")
	
	const locationChangeHandler=(e)=>{
		setLocation(e.target.value)
		console.log("location: ",location)
	}
	
	const authorChangeHandler=(e)=>{
		setAuthor(e.target.value)
		console.log("author: ", author)
	}
	const captionChangeHandler=(e)=>{
		setCaption(e.target.value)
		console.log("Caption: ", caption)
	}

	const fileChangeHandler=(e)=>{
		const file = e.target.files[0]
		setFile(file)
		console.log("file: ",file )
	}

	const send=(e)=>{
		const data = new FormData()
		data.append("author", author)
		data.append("caption", caption)
		data.append("location", location)
		data.append("file", file)


		Axios.post("http://localhost:9000/upload",data).then(res=>(console.log(res))).catch(err=>console.log(err))
		
		

	}

	return (
		<>
		
		<div className="boxComponents">
			<div className="dataCollection">
				<input className="inputFile"  value={file.name} ></input>
				<input type="file" onChange={fileChangeHandler} className="browseButton" name="upload-image" ></input>
			</div>
			<div className="infoCollection">
				<input className="authorName" placeholder="Author" value={author} onChange={authorChangeHandler} ></input>
				<input className="itemLocation" placeholder="Location" value={location} onChange={locationChangeHandler}></input>
			</div>
			<div className="descriptionAdding">
				<input className="itemCaption" placeholder="Description" value={caption} onChange={captionChangeHandler}></input>
			</div>
			<div className="postElement">
				<button className="postButton" onClick={send} >Post</button>
			</div>
		</div>
		</>
	);
}

export default AddPost;

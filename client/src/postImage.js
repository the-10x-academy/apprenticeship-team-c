import React from "react";
import "./postImage.css";
import Details from "./details";
import Header from "./header";

function PostImage() {
	return (
		<div>
			<Header />
			<div className="post-card">
				<Details
					Name="siva"
					place="Bengaluru"
					image="https://i.ytimg.com/vi/5sTg4Oeh2rM/maxresdefault.jpg"
					date="10 Jan 2021"
					likes="64"
					heading="Kick start your career"
				/>

				<Details
					Name="Sameer"
					place="San Francisco"
					image="https://i.ytimg.com/vi/5sTg4Oeh2rM/maxresdefault.jpg"
					date="06 Jan 2021"
					likes="999"
					heading="Beautiful Big Sur"
				/>
				<Details
					Name="Prabal"
					place="Las vegas"
					image="https://i.ytimg.com/vi/5sTg4Oeh2rM/maxresdefault.jpg"
					date="31 dec 2020"
					likes="999999"
					heading="Lets Play Big"
				/>
			</div>
		</div>
	);
}

export default PostImage;

import React from "react";
import "../post_component.css";
import PostCard from "../post_card/post_card";
import Header from "../../navigation_bar/header";

function PostList() {
	return ( <div className="outerDiv">
			<Header />
		<div className="postList">
			<div className="post-card">
				<PostCard
					name="siva"
					place="Bengaluru"
					image="https://i.ytimg.com/vi/5sTg4Oeh2rM/maxresdefault.jpg"
					date="10 Jan 2021"
					likes="64"
					heading="Kick start your career"
				/>

				<PostCard
					name="Sameer"
					place="San Francisco"
					image="https://i.ytimg.com/vi/5sTg4Oeh2rM/maxresdefault.jpg"
					date="06 Jan 2021"
					likes="999"
					heading="Beautiful Big Sur"
				/>
				<PostCard
					name="Prabal"
					place="Las vegas"
					image="https://i.ytimg.com/vi/5sTg4Oeh2rM/maxresdefault.jpg"
					date="31 dec 2020"
					likes="999999"
					heading="Lets Play Big"
				/>
			</div>
		</div>
		</div>
	);
}

export default PostList;

import React, { useState, useEffect } from "react";
import "../post_component.css";
import PostCard from "../post_card/post_card";
import Header from "../../navigation_bar/header";
function PostList() {
    const [postDetails, getPostDetails] = useState([]);
    async function callAPI() {
        const res = await fetch("http://localhost:9000/posts");
        res.json().then((res) => getPostDetails(res));
        console.log("here", res)
    }
    useEffect(() => {
        callAPI();
        console.log("called");
    }, []);
    let PostDetails1 = [...postDetails];
    return (
        <div className="outerDiv">
            <Header />
            <div className="postList">
                <div className="post-card">
                {PostDetails1.reverse().map((item) => (
                <PostCard
                    name={item.author}
                    key={item.id}
                    place={item.location}
                    heading={item.caption}
                    image={item.filePath}
                    likes={item.reaction}
                    date={item.timestamp}
                />))}
                </div>
            </div>
        </div>
    );
}
export default PostList;
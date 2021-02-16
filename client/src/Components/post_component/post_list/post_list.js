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
                />
            ))}
                    {/* <PostCard
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
                    /> */}
                </div>
            </div>
        </div>
    );
}
export default PostList;
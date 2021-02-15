

import PostDetails from "../post_details/post_details"
import PostHeader from "../post_header/Post_header"
function PostCard(props) {
	return (
		<div className="card">
			<PostHeader name={props.name} place={props.place} image={props.image} />
			<PostDetails date={props.date} likes={props.likes} heading={props.heading} />
		</div>
	);
}
export default PostCard;

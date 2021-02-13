

import PostDetails from "../post_details/post_details"
import PostHeader from "../post_header/Post_header"
function PostCard(props) {
	return (
		<div className="card">
			<PostHeader name={props.name} place={props.place} image={props.image} />
			<PostDetails dates={props.dates} likes={props.likes} headings={props.headings} />
		</div>
	);
}
export default PostCard;

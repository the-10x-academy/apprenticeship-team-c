import { useState } from "react";
function PostHeader(props) {
	const [del, getdel] = useState(false);
	const deletepost = async (e) => {
		console.log(props.id);
		const data = new FormData();
		data.append("id", props.id);
		await fetch("http://localhost:9000/delete/" + props.id, {
			method: "POST",
			body: data,
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};
	const Delpost = () => {
		return <button onClick={deletepost}>delete</button>;
	};
	return (
		<div>
			<div className="card-header">
				<div className="left-part">
					<p className="author-name">{props.name}</p>
					<p className="author-city">{props.place}</p>
				</div>
				<div className="right-part" onClick={() => getdel(true)}>
					{del ? <Delpost /> : <p></p>}
					<div className="dot" />
					<div className="dot" />
					<div className="dot" />
				</div>
			</div>
			<div className="card-body">
				<img
					className="postimg"
					src={"http://localhost:9000/" + props.image}
					alt="loading"
				/>
			</div>
		</div>
	);
}
export default PostHeader;

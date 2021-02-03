import "./postImage.css";
import heart from "./heart.png";
import share from "./share.png";
function Details(props) {
	return (
		<div className="card">
			<div className="card-header">
				<div className="left-part">
					<p className="author-name">{props.Name}</p>
					<p className="author-city">{props.place}</p>
				</div>
				<div className="right-part">
					<div className="dot" />
					<div className="dot" />
					<div className="dot" />
				</div>
			</div>
			<div className="card-body">
				<img className="postimg" src={props.image} alt="loading" />
			</div>
			<div className="card-footer">
				<div className="footer-row">
					<div className="footer-left-part">
						<img className="likebut" src={heart} alt="like" />
						<img className="sharebut" src={share} alt="share" />
					</div>
					<div className="footer-right-part"> {props.date} </div>
				</div>
				<p> {props.likes} likes </p>
				<p className="card-title"> {props.heading} </p>
			</div>
		</div>
	);
}
export default Details;

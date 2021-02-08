import heart from "./images/heart.png"
import share from "./images/share.png"
function PostDetails(props) {
    return (
        <div>
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
export default PostDetails;

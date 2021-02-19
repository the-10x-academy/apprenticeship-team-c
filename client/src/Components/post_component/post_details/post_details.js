import { useState } from "react"
import heart from "./images/heart.png"
import share from "./images/share.png"
import Axios from "axios";


function PostDetails(props) {
    const [likeCount, setLikeCount] = useState(props.likes);

    const likesHandler = (e) => {
        Axios.patch('http://localhost:9000/likes/'+props.id,
            {   
                "reaction": likeCount+1
            },

        );
        setLikeCount(likeCount + 1)

    }


    const formatedDate = (s) => {
        // 2021-02-17T06:03:44.556Z
        let res = "";
        res += s[8] + s[9];
        let m = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        let i = parseInt(s[5] + s[6]);
        res += " " + m[i - 1] + " ";
        res += s[0] + s[1] + s[2] + s[3];
        return res;
    }

    return (
        <div>
            <div className="card-footer">
                <div className="footer-row">
                    <div className="footer-left-part">
                        <img
                            className="likebut"
                            src={heart}
                            alt="like"
                            onClick={likesHandler}
                        />
                        <img className="sharebut" src={share} alt="share" />
                    </div>
                    <div className="footer-right-part"> {formatedDate(props.date)} </div>
                </div>
                <p> {likeCount} likes </p>
                <p className="card-title"> {props.heading} </p>
            </div>
        </div>
    );
}
export default PostDetails;

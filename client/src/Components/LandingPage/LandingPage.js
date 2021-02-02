import logo from "../../logo.svg";
import "./LandingPage.css";
import LandingPageImg from "./img/homePage-img.png"
import {Link} from "react-router-dom"
function LandingPage() {
    return (< div className="landingPage" >
        <div className="leftSection">
            <img src={LandingPageImg} alt="Landing-Page-img" className="homePage-img" />
        </div>
        <div className="rightSection">
            <div className="rightSideContent">
                <h1 className="teamHeading"> 10X Team-C </h1>
                <Link to="/post"><button className="enter-btn"> Enter </button></Link>
            </div>
        </div>
    </div>
    );
}

export default LandingPage;
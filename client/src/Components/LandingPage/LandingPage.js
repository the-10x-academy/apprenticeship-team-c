import logo from "../../logo.svg";
import "./LandingPage.css";
import LandingPageImg from "./img/homePage-img.png"

function LandingPage() {
    return (< div className="landingPage" >
        <div className="leftSection">
            <img src={LandingPageImg} className="homePage-img" />
        </div>
        <div className="rightSection">
            <div className="rightSideContent">
                <h1 className="teamHeading"> 10X Team-C </h1>
                <button className="enter-btn"> Enter </button>
            </div>
        </div>
    </div>
    );
}

export default LandingPage;
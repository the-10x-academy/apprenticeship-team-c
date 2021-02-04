import "./landing_page.css";
import LandingPageImg from "./images/landing_page_image.png";
import { Link } from "react-router-dom";
function LandingPage() {
	return (
		<div className="landingPage">
			<div className="leftSection">
				<img
					src={LandingPageImg}
					alt="Landing-Page-img"
					className="homePageImage"
				/>
			</div>
			<div className="rightSection">
				<div className="rightSideContent">
					<h1 className="teamHeading"> 10X Team-C </h1>
					<Link to="/post">
						<button className="enterButton"> Enter </button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default LandingPage;

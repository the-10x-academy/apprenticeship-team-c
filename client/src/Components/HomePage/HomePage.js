import logo from "../../logo.svg";
import "./HomePage.css";
import LandingPage from "../LandingPage/LandingPage";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Navbar from "./header";
import CreatePost from "../CreatePost/CreatePost";
function HomePage() {
	return (
		<Router>
			<div className="App">
				<Switch >

					<Route path="/" exact component={LandingPage} />
					<Route path ="/post" exact component={Navbar} />
					<Route path = "/post/create" component={CreatePost} />
		</Switch>
		</div>
		</Router>
	);
}

export default HomePage;

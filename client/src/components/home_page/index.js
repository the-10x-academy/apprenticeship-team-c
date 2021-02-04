import LandingPage from "../landing_page";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "../navigation_bar";
import CreatePost from "../create_post";
function HomePage() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/" exact component={LandingPage} />
					<Route path="/post" exact component={Navbar} />
					<Route path="/post/create" component={CreatePost} />
				</Switch>
			</div>
		</Router>
	);
}

export default HomePage;

import LandingPage from "./Components/landing_page/index"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PostList from "./Components/post_component/post_list/post_list"
import CreatePost from "./Components/create_post/index";
function HomePage() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/" exact component={LandingPage} />
					<Route path="/post" exact component={PostList} />
					<Route path="/post/create" component={CreatePost} />
				</Switch>
			</div>
		</Router>
	);
}

export default HomePage;

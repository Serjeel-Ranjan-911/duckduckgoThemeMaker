import { Switch, Route, Link } from 'react-router-dom';

import Home from "./Pages/Home/Home";
import CreateScheme from './Pages/createScheme/createScheme';
import PopularThemes from "./Pages/PopularThemes/PopularThemes"

const Routes = () => {
	return (
		<Switch>
			<Route path="/create-scheme">
				<CreateScheme></CreateScheme>
			</Route>
			<Route path="/popular">
				<PopularThemes></PopularThemes>
			</Route>
			<Route path="/">
				<Home></Home>
			</Route>
			<Route path="*">
				<p>page not found</p>
			</Route>
		</Switch>
	);
};

export default Routes;

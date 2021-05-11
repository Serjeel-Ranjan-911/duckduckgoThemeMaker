import { Switch, Route, Link } from 'react-router-dom';

import CreateScheme from './Pages/createScheme/createScheme';

const Routes = () => {
	return (
		<Switch>
			<Route path="duckduckgoThemeMaker/create-scheme">
				<CreateScheme></CreateScheme>
			</Route>
			<Route path="duckduckgoThemeMaker/popular">
				<p>no popular themes yet</p>
			</Route>
			<Route path="duckduckgoThemeMaker">
				<Link to="duckduckgoThemeMaker/create-scheme">
					Create Your own theme
				</Link>
				<Link to="duckduckgoThemeMaker/popular">Popular Themes</Link>
			</Route>
			<Route path="*">
				<p>page not found</p>
			</Route>
		</Switch>
	);
};

export default Routes;

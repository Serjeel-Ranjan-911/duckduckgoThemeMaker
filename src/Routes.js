import { Switch, Route, Link } from 'react-router-dom';

import CreateScheme from './Pages/createScheme/createScheme';

const Routes = () => {
	return (
		<Switch>
			<Route path="/create-scheme">
				<CreateScheme></CreateScheme>
			</Route>
			<Route path="/popular">
				<p>no popular themes yet</p>
			</Route>
			<Route path="/">
				<Link to="/create-scheme">Create Your own theme</Link>
				<Link to="/popular">Popular Themes</Link>
			</Route>
			<Route path="*">
				<p>page not found</p>
			</Route>
		</Switch>
	);
};

export default Routes;

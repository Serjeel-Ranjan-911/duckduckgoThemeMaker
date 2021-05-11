import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes';

function App() {
	return (
		<Router basename="/duckduckgoThemeMaker">
			<Routes></Routes>
		</Router>
	);
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';

import './index.css';
import App from './pages/App';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<App />} />
			</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById('root'),
);
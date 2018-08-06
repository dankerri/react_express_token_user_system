import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// my components
import Login from './components/Login';
import Protected from './components/Protected';
import ProtectedRoute from './components/ProtectedRoute';

// <Route exact path="/protected" component={Protected} />

ReactDOM.render(<Router>
	<div>
		<Route exact path="/" component={App} />
		<Route exact path="/login" component={Login} />
		<ProtectedRoute path='/protected' component={Protected} />
	</div>
</Router>, document.getElementById('root'));
registerServiceWorker();



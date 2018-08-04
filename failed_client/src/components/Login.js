import React, { Component } from 'react';
import AuthService from './AuthService';


class Login extends Component {
	constructor(){
		super();
		this.handleLogin = this.handleLogin.bind(this);
		this.Auth = new AuthService();
	}
	
	componentDidMount() {
		if(this.Auth.loggedIn())
			this.props.history.replace('/');
	}

	handleLogin(e) {
		e.preventDefault();

		this.Auth.login('saber', 'excalibur')
		.then(res => {
			this.props.history.replace('/');
		})
		.catch(err => {
			alert(err);
		});
	}

	render() {
		return(
			<div>
				<h1>This is Login page</h1>
				<button type="button" onClick={this.handleLogin}>login</button>
			</div>
		);
	}
}

export default Login;
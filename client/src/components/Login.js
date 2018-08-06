import React, { Component } from 'react';
import AuthService from './AuthService';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';



class Login extends Component {
	state = {
    redirectToReferrer: false
  }

	constructor(){
		super();
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.Auth = new AuthService();
	}
	
	componentDidMount() {
		if(this.Auth.loggedIn())
			this.props.history.replace('/');
	}

	handleFormSubmit(e) {
		e.preventDefault();

		this.Auth.login(this.state.username, this.state.password)
		.then(res => {
			// this.props.history.replace('/');			
			this.setState({
				redirectToReferrer: true
			});
		})
		.catch(err => {
			alert(err);
		});
	}

	handleChange(e){
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render() {
		const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

		return(
			<div className="card">
				<h1>Login</h1>
				<form onSubmit={this.handleFormSubmit} >
					<input 
						placeholder="username" 
						name="username"
						type="text"
						onChange={this.handleChange}
					/>
					<input 
						placeholder="password"
						name="password"
						type="password"
						onChange={this.handleChange}
					/>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default Login;
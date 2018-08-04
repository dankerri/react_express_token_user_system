// How to add a protected page
 
import React, { Component } from 'react';
import withAuth from './withAuth';
import AuthService from './AuthService';

class Protected extends Component {
	constructor() {
		super();
		this.Auth = new AuthService();
	}
	componentDidMount() {
		const url = 'http://localhost:3000/protected';
		this.Auth.fetch(url)
		.then(res=>{
			console.log(res);
		})
	}

	render() {
		return(
			<div>
				<h1>This is the Protected Page</h1>
			</div>
		);
	}
}

export default withAuth(Protected);
import React, { Component } from 'react';
import AuthService from './components/AuthService';
import withAuth from './components/withAuth';

class App extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout(e) {
    this.Auth.logout();
    this.props.history.replace('login');
  }
  render() {
    return(
      <div>
        <h1>this is the homepage </h1>
        <button type="button" onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default withAuth(App);



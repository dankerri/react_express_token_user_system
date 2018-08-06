import React, { Component } from 'react';
import AuthService from './components/AuthService';
import withAuth from './components/withAuth';
import { Link } from 'react-router-dom';

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
        <ul>
          <li><Link to="/login">To Login(just for test)</Link></li>
          <li><Link to="/protected">Protected</Link></li>
        </ul>
        <button type="button" onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }
}

export default App;



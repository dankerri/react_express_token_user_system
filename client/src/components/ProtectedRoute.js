import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthService from './AuthService';

const Auth = new AuthService();

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    Auth.loggedIn()
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)



export default ProtectedRoute;
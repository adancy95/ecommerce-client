import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './helpers'



const AdminRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => isAuthenticated() && isAuthenticated().data.userDoc.role === 1 ?
    (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
    )} />
);



export default AdminRoute;
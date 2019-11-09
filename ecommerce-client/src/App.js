import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './User/Signup';
import Signin from './User/Signin';
import Home from './Core/Home';
import Navbar from './Core/Navbar';
import Dashboard from './User/UserDashboard';
import PrivateRoute from './Helpers/privateRoutes'

class App extends React.Component {
  constructor(props) {
  super(props)
    this.state = {
    currentUser: null
  }
  
  }
  render() {
    return (
      <BrowserRouter>
        <div> 
          <Navbar/>
        </div>
        <div>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/signin" exact component={Signin} />
          <Route path="/signup" exact component={Signup} />
          <PrivateRoute path="/user/dashboard" exact component={Dashboard}/>
        </Switch>
        </div>
       
        
      </BrowserRouter>
    )
  }
}

export default App


import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './User/Signup';
import Signin from './User/Signin';
import Home from './Core/Home';
import Navbar from './Core/Navbar';
import UserDashboard from './User/UserDashboard';
import AdminDashboard from './User/AdminDashboard';
import PrivateRoute from './Helpers/privateRoutes';
import AdminRoute from './Helpers/AdminRoutes';
import AddCategory from './Admin/Category/AddCategory';
import Categories from './Admin/Category/Categories';
import Products from './Admin/Product/Products';
import AddProduct from './Admin/Product/AddProduct';

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
         <Navbar/>
        <div className="container">
         
          <Switch>
            <Route exact path="/"  component={Home}/>
            <Route exact path="/signin"  component={Signin} />
            <Route exact path="/signup"  component={Signup} />
            <PrivateRoute exact path="/user/dashboard"  component={UserDashboard} />
            <AdminRoute exact path="/admin/dashboard"  component={AdminDashboard} />
            <AdminRoute  exact path="/admin/dashboard"  component={AdminDashboard} />
            <AdminRoute exact path="/admin/dashboard/categories/create"  component={AddCategory} />
            <AdminRoute exact path="/admin/dashboard/categories"  component={Categories} />
            <AdminRoute exact path="/admin/dashboard/products"  component={Products} />
            <AdminRoute exact path="/admin/dashboard/products/create"  component={AddProduct} />
          </Switch>
        </div>
        
      </BrowserRouter>
    )
  }
}

export default App


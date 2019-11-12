import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './User/Signup';
import Signin from './User/Signin';
import Home from './Core/Home';
import Navbar from './Core/Navbar';
import UserDashboard from './User/UserDashboard';
import AdminDashboard from './User/AdminDashboard';
import PrivateRoute from './Helpers/privateRoutes';
import AdminRoute from './Helpers/privateRoutes'
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
            <Route path="/" exact component={Home}/>
            <Route path="/signin" exact component={Signin} />
            <Route path="/signup" exact component={Signup} />
            <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
            <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
            <AdminRoute path="/admin/dashboard/categories/create" exact component={AddCategory} />
            <AdminRoute path="/admin/dashboard/categories" exact component={Categories} />
            <AdminRoute path="/admin/dashboard/products" exact component={Products} />
            <AdminRoute path="/admin/dashboard/products/create" exact component={AddProduct} />
          </Switch>
        </div>
        
      </BrowserRouter>
    )
  }
}

export default App


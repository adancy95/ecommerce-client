import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './User/Signup';
import Signin from './User/Signin';
import Home from './Core/Home';
import Navbar from './Core/Navbar';
// import UserDashboard from './User/UserDashboard';
import AdminDashboard from './User/AdminDashboard';
// import PrivateRoute from './Helpers/privateRoutes';
import AdminRoute from './Helpers/AdminRoutes';
import AddCategory from './Admin/Category/AddCategory';
import EditCategory from './Admin/Category/EditCategory';
import Categories from './Admin/Category/Categories';
import Products from './Admin/Product/Products';
import AddProduct from './Admin/Product/AddProduct';
import EditProduct from './Admin/Product/EditProduct';
import Users from './Admin/Orders/Users'
import ProductsComponent from './Client/ProductsComponent'
import CustomOrders from './Client/CustomOrders'

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
     
         
          <Switch>
          <Route exact path="/" component={Home} />
          <div className="container">
         
            <Route exact path="/signin"  component={Signin} />
            <Route exact path="/signup"  component={Signup} />
            {/* <PrivateRoute exact path="/user/dashboard"  component={UserDashboard} />  */}
             <AdminRoute exact path="/admin/dashboard"  component={AdminDashboard} />
            <AdminRoute exact path="/admin/dashboard/categories/create" component={AddCategory} />
            <AdminRoute exact path="/admin/dashboard/categories/edit/:id"  component={EditCategory} />
            <AdminRoute exact path="/admin/dashboard/categories"  component={Categories} />
            <AdminRoute exact path="/admin/dashboard/products"  component={Products} />
            <AdminRoute exact path="/admin/dashboard/products/create" component={AddProduct} />
            <AdminRoute exact path="/admin/dashboard/products/edit/:id" component={EditProduct} />
            <AdminRoute exact path="/admin/dashboard/users" component={Users} />
            <Route exact path="/products" component={ProductsComponent} />
            <Route exact path="/customorder" component={CustomOrders}/>
            </div>
          
          </Switch>
       
         
      </BrowserRouter>
    )
  }
}

export default App


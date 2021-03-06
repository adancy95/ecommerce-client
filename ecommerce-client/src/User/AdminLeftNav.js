import React from 'react';
import "../Core/Core.css"
import { Link } from 'react-router-dom'
// import { isAuthenticated } from '../Helpers/helpers';

// const { data: { userDoc: { firstName, lastName, email } } } = isAuthenticated()




export const AdminleftNav = () => 
  (
 
  <ul id="slide-out" style={{ marginTop: "65px" }} className="sidenav sidenav-fixed invesible-top" >
    <li>
      <div className="user-view">
      <div className="background">
        <img src="/images/white.jpg" alt="abstractPink"/>
          </div>
          <div className="circle"></div>
        {/* <a href="#name"><span className="textColor name"><h5>{user.data.userDoc.firstName} {user.data.userDoc.lastName}</h5></span></a>
        <a href="#email"><span className="teal-text email"><h6>{user.data.userDoc.email}</h6></span></a> */}
      </div>
    </li>
          
      <li><Link to="/admin/dashboard">Dashboard</Link></li>
      <li><div className="divider"></div></li>
      <li><Link to="/admin/dashboard/products">Products</Link></li>
      <li><div className="divider"></div></li>
      <li><Link to="/admin/dashboard/products/create">Add Product</Link></li>
      <li><div className="divider"></div></li>
      <li><Link to="/admin/dashboard/categories">Categories</Link></li>
      <li><div className="divider"></div></li>
      <li><Link to="/admin/dashboard/categories/create">Add Category</Link></li>
      <li><div className="divider"></div></li>
      {/* <li><Link to="/admin/dashboard/orders">Orders</Link></li>
      <li><div className="divider"></div></li> */}
      <li><Link to="/admin/dashboard/users">Users</Link></li>
      <li><div className="divider"></div></li>
  </ul>

)
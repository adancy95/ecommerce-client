import React from 'react';
import "../Core/Core.css"
import { Link} from 'react-router-dom'


export const AdminleftNav = () => 
(
 
  <ul id="slide-out" style={{marginTop:"65px"}} className="sidenav sidenav-fixed invesible-top" >
    <li><Link to="/admin/dashboard">Dashboard</Link></li>
    <li><Link to="/admin/dashboard/products">Products</Link></li>
    <li><Link to="/admin/dashboard/products/create">Add Product</Link></li>
    <li><Link to="/admin/dashboard/products/edit">Edit Product</Link></li>
    <li><Link to="/admin/dashboard/categories">Categories</Link></li>
    <li><Link to="/admin/dashboard/categories/create">Add Category</Link></li>
    <li><Link to="/admin/dashboard/categories/edit">Edit Category</Link></li>
    <li><Link to="/admin/dashboard/orders">Orders</Link></li>
    <li><Link to="/admin/dashboard/users">Users</Link></li>
  </ul>

)
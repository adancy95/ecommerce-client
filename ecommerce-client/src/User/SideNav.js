import React from 'react';


class SideNav extends React.Component {
  
  render() {
    return (
      
      <ul id="slide-out" classNameName="sidenav sidenav-fixed invesible-top" >
        <li><a href="#!">Dashboard</a></li>
        <li><a href="#!">Products</a></li>
        <li><a href="#!">Add Product</a></li>
        <li><a href="#!">Categories</a></li>
        <li><a href="#!">Add Category</a></li>
        <li><a href="#!">Orders</a></li>
        <li><a href="#!">Users</a></li> 
        </ul>
    
     
    )
  }
}

export default SideNav;
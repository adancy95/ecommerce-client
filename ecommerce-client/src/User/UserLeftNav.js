import React from 'react';
import "../Core/Core.css"
import { Link} from 'react-router-dom'


 export const UserLeftNav = () => 
 (
  
   <ul id="slide-out" style={{marginTop:"65px"}} className="sidenav sidenav-fixed leftnav" >
     <li><Link to="/user/dashboard">Dashboard</Link></li>
     <li><Link to="/user/dashboard/orders">Order History</Link></li>
     <li><Link to="/user/dashboard/profile">User Profile</Link></li>
   
   </ul>


   
 )
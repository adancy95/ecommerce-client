import React from 'react';
import "../Core/Core.css"
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../Helpers/helpers';

const { data: { userDoc: { firstName, lastName, email } } } = isAuthenticated()


export const UserLeftNav = () => 
  (
 
  <ul id="slide-out" style={{ marginTop: "65px" }} className="sidenav sidenav-fixed invesible-top" >
    <li>
      <div className="user-view">
      <div className="background">
        <img src="/images/signup.jpg" alt="abstractPink"/>
          </div>
          <div className="circle"></div>
          <a href="#name"><span className="textColor name"><h5>{firstName} {lastName}</h5></span></a>
          <a href="#email"><span className="teal-text email"><h6>{email}</h6></span></a>
      </div>
    </li>
          
      <li><Link to="/user/dashboard">Dashboard</Link></li>
      <li><div class="divider"></div></li>
      <li><Link to="/user/dashboard/orders">Order History</Link></li>
      <li><div class="divider"></div></li>
     <li><Link to="/user/dashboard/profile">User Profile</Link></li>
      <li><div class="divider"></div></li>
      
  </ul>

)



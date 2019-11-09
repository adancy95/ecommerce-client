import React from 'react';
import { isAuthenticated } from '../Helpers/helpers';
import SideNav from './SideNav';
import "../Core/Core.css"

class Dashboard extends React.Component{
  render() {
    const { data : {userDoc : {firstName, lastName, email, role, _id}} } = isAuthenticated()
    return (
      <div>
        <SideNav />
        <div className="main">
        <div  id="content" className="row">
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content">
                <span className="card-title white-text">User Information</span>
                <ul class="collection">
                  <li class="collection-item">{firstName} {lastName}</li>
                  <li class="collection-item">{email}</li>
                  <li class="collection-item">Role: {role === 1 ? 'Admin' : 'User'}</li>
                  <li class="collection-item">id: {_id}</li>
                </ul> 
              </div>
              <div className="card-action">
                <a href="#">Edit User</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content">
                <span className="card-title white-text">Order History</span>
                <ul class="collection">
                  <li class="collection-item">Date</li>
                  <li class="collection-item">Time</li>
                  <li class="collection-item">Items Purchased</li>
                  <li class="collection-item">Total</li>
                </ul> 
              </div>
            </div>
          </div>
        </div>

        </div>
      </div>
    )
  }
}

export default Dashboard
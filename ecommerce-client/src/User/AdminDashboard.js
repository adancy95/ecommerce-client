import React from 'react';
import { isAuthenticated } from '../Helpers/helpers';
import "../Core/Core.css"
import { Link} from 'react-router-dom'

class AdminDashboard extends React.Component{

  userContent = () => {
    const { data : {userDoc : {firstName, lastName, email, role, _id}} } = isAuthenticated()
    return (
            <div className="card blue-grey darken-1">
              <div className="card-content">
                <span className="card-title white-text">User Information</span>
                <ul className="collection">
                  <li className="collection-item">{firstName} {lastName}</li>
                  <li className="collection-item">{email}</li>
                  <li className="collection-item">Role: {role === 1 ? 'Admin' : 'User'}</li>
                  <li className="collection-item">id: {_id}</li>
                </ul> 
              </div>
            </div>
    )
  }

  orderHistory = () => (
  
          <div className="card blue-grey darken-1">
            <div className="card-content">
              <span className="card-title white-text">Order History</span>
              <ul className="collection">
                <li className="collection-item">Date</li>
                <li className="collection-item">Time</li>
                <li className="collection-item">Items Purchased</li>
                <li className="collection-item">Total</li>
              </ul> 
            </div>
          </div>
   

      
  )

  leftNav = () => 
    (
     
      <ul id="slide-out" style={{marginTop:"65px"}} className="sidenav sidenav-fixed invesible-top" >
      <li><Link to="/admin/dashboard">Dashboard</Link></li>
      <li><Link to="/dashboard/products">Products</Link></li>
      <li><Link to="/dashboard/addproducts">Add Products</Link></li>
      <li><Link to="/dashboard/categories">Categories</Link></li>
      <li><Link to="/dashboard/addcategories">Add Category</Link></li>
      <li><Link to="/dashboard/orders">Orders</Link></li>
      <li><Link to="/dashboard/users">Users</Link></li>
      </ul>


      
    )
  
  render() {
  
    return (
    
          <div className="row">

            <div className="col s3">
            {this.leftNav()}
            </div>

            <div className="col s9">
            {this.userContent()}
            {this.orderHistory()}
            </div>

        </div>
    
     
       
    )
  }
}

export default AdminDashboard

  
  

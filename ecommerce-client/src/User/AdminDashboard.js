import React from 'react';
import { isAuthenticated } from '../Helpers/helpers';
import "../Core/Core.css"
import {AdminleftNav} from './AdminLeftNav'

class AdminDashboard extends React.Component{

  userContent = () => {
    const { data: { userDoc: { firstName, lastName, email, role, _id } } } = isAuthenticated()
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



  render() {
  
    return (
    
          <div className="row">

            <div className="col s3">
            <AdminleftNav/>
            </div>

            <div className="col s9">
            {this.userContent()}
            </div>

        </div>
    
     
       
    )
  }
}

export default AdminDashboard

  
  

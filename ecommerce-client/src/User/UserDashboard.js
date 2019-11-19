import React from 'react';
import "../Core/Core.css"
import {UserLeftNav} from './UserLeftNav'

class UserDashboard extends React.Component{

  

  
  render() {
  
    return (

          <div className="row">

            <div className="col s3">
            <UserLeftNav />
            </div>

            <div className="col s9">
            
            </div>

        </div>
     
       
    )
  }
}

export default UserDashboard
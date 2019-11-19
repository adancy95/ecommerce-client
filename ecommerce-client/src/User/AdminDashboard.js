import React from 'react';
import "../Core/Core.css"
import {AdminleftNav} from './AdminLeftNav'

class AdminDashboard extends React.Component{




  render() {
  
    return (
    
          <div className="row">

            <div className="col s3">
            <AdminleftNav/>
            </div>

            <div className="col s9">
      
            </div>

        </div>
    
     
       
    )
  }
}

export default AdminDashboard

  
  

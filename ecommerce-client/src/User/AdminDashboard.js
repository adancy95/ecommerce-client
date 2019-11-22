import React from 'react';
import "../Core/Core.css"
import {AdminleftNav} from './AdminLeftNav'

class AdminDashboard extends React.Component{

  displayWidgets = () => {
    return (
      <div>
        <div class="row">
      <div class="col-md-6 col-sm-6">
          <div class="card card-stats">
              <div class="card-header card-header-warning card-header-icon">
                <div class="card-icon">
                    <i class="material-icons">content_copy</i>
                </div>
                <p class="card-category">Used Space</p>
                <h3 class="card-title">49/50 <small>GB</small></h3>
              </div>
              <div class="card-footer">
                  <div class="stats">
                      <i class="material-icons text-danger">warning</i>
                      <a href="#pablo">Get More Space...</a>
                  </div>
              </div>
          </div>
      </div>

      <div class="col-md-6 col-sm-6">
          <div class="card card-stats">
              <div class="card-header card-header-success card-header-icon">
                <div class="card-icon">
                  <i class="material-icons">store</i>
                </div>
                <p class="card-category">Revenue</p>
                <h3 class="card-title">$34,245</h3>
              </div>
              <div class="card-footer">
                  <div class="stats">
                      <i class="material-icons">date_range</i> Last 24 Hours
                  </div>
              </div>
          </div>
      </div>

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
                  {this.displayWidgets()}
                </div>

        </div>
    
     
       
    )
  }
}

export default AdminDashboard

  
  

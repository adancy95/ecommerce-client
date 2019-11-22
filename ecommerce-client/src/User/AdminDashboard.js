import React from 'react';
import "../Core/Core.css"
import { AdminleftNav } from './AdminLeftNav'
import Card from '../Admin/Dashboard/Card'
import { FaUserCircle } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaTshirt } from 'react-icons/fa';
import { FaListAlt } from 'react-icons/fa';


class AdminDashboard extends React.Component{


      render() {
      
        return (
        
              <div className="row">

                <div className="col s3">
                <AdminleftNav/>
                </div>

            <div className="col s12 ">
              <div className="row formOffset" >
                <div className="col statRow">
                  <Card color="teal" icon={<FaTshirt size={50}/>} statistics="10" label="Products"/>
                </div>
                <div className="col">
                  <Card color="amber accent-4" icon={<FaListAlt size={50}/>} statistics="5" label="Categories"/>
                </div>
                <div className="col">
                  <Card color="light-blue lighten-1" icon={<FaUserCircle size={50}/>} statistics="100" label="Users"/>
                </div>
                <div className="col">
                  <Card color="indigo darken-4" icon={<FaShoppingCart size={50}/>} statistics="100" label="Orders"/>
                </div>
              </div>
              
                  
            </div>

        </div>
    
     
       
    )
  }
}

export default AdminDashboard

  
  

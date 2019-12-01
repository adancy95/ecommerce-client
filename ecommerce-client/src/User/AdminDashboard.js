import React from 'react';
import "../Core/Core.css"
import { AdminleftNav } from './AdminLeftNav'
import Card from '../Admin/Dashboard/Card'
import { FaUserCircle } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaTshirt } from 'react-icons/fa';
import { FaListAlt } from 'react-icons/fa';
import { FaMoneyBillAlt } from 'react-icons/fa';
import { FaBaby } from 'react-icons/fa';
import { GiBowTieRibbon } from "react-icons/gi";
import { GiSkirt } from "react-icons/gi";
import axios from "axios";


class AdminDashboard extends React.Component{
      constructor(){
        super()
        this.state = {
          userCount: undefined,
          productCount: undefined,
          categoryCount: undefined
        }
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/count`)
          .then(response => {
            this.setState({
              userCount: response.data.foundUsers,
              productCount: response.data.foundProducts,
              categoryCount: response.data.foundCategory

            })
        })
    }


      render() {
      
        return (
        
              <div className="row">

                <div className="col s3">
                <AdminleftNav/>
                </div>
            <h2 className="textColor">Dashboard</h2>
            <div className="divider statRow"></div>
            <div className="col s12 ">
              <div className="row" >
                <div className="col statRow">
                  <Card color="teal" icon={<FaTshirt size={50}/>} statistics={this.state.productCount} label="Products"/>
                </div>
                <div className="col">
                  <Card color="amber accent-4" icon={<FaListAlt size={50}/>} statistics={this.state.categoryCount} label="Categories"/>
                </div>
                <div className="col">
                  <Card color="light-blue lighten-1" icon={<FaUserCircle size={50}/>} statistics={this.state.userCount} label="Users"/>
                </div>
                <div className="col">
                  <Card color="indigo darken-4" icon={<FaShoppingCart size={50}/>} statistics="15" label="Orders"/>
                </div>
              </div>
              <div className="row" >
                <div className="col statRow">
                  <Card color="purple" icon={<GiSkirt size={50}/>} statistics="5" label="Tutus"/>
                </div>
                <div className="col">
                  <Card color="cyan" icon={<GiBowTieRibbon size={50}/>} statistics="90" label="Bows"/>
                </div>
                <div className="col">
                  <Card color="lime" icon={<FaBaby size={50}/>} statistics="10" label="Onesies"/>
                </div>
                <div className="col">
                  <Card color="green" icon={<FaTshirt size={50}/>} statistics="45" label="Tshirts"/>
                </div>
              </div>
              <div className="row">
                <div className="col push statRow">
                    <Card color="red" icon={<FaMoneyBillAlt size={50}/>} statistics="$45,598" label="Total Revenue"/>
                  </div>
      
                  <div className="col s3">
                    <Card color="pink" icon={<FaMoneyBillAlt size={50}/>} statistics="$1,203" label="Sales This Month"/>
                </div>
                <div className="col s3">
                    <Card color="grey" icon={<FaMoneyBillAlt size={50}/>} statistics="$12,203" label="Sales This Quater"/>
                  </div>
                </div>
              </div>

         

         

         
            
              
                  
            </div>

     
    
     
       
    )
  }
}

export default AdminDashboard

  
  

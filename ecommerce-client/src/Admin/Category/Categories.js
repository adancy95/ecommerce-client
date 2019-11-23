import React, { Component } from 'react';
import "../../Core/Core.css"
import axios from 'axios';
import { AdminleftNav } from '../../User/AdminLeftNav'
import { MdModeEdit  } from 'react-icons/md';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom'
import update from 'immutability-helper'

class Categories extends Component {

    constructor(){
        super()
        this.state = {
          categories: []
        }
        this.removeItem = this.removeItem.bind(this)
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/categories`)
        .then(response => {
          this.setState({ categories: response.data.categories })
        })
    }
  
  removeItem(index, id) {
    axios.delete(`${process.env.REACT_APP_API_URL}/categories/delete/${id}`,{ withCredentials: true })
      .then((response) => {
      this.setState((prevState) => ({
        categories: update(prevState.categories, {$splice: [[index, 1]]})
      }))
    })
    .catch(err => {
      console.log("delete error", err)
    });
      
    }
  
  showCategories() {
    return (
      <div>
        <h2 className="textColor">Categories</h2>
        <div className="divider"></div>
        <table className="highlight responsive-table ">
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Number of Products</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.categories.map((category, index) =>
              <tr key={category._id}>
                <td>
                {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                </td>
                <td>{category.number_of_products}</td>
                <td>
                  <Link className="iconPad" to={`/admin/dashboard/categories/edit/${category._id}`}><MdModeEdit size={25} className="material-icons textColor" /></Link>
                  <Link className="iconPad" to="/admin/dashboard/categories" onClick={() => this.removeItem(index, category._id )}><MdDeleteForever size={25} className="material-icons teal-text" /></Link>
                </td>  
            </tr>
            )}
          </tbody>
        </table>
        <div></div>
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
            <div className="formOffset"> 
                <div className="card">
                   <div className="card-content">
                      {this.showCategories()}
                    </div>
                </div>
            </div>
          </div>
        </div>
            
              
        
        );
    }
}

export default Categories;
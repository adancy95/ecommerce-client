import React, { Component } from 'react';
import "../../Core/Core.css"
import axios from 'axios';
import {AdminleftNav} from '../../User/AdminLeftNav'

class Categories extends Component {

    constructor(){
        super()
        this.state = {
          categories: []
        }
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/categories`)
        .then(response => {
          this.setState({ categories: response.data.categories })
        })
    }
  
  showCategories() {
    return (
      <div>
        <h2>Categories</h2>
        <table>
          <thead>
            <tr>
              <th>Category Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.categories.map(category =>
              <tr key={category._id}>
                <td>
                {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
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
          {this.showCategories()}
          </div>

        </div>
            
              
        
        );
    }
}

export default Categories;
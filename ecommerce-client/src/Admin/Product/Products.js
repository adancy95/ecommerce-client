import React, { Component } from 'react';
import "../../Core/Core.css"
import axios from 'axios';
import {AdminleftNav} from '../../User/AdminLeftNav'

class Products extends Component {

    constructor(){
        super()
        this.state = {
          products: []
        }
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/products`)
        .then(response => {
          this.setState({ products: response.data.products })
          console.log(this.state.products)
        })
    }
  
  showProducts() {
    return (
      <div>
        <h2>products</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map(product =>
              <tr key={product._id}>
                <td>
                {product.name.charAt(0).toUpperCase() + product.name.slice(1)}
                </td>
                <td>${product.offers.regularPrice}</td>
                <td>{product.availability.quantity}</td>
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
          {this.showProducts()}
          </div>

        </div>
            
              
        
        );
    }
}

export default Products;
import React, { Component } from 'react';
import "../../Core/Core.css"
import axios from 'axios';
import { AdminleftNav } from '../../User/AdminLeftNav';
import { MdModeEdit  } from 'react-icons/md';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';
import update from 'immutability-helper';

class Products extends Component {

    constructor(){
        super()
        this.state = {
          products: []
        }
      this.removeItem = this.removeItem.bind(this)
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/products`)
        .then(response => {
          this.setState({ products: response.data.products })
          console.log(this.state.products)
        })
    }
    removeItem(index, id) {
      axios.delete(`${process.env.REACT_APP_API_URL}/products/delete/${id}`,{ withCredentials: true })
        .then((response) => {
        this.setState((prevState) => ({
          products: update(prevState.products, {$splice: [[index, 1]]})
        }))
      })
      .catch(err => {
        console.log("delete error", err)
      });
        
      }
    
  
  showProducts() {
    return (
      <div>
        <h2 className="textColor">Products</h2>
        <div className="divider"></div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((product, index) =>
              <tr key={product._id}>
                <td>
                  <img className="responsive-img imagePreviewSm" src={product.productImage} alt="productImage" />
                </td>
                <td>
                {product.name.charAt(0).toUpperCase() + product.name.slice(1)}
                </td>
                <td>{product.regularPrice}</td>
                <td>{product.quantity}</td>
                <td>
                  <Link className="iconPad" to={`/admin/dashboard/products/edit/${product._id}`}><MdModeEdit size={25} className="material-icons textColor " /></Link>
                  <Link className="iconPad"  to="/admin/dashboard/products" onClick={() => this.removeItem(index, product._id )}><MdDeleteForever size={25} className="material-icons teal-text" /></Link>
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
                      {this.showProducts()}
                      </div>
                  </div>
              </div>
          </div>
          
        </div>

    
            
              
        
        );
    }
}

export default Products;
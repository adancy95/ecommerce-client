import React from 'react';
import { isAuthenticated } from "../../Helpers/helpers";
// import { Link } from "react-router-dom";
import axios from "axios";
import { Redirect } from 'react-router';
import { AdminleftNav } from '../../User/AdminLeftNav';




class AddProduct extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      productImage: "",
      priceCurrency: "",
      regularPrice: null,
      salePrice: null,
      description: "",
      instock: false,
      quantity: "",
      color: "",
      size: "",
      priceValidUntil: "", 
      categories: [],
      category: "",
      error: null,
      success: false
    }
    this.user = isAuthenticated().data.userDoc
    this.token = isAuthenticated().data.Auth
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/categories`)
    .then(response => {
      this.setState({ categories: response.data.categories })
      
    })
  }

  handleChange(e) {

    this.setState({ [e.target.name]: e.target.value })
    this.setState({ error: false })
    console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/products/create`, this.state, { withCredentials: true })
      .then( responseFromServer => {
          this.setState({
            name: "",
            error: null,
            success: true
          })
     
        })
      .catch(err => {
        this.setState({ error: err.response.data.message })
      });
  }

  
productForm = () => (
    <div className="row">
      
    <form className="col s12" onSubmit={this.handleSubmit}>
        <div className="row">
          <h2>Add Product</h2>
        {this.showError()}
        <div className="file-field input-field ">
          <div className="btn-small waves-effect waves-light btnColor">
              <span>Upload Image</span>
              <input type="file" name="productImage"  value={this.state.productImage} onChange={this.handleChange}/>
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text"/>
            </div>
          </div>
          <div className="input-field col s6">
              <input  id="name" type="text" name="name" className="validate" value={this.state.name} onChange={this.handleChange}/>
              <label className="active" htmlFor="name">Product Name</label>
        </div>
        <div className="input-field col s6">
          <select className="browser-default" value={this.state.category} onChange={this.handleChange}>
            <option value=""  defaultValue >Choose a Category</option>
            {this.state.categories.map(category => 
              <option key={category._id} name="category" value={category._id}>{category.name}</option>
            )}
           
          </select>
        </div>
        <div className="input-field col s12">
              <input   type="text" name="description" className="validate" value={this.state.description} onChange={this.handleChange}/>
              <label className="active" htmlFor="description">Description</label>
        </div>
       
        <div className="input-field col s2">
              <input   type="text" name="regularPrice" className="validate" value={this.state.regularPrice} onChange={this.handleChange}/>
              <label className="active" htmlFor="regularPrice">Regular Price</label>
        </div>
        <div className="input-field col s2">
              <input  type="text" name="salePrice" className="validate" value={this.state.salePrice} onChange={this.handleChange}/>
              <label className="active" htmlFor="salePrice">Sale Price</label>
        </div>
        <div className="input-field col s3">
              <input  type="text" name="priceValidUntil" className="validate" value={this.state.priceValidUntil} onChange={this.handleChange}/>
              <label className="active" htmlFor="priceValidUntil">Sale Price Valid Until</label>
        </div>
        <div className="input-field col s2">
          <label>
            <input type="checkbox" onClick={() => { this.setState({ instock: !this.state.instock }) }}  />
            <span>Instock</span>
          </label>
        </div>
        <div className="input-field col s3">
              <input  type="number" name="quantity" className="validate" value={this.state.quantity} onChange={this.handleChange}/>
              <label className="active" htmlFor="quantity">Quantity</label>
        </div>
        <div className="input-field col s6">
              <input  type="text" name="color" className="validate" value={this.state.color} onChange={this.handleChange}/>
              <label className="active" htmlFor="color">Color</label>
        </div>
        <div className="input-field col s6">
              <input  type="text" name="size" className="validate" value={this.state.size} onChange={this.handleChange}/>
              <label className="active" htmlFor="color">Size</label>
        </div>
       
      

        
       
      </div>
        <button className="btn waves-effect waves-light btnColor" type="submit" name="action"><span>Submit</span></button> 
    </form>
    </div>
    
  )


  showError = () => (
    <div style={{display: this.state.error ? "" : "none"}}> {this.state.error}</div>
   )
  render() {
    if (this.state.success) {
        return <Redirect to="/admin/dashboard/categories"/>
    }
    return (

      <div className="row">

        <div className="col s3">
          <AdminleftNav/>
        </div>

        <div className="col s9">
          {this.productForm()}
        </div>

      </div>
    
    )
  }
}

export default AddProduct;
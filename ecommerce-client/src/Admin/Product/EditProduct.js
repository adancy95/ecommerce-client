import React from 'react';
import { isAuthenticated } from "../../Helpers/helpers";
// import { Link } from "react-router-dom";
import axios from "axios";
import { Redirect } from 'react-router';
import { AdminleftNav } from '../../User/AdminLeftNav';
import NumberFormat from 'react-number-format';



class AddProduct extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      productImage: undefined,
      imagePreviewUrl: "",
      priceCurrency: "",
      regularPrice: undefined,
      salePrice: undefined,
      description: "",
      instock: false,
      quantity: "",
      color: "",
      size: "",
      salePriceValidUntil: "", 
      categories: [],
      category: undefined,
      product: {},
      error: null,
      success: false
    }
    this.user = isAuthenticated().data.userDoc
    this.token = isAuthenticated().data.Auth
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleImage = this.handleImage.bind(this)
  }

  componentDidMount() {

    const { match: { params } } = this.props;
    
    axios.get(`${process.env.REACT_APP_API_URL}/products/${params.id}`)
      .then(({ data: product }) => {
        this.setState({
          name: product.foundProduct.name,
          productImage: product.foundProduct.productImage,
          priceCurrency: product.foundProduct.priceCurrency,
          regularPrice: product.foundProduct.regularPrice,
          salePrice: product.foundProduct.salePrice,
          description: product.foundProduct.description,
          instock: product.foundProduct.instock,
          quantity: product.foundProduct.quantity,
          color: product.foundProduct.color,
          size: product.foundProduct.size,
          salePriceValidUntil: product.foundProduct.salePriceValidUntil, 
          category: product.foundProduct.category,
          product: product.foundProduct, 
          imagePreviewUrl: product.foundProduct.productImage
        });
        console.log(this.state)
      });
    
    
    axios.get(`${process.env.REACT_APP_API_URL}/categories`)
    .then(response => {
      this.setState({categories: response.data.categories })
      
    })

  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    this.setState({ error: false })
    console.log(this.state)
  }

  handleImage(e) {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        productImage: file,
        imagePreviewUrl: reader.result
      }, _ => console.log("image", this.state.imagePreviewUrl));
    }

    reader.readAsDataURL(file)
  }

  handleSubmit(e) {
    e.preventDefault();
    let form = new FormData();
      form.append('name', this.state.name)
      form.append('regularPrice', this.state.regularPrice)
      form.append('salePrice', this.state.salePrice)
      form.append('salePriceValidUntil', this.state.salePriceValidUntil)
      form.append('description', this.state.description)
      form.append('instock', this.state.instock)
      form.append('quantity', this.state.quantity)
      form.append('color', this.state.color)
      form.append('size', this.state.size)
      form.append('category', this.state.category)
      form.append('productImage', this.state.productImage)
    
    axios.put(`${process.env.REACT_APP_API_URL}/products/update/${this.state.product._id}`, form, { withCredentials: true })
      .then( responseFromServer => {
          this.setState({
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
          <h2 className="textColor">Edit Product</h2>
        {this.showError()}
        <div className="file-field input-field ">
          <div className="btn-small waves-effect waves-light btnColor">
              <span>Upload Image</span>
              <input type="file" name="productImage"  accept="image/*" onChange={this.handleImage}/>
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text"/>
            </div>
        </div>
        <div className="input-field" col s12>
             <img className="responsive-img imagePreview" src={this.state.imagePreviewUrl} alt={this.state.productImage} />
        </div>
          <div className="input-field col s6">
              <input  id="name" type="text" name="name" className="validate" value={this.state.name} onChange={this.handleChange}/>
              <label className="active" htmlFor="name">Product Name</label>
        </div>
        <div className="input-field col s6">
          <select className="browser-default" name="category" value={this.state.category} onChange={this.handleChange}>
            <option  >Choose a category</option>
            {this.state.categories.map(category => 
              <option key={category._id} name="category" value={category._id}>{category.name}</option>
              
            )}
          </select>
        </div>
        <div className="input-field col s12">
              <input   type="text" name="description" className="validate" value={this.state.description} onChange={this.handleChange}/>
              <label className="active" htmlFor="description">Description</label>
        </div>
       
        <div className=" input-field col s2">
          <NumberFormat thousandSeparator={true} prefix={'$'} name="regularPrice" className="validate" value={this.state.regularPrice} onChange={this.handleChange} />
          <label className="active" htmlFor="regularPrice">Regular Price</label>
        </div>
        <div className=" input-field col s2">
          <NumberFormat thousandSeparator={true} prefix={'$'} name="salePrice" className="validate" value={this.state.salePrice} onChange={this.handleChange} />
          <label className="active" htmlFor="salePrice">Sale Price</label>
        </div>
        <div className="input-field col s3">
          <input type="date" name="priceValidUntil" className="validate" selected={this.state.priceValidUntil} onChange={this.handleChange}/>
              <label className="active" htmlFor="priceValidUntil">Sale Price Valid Until</label>
        </div>
        <div className="input-field col s2">
          <label>
            <input type="checkbox" checked={this.state.instock} onClick={() => { this.setState({ instock: !this.state.instock }) }}  />
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
        return <Redirect to="/admin/dashboard/products"/>
    }
    return (

      <div className="row">

        <div className="col s3">
          <AdminleftNav/>
        </div>

        <div className="col s9">
        <div className="formOffset"> 
          <div className="row">
            <div className="col ">
              <div className="card">
                <div className="card-content">
                {this.productForm()}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

      </div>
    
    )
  }
}

export default AddProduct;
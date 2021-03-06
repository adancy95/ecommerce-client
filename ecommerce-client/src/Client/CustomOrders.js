import React from 'react';
import axios from 'axios'
export default class CustomOrders extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phone: "",
      sizeType: "",
      sizes: "",
      colors: "",
      shirtFit: "",
      designImage: "",
      designText: "",
      quantity: 0,
      error: null,
      success: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleImage = this.handleImage.bind(this)
  }

  handleImage(e) {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        designImage: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  handleChange(e) {

    this.setState({ [e.target.name]: e.target.value })
    this.setState({ error: false })
  }

  handleSubmit(e) {
    e.preventDefault();
 
      let form = new FormData();
      form.append('firstName', this.state.firstName)
      form.append('lastName', this.state.lastName)
      form.append('emailAddress', this.state.emailAddress)
      form.append('phone', this.state.phone)
      form.append('sizeType', this.state.sizeType)
      form.append('sizes', this.state.sizes)
      form.append('colors', this.state.colors)
      form.append('color', this.state.color)
      form.append('shirtFit', this.state.shirtFit)
      form.append('designImage', this.state.designImage)
      form.append('designText', this.state.designText)
      form.append('quantity', this.state.quantity)

    axios.post(`${process.env.REACT_APP_API_URL}/orders/create`, form, { withCredentials: true })
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
  render() {
    return (
      <div className="row">
        <h1>Custom Order</h1>
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="divider"></div>
            <div className="input-field col s6">
              <input  id="firstName" type="text" name="firstName" className="validate" value={this.state.firstName} onChange={this.handleChange}/>
              <label className="active" htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s6">
              <input  id="lastName" type="text" name="lastName" className="validate" value={this.state.lastName} onChange={this.handleChange}/>
              <label className="active" htmlFor="lastName">Last Name</label>
            </div>
            <div className="input-field col s6">
              <input  id="email" type="text" name="email" className="validate" value={this.state.email} onChange={this.handleChange}/>
              <label className="active" htmlFor="email">Email</label>
            </div>
            <div className="input-field col s6">
              <input  id="phone" type="text" name="phone" className="validate" value={this.state.phone} onChange={this.handleChange}/>
              <label className="active" htmlFor="phone">Phone Number</label>
            </div>
            <div className="input-field col s3">
              <input  id="sizeType" type="text" name="sizeType" className="validate" value={this.state.sizeType} onChange={this.handleChange}/>
              <label className="active" htmlFor="sizeType">Size Type</label>
            </div>
            <div className="input-field col s3">
              <input  id="sizes" type="text" name="sizes" className="validate" value={this.state.sizes} onChange={this.handleChange}/>
              <label className="active" htmlFor="sizes">Sizes</label>
            </div>
            <div className="input-field col s3">
              <input  id="colors" type="text" name="colors" className="validate" value={this.state.colors} onChange={this.handleChange}/>
              <label className="active" htmlFor="colors">Color</label>
            </div>
            <div className="input-field col s3">
              <input  id="shirtFit" type="text" name="shirtFit" className="validate" value={this.state.shirtFit} onChange={this.handleChange}/>
              <label className="active" htmlFor="shirtFit">Shirt Fit</label>
            </div>
            <div className="input-field col s12">
              <input  id="quantity" type="number" name="quantity" className="validate" value={this.state.quantity} onChange={this.handleChange}/>
              <label className="active" htmlFor="quantity">Quantity</label>
            </div>
            <h6> Tell us about your custom design</h6>
            <div className="input-field col s12">
              <input  id="designText" type="text" name="designText" className="validate" value={this.state.designText} onChange={this.handleChange}/>
              <label className="active" htmlFor="designText">Design Text</label>
            </div>
            <div className="file-field input-field col s12">
           <div className="btn-small waves-effect waves-light btnColor">
              <span>Upload Design</span>
              <input type="file" accept="image/*"  onChange={this.handleImage}/>
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text"/>
            </div>
          </div>
          </div>
          <button className="btn waves-effect waves-light btnColor" type="submit" name="action"><span>Submit</span></button> 

        </form>
      </div>
    )
  }
}
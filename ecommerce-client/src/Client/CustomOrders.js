import React from 'react';

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
      quantity: 0
    }
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
          </div>

        </form>
      </div>
    )
  }
}
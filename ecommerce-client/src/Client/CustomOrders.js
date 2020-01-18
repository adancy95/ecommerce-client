import React from 'react';

export default class CustomOrders extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
      phone: "",
      mailingAddressOne: "",
      mailingAddressTwo: "",
      city: "",
      state: "",
      country: "",
      zipCode: 0,
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
      <div>
        <h1>Coming Soon</h1>
        <p>Place a Custom Order Here</p>
      </div>
    )
  }
}
import React from 'react';
import { IoIosStar } from "react-icons/io";


export default class ProductCard extends React.Component{
  render() {
    return (
      <div className="product-card">
        <div className="product-card-image">
          <img className="imagePreview" src={this.props.image} alt="productImage" />
        </div>
        <div className="product-card-details">
          <div className="product-card-title">
            <p className="product-card-name primary-text">{this.props.productName}</p>
            <p className="product-card-description secondary-text">{this.props.description}</p>
          </div>
          <div className="product-card-subdetails">
            <p className="product-card-price textColor tertiary-text">{this.props.price}</p>
            <div className="product-card-rating tertiary-text">
              <span><IoIosStar/></span>
              <span><IoIosStar/></span>
              <span><IoIosStar/></span>
              <span><IoIosStar/></span>
              <span><IoIosStar/></span>
            </div>
          </div>
        </div>
      </div>
      
    )
  }
}
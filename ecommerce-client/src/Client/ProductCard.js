import React from 'react';

export default class ProductCard extends React.Component{
  render() {
    return (
      <div className="row">
        <div className="col s4 m3">
          <div className="card">
            <div className="card-image">
              <img src="/images/tutu.jpg" alt="productImage"/>
            </div>
            <div className="card-content">
            <span className="card-title">Button Shirt</span>
              <p>Description goes here. Mock Data</p>
            </div>
          </div> 
        </div>
      </div>
    )
  }
}
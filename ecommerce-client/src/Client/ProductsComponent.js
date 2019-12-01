import React from 'react';
import ProductCard from './ProductCard'

export default class ProductsComponent extends React.Component{
  render() {
    return (
      <div className="product-listing">
        <div className="product-filters"> Side Nav Filters
          <ul>
            <li>Categories</li>
            <li>Filter By Price</li>
            <li>Filter By Size</li>
            <li>Filter By Color</li>
          </ul>
        </div>
        <div className="product-items">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          
        </div>
        </div>
    )
  }
}
import React from 'react';
import ProductCard from './ProductCard'
import SizeFilter from './SizeFilter'
import ColorFilter from './ColorFilter'
import CategoryFilter from './CategoryFilter'

export default class ProductsComponent extends React.Component{
  render() {
    return (
      <div className="product-listing">
        <div className="product-filters"> Side Nav Filters
          <ul>
            <li><CategoryFilter/></li>
            <li>Filter By Price</li>
            <li> <SizeFilter/></li>
            <li><ColorFilter/></li>
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
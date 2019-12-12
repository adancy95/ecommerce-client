import React from 'react';
import ProductCard from './ProductCard'
import SizeFilter from './SizeFilter'
import ColorFilter from './ColorFilter'
import CategoryFilter from './CategoryFilter'
import PriceFilter from './PriceFilter'

export default class ProductsComponent extends React.Component{
  render() {
    return (
      <div className="product-listing">
        <div className="product-filters">
          <ul>
            <li><CategoryFilter/></li>
            <li><PriceFilter/></li>
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
          <ProductCard />
          <ProductCard />
          
        </div>
        </div>
    )
  }
}
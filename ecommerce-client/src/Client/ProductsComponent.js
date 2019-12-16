import React from 'react';
import ProductCard from './ProductCard'
import SizeFilter from './SizeFilter'
import ColorFilter from './ColorFilter'
import CategoryFilter from './CategoryFilter'
import PriceFilter from './PriceFilter'
import axios from 'axios'

export default class ProductsComponent extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/products`)
      .then(({ data: product }) => {
        this.setState({
          products : product.products
        });
        console.log(this.state)
      });
  }

  displayProducts = () => {
    return (
       this.state.products.map((product, index) => 
            <ProductCard key={index} image={product.productImage} description={product.description} productName={product.name} price={product.regularPrice}/>
         )
    
    )
   
  }
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
          {this.displayProducts()}
          <ProductCard />
          
          
        </div>
        </div>
    )
  }
}
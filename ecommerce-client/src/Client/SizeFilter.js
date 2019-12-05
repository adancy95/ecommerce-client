import React from 'react';
import CircleButton from './CircleButton'

export default class SizeFilter extends React.Component{
  render() {
    return (
      <div>
        <h6>Filter By Size</h6>
        <ul className="sizes">
          <li className="filter-size"><CircleButton text="XS" /></li>
          <li className="filter-size"><CircleButton text="S" /></li>
          <li className="filter-size"><CircleButton text="M" /></li>
          <li className="filter-size"><CircleButton text="L"/></li>
          <li className="filter-size"><CircleButton text="XL"/></li>
        </ul>
      </div>
    )
  }
}
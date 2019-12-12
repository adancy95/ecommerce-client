import React from 'react';
import CircleButton from './CircleButton'

export default class SizeFilter extends React.Component{
  render() {
    return (
      <div>
        <h6>Filter By Size</h6>
        <ul className="flex-display">
          <li className="filter-size"><CircleButton color="#E0E0E0" filterType="XS" text="XS" /></li>
          <li className="filter-size"><CircleButton color="#E0E0E0" filterType="S"  text="S" /></li>
          <li className="filter-size"><CircleButton color="#E0E0E0" filterType="M"  text="M" /></li>
          <li className="filter-size"><CircleButton color="#E0E0E0" filterType="L" text="L"/></li>
          <li className="filter-size"><CircleButton color="#E0E0E0" filterType="XL" text="XL"/></li>
        </ul>
      </div>
    )
  }
}
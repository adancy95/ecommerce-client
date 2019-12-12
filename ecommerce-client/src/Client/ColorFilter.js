import React from 'react';
import CircleButton from './CircleButton';

export default class ColorFilter extends React.Component{
  render() {
    return (
      <div>
        <h6>Filter By Color</h6>
        <ul className="flex-display">
          <li className="filter-color"><CircleButton filterType="red" color="red"/></li>
          <li className="filter-color"><CircleButton filterType="yellow" color="yellow"/></li>
          <li className="filter-color"><CircleButton filterType="green" color="green"/></li>
          <li className="filter-color"><CircleButton filterType="purple" color="purple"/></li>
          <li className="filter-color"><CircleButton filterType="orange" color="orange"/></li>
        </ul>
      </div>
    )
  }
}
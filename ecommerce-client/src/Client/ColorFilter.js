import React from 'react';

export default class ColorFilter extends React.Component{
  render() {
    return (
      <div>
        <h6>Filter By Color</h6>
        <ul>
          <li className="filter-color">Red</li>
          <li className="filter-color">Yellow</li>
          <li className="filter-color">Green</li>
          <li className="filter-color">Purple</li>
          <li className="filter-color">Orange</li>
        </ul>
      </div>
    )
  }
}
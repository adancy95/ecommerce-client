import React from 'react';

export default class SizeFilter extends React.Component{
  render() {
    return (
      <div>
        <h6>Filter By Size</h6>
        <ul>
          <li className="filter-size">X-small</li>
          <li className="filter-size">Small</li>
          <li className="filter-size">Medium</li>
          <li className="filter-size">Large</li>
          <li className="filter-size">X-Large</li>
        </ul>
      </div>
    )
  }
}
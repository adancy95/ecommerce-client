import React from 'react';

export default class CategoryFilter extends React.Component{
  render() {
    return (
      <div>
        <h6>Filter By Category</h6>
        <ul>
          <li className="filter-category">Category 1</li>
          <li className="filter-category">Category 2</li>
          <li className="filter-category">Category 3</li>
          <li className="filter-category">Category 4</li>
          <li className="filter-category">Category 5</li>
        </ul>
      </div>
    )
  }
}
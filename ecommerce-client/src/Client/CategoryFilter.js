import React from 'react';

export default class CategoryFilter extends React.Component{
  render() {
    return (
      <div>
        <h6>Filter By Category</h6>
        <form action="#" className="filter-category">
          <p>
            <label>
              <input type="checkbox" />
              <span>Category 1</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" />
              <span>Category 2</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" />
              <span>Category 3</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" />
              <span>Category 4</span>
            </label>
          </p>
          <p>
            <label>
              <input type="checkbox" />
              <span>Category 5</span>
            </label>
          </p>
        </form>
      </div>
    )
  }
}
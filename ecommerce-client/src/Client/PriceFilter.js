import React from 'react';

export default class PriceFilter extends React.Component{
  render() {
    return (
      <div>
          <h6>Filter By Price</h6>
        <form action="#">
          <p>$1 - $100</p>
            <p class="range-field">
              <input type="range" min="0" max="100" />
            </p>
          </form>
      </div>
    )
  }
}
import React from 'react';
import {Link, withRouter} from 'react-router-dom'

class Navbar extends React.Component{
  render() {
    return (
      <div>
         <nav>
          <div className="nav-wrapper">
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/signin">Signin</Link></li>
              <li><Link to="/signup">Signup</Link></li>
            </ul>
          </div>
        </nav>

      </div>
    )
  }
}

export default withRouter(Navbar);
import React, {Fragment} from 'react';
import { Link, withRouter } from 'react-router-dom'
import { MdAccountCircle } from 'react-icons/md';
import { MdShoppingBasket } from 'react-icons/md';
import './Core.css';
import { signout, isAuthenticated } from '../Helpers/helpers'



class Navbar extends React.Component{
  render() {
    return (
      <div className="navMargin">
        <div className="navbar-fixed nav-extended navHeight">
          <nav>
            <div className="nav-wrapper navBackground">
              <ul className="left hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>  
              </ul>
              <ul className="right hide-on-med-and-down">
                {!isAuthenticated() && (
                  <Fragment>
                    <li><Link to="/signin">Signin</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                  </Fragment>
                )}
                {isAuthenticated() && (
                  <li><Link to="/" onClick={() => signout()}>Signout</Link></li>
                )} 
              </ul>
              <ul className="right hide-on-med-and-down">
                <li><Link to="/"><MdShoppingBasket className="material-icons"/></Link></li>
                <li><Link to="/user/dashboard"><MdAccountCircle className="material-icons" /></Link></li>
              </ul>
            </div>
          </nav>
        </div>

      </div>
      
    )
  }
}

export default withRouter(Navbar);
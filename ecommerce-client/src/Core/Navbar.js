import React, {Fragment} from 'react';
import { Link, withRouter } from 'react-router-dom'
import { MdAccountCircle } from 'react-icons/md';
import { MdShoppingBasket } from 'react-icons/md';
import './Core.css';
import { signout, isAuthenticated } from '../Helpers/helpers'



class Navbar extends React.Component{

  userprofile = () => {
    const { data: { userDoc } } = isAuthenticated();
    if( userDoc.role === 1) {
      return <li><Link to="/admin/dashboard"><MdAccountCircle className="material-icons" /></Link></li>
    } else {
      return <li><Link to="/user/dashboard"><MdAccountCircle className="material-icons" /></Link></li>
    }

  }
  
  render() {
    return (
      <div className="navbar-fixed">
      <nav>
          <div className="nav-wrapper">
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
                <Fragment>
                    {this.userprofile()}
                    <li><Link to="/" onClick={() => signout()}>Signout</Link></li>
                  </Fragment> 
                )} 
              </ul>
              <ul className="right hide-on-med-and-down">
                <li><Link to="/"><MdShoppingBasket className="material-icons"/></Link></li>
               
              </ul>
        </div>
      </nav>
    </div>
      
    )
  }
}

export default withRouter(Navbar);
import React, {Fragment} from 'react';
import { Link, withRouter } from 'react-router-dom'
import { MdAccountCircle } from 'react-icons/md';
import { MdShoppingBasket } from 'react-icons/md';
import { MdSearch } from 'react-icons/md';
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
            </div>
          </nav>
        </div>
        <div className="navbar-fixed nav-extended">
          <nav>
            
            <div className="nav-wrapper white">
              <ul className="left hide-on-med-and-down">
                <li><Link to="/"> <span className="black-text">Mina Cre8s</span></Link></li> 
              </ul>
              <form className="nav-content brand-logo center">
                <div className="input-field">
                  <input id="search" type="search" required/>
                  <label className="label-icon" htmlFor="search"><MdSearch className="label-icons large black-text" /></label>
                </div>
              </form>
              <ul className="right hide-on-med-and-down">
                <li><Link to="/"><MdShoppingBasket className="material-icons black-text"/></Link></li>
                <li><Link to="/"><MdAccountCircle className="material-icons black-text" /></Link></li>
              </ul>
            </div>
            <hr className="grey lighten-5"/>
            <div className="nav-content brand-logo center">
              <ul className="tabs tabs-transparent ">
                <li className="tab"><Link to="product/bows"><span className="black-text">Bows</span></Link></li>
                <li className="tab"><Link to="product/onesies"><span className="black-text">Onesies</span></Link></li>
                <li className="tab"><Link to="product/tshirts"><span className="black-text">T-Shirts</span></Link></li>
                <li className="tab"><Link to="product/tutus"><span className="black-text">Tutus</span></Link></li>
                
              </ul>
            </div>
          </nav>
        </div>
        

      </div>
      
    )
  }
}

export default withRouter(Navbar);
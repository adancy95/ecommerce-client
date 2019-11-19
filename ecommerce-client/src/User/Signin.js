import React from 'react';
import { MdMail } from 'react-icons/md';
import { MdLock } from 'react-icons/md';
import "../Core/Core.css"
import axios from "axios";
import { Redirect } from 'react-router';
import {authenticate, isAuthenticated} from '../Helpers/helpers'





class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null,
      success: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    this.setState({error: false})
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/login`, this.state, { withCredentials: true })
      .then( responseFromServer => {
        authenticate(responseFromServer, () => {
          this.setState({
            email: "",
            password: "",
            error: null,
            success: true
          })
        } )
        })
      .catch(err => {
        this.setState({ error: err.response.data.message })
      });
  }

  signinForm = () => (
    <div>
        {this.showError()}
        <div className="row">
          <form className="col s10" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <MdMail className=" prefix material-icons black-text" />
                <input name="email" value={this.state.email} onChange={this.handleChange} id="email" type="email" className="validate"/>
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <MdLock className=" prefix material-icons black-text" />
                <input name="password" value={this.state.password} onChange={this.handleChange} id="password" type="password" className="validate"/>
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <button className="btn waves-effect waves-light btnColor fullwidth" type="submit" name="action"><span>Submit</span>
            </button> 
          </form>
        </div> 
      </div>
  )

  showError = () => (
    <div style={{display: this.state.error ? "" : "none"}}> {this.state.error}</div>
   )

 
  render() {
    
    if (this.state.success) {
      const { data: { userDoc } } = isAuthenticated();
      if( userDoc.role === 1) {
        return <Redirect to="/admin/dashboard" />
      } else {
        return <Redirect to="/user/dashboard" /> 
      }
     
    }

    if(isAuthenticated()){
      return <Redirect to="/" /> 
    }
    
    const style = {
      height: '150px'
    }

    return (
      <div className="formOffset"> 
         <div className="row">
          <div className="col s6 offset-s3">
            <div className="card">
              <div className="card-image">
                <img src="images/signup.jpg" alt="abstract"  style={style}/>
                <span className="card-title black-text"><h2>Sign In</h2></span>
              </div>
              <div className="card-content">
                {this.signinForm()}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );

  }
}

export default Signin;
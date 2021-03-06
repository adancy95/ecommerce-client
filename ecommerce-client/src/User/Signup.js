import React from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { MdMail } from 'react-icons/md';
import { MdLock } from 'react-icons/md';
import axios from "axios";
import "../Core/Core.css"
import { Redirect } from 'react-router';



class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
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

  signup = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/signup`, this.state, { withCredentials: true })
      .then(responseFromServer => {
        this.setState({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          error: null,
          success: true
        })
      })
      .catch(err => {
        this.setState({ error: err.response.data.message })
      });
  }

  showError = () => (
   <div style={{display: this.state.error ? "" : "none"}}> {this.state.error}</div>
  )

  handleSubmit(e) {
    e.preventDefault();
    this.signup()
  }

  signupForm = () => (
    <div>
      {this.showError()}
        <div className="row">
          <form className="col s10" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <MdAccountCircle className="prefix material-icons black-text" />
                <input name="firstName" value={this.state.firstName} onChange={this.handleChange}  id="firstName" type="text" className="validate"/>
                <label htmlFor="firstName">First Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <MdAccountCircle className=" prefix material-icons black-text" />
                <input name="lastName" value={this.state.lastName} onChange={this.handleChange} id="lastName" type="text" className="validate"/>
                <label htmlFor="lastName">Last Name</label>
              </div>
            </div>
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
            <button className="btn waves-effect waves-light btnColor fullwidth" type="submit" name="action"><span>Submit</span></button>
           
          </form>
        </div> 
      </div>
  )

 
  render() {

    if(this.state.success) {
      return <Redirect to="/signin" /> 
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
                <span className="card-title black-text"><h2>Create an Account</h2></span>
              </div>
              <div className="card-content">
                {this.signupForm()}
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    );

  }
}

export default Signup;
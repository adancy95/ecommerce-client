import React from 'react';
import { MdMail } from 'react-icons/md';
import { MdLock } from 'react-icons/md';
import "./User.css"
import axios from "axios";
import { Redirect } from 'react-router';
import {authenticate} from '../Helpers/helpers'




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
    axios.post("http://localhost:3001/api/login", this.state, { withCredentials: true })
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
        <h2>Sign In</h2>
        {this.showError()}
        <div className="row">
          <form className="col s10" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s5">
                <MdMail className=" prefix material-icons black-text" />
                <input name="email" value={this.state.email} onChange={this.handleChange} id="email" type="email" className="validate"/>
                <label htmlFor="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s5">
                <MdLock className=" prefix material-icons black-text" />
                <input name="password" value={this.state.password} onChange={this.handleChange} id="password" type="password" className="validate"/>
                <label htmlFor="password">Password</label>
              </div>
            </div>
            <button className="btn waves-effect waves-light btnColor" type="submit" name="action"><span>Submit</span>
            </button> 
          </form>
        </div> 
      </div>
  )

  showError = () => (
    <div style={{display: this.state.error ? "" : "none"}}> {this.state.error}</div>
   )

 
  render() {
    if(this.state.success) {
      console.log(this.state.success)
      return <Redirect to="/" /> 
    }
    return (
      <div>
        {this.signinForm()}
      </div>
    );

  }
}

export default Signin;
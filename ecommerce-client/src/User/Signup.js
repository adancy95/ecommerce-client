import React from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { MdMail } from 'react-icons/md';
import { MdLock } from 'react-icons/md';
import axios from "axios";
import "./User.css"



class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      message: null
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:3001/api/signup", this.state,{ withCredentials: true })
    .then( responseFromServer => {
      console.log("response is:", responseFromServer);
      // const { userDoc } = responseFromServer.data;
      // this.props.onUserChange(userDoc);
    }).catch( err => console.log("Error signing up: ", err));
    
  }

 
  render() {
    return (
      <div>
        <h2>Sign Up</h2>
        <div className="row">
          <form className="col s10" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s5">
                <MdAccountCircle className=" prefix material-icons black-text" />
                <input name="firstName" value={this.state.firstName} onChange={this.handleChange}  id="firstName" type="text" className="validate"/>
                <label htmlFor="firstName">First Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s5">
                <MdAccountCircle className=" prefix material-icons black-text" />
                <input name="lastName" value={this.state.lastName} onChange={this.handleChange} id="lastName" type="text" className="validate"/>
                <label htmlFor="lastName">Last Name</label>
              </div>
            </div>
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
          { this.state.message && <div> { this.state.message } </div> }
        </div> 
      </div>
    );

  }
}

export default Signup;
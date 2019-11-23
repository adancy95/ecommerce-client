import React from 'react';
import { isAuthenticated } from "../../Helpers/helpers";
import axios from "axios";
import { Redirect } from 'react-router';
import {AdminleftNav} from '../../User/AdminLeftNav'



class AddCategory extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      error: null,
      success: false
    }
    this.user = isAuthenticated().data.userDoc
    this.token = isAuthenticated().data.Auth
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    this.setState({error: false})
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/categories/create`, this.state, { withCredentials: true })
      .then( responseFromServer => {
          this.setState({
            name: "",
            error: null,
            success: true
          })
     
        })
      .catch(err => {
        this.setState({ error: err.response.data.message })
      });
  }

  categoryForm = () => (
    <div className="row">
      
    <form className="col s12" onSubmit={this.handleSubmit}>
        <div className="row">
          <h2 className="textColor">Add Category</h2>
          <div className="divider"></div>
          {this.showError()}
          <div className="input-field col s12">
              <input  id="name" type="text" name="name" className="validate" value={this.state.name} onChange={this.handleChange}/>
              <label className="active" htmlFor="name">Category Name</label>
          </div>
        </div>
        <button className="btn waves-effect waves-light btnColor" type="submit" name="action"><span>Submit</span></button> 
      </form>
    </div>
    
  )


  showError = () => (
    <div style={{display: this.state.error ? "" : "none"}}> {this.state.error}</div>
   )
  render() {
    if (this.state.success) {
        return <Redirect to="/admin/dashboard/categories"/>
    }
    console.log(this.user, this.token)
    return (

      <div className="row">

        <div className="col s3">
          <AdminleftNav/>
        </div>

        <div className="col s9">
          <div className="formOffset"> 
                  <div className="card">
                    <div className="card-content">
                    {this.categoryForm()}
                    </div>
                  </div>
                </div>
          </div>
      </div>
    
    )
  }
}

export default AddCategory;
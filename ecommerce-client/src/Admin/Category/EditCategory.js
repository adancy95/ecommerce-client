import React from 'react';
import { isAuthenticated } from "../../Helpers/helpers";
import axios from "axios";
import { MdCreate } from 'react-icons/md';
import { Redirect } from 'react-router';
import {AdminleftNav} from '../../User/AdminLeftNav'



class EditCategory extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      error: null,
      success: false,
      category: {}
    }
    this.user = isAuthenticated().data.userDoc
    this.token = isAuthenticated().data.Auth
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    
    axios.get(`${process.env.REACT_APP_API_URL}/categories/${params.id}`)
      .then(({ data: category }) => {
        this.setState({
        name: category.foundCategory.name,
        category: category.foundCategory});
        console.log(this.state)
      });
  }

  handleChange(e) {
    console.log(this.state)
    this.setState({ [e.target.name]: e.target.value })
    this.setState({error: false})
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.put(`${process.env.REACT_APP_API_URL}/categories/update/${this.state.category._id}`, this.state, { withCredentials: true })
      .then(responseFromServer => {
        console.log(responseFromServer)
          this.setState({
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
          <h2 className="textColor">Edit Category</h2>
          <div className="divider"></div>
          <div className="divider"></div>
          {this.showError()}
          <div className="input-field col s12 formOffset">
              <MdCreate className=" prefix material-icons black-text" />
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

export default EditCategory;
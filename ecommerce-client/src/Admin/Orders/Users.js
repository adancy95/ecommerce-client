import React, { Component } from 'react';
import "../../Core/Core.css"
import axios from 'axios';
import { AdminleftNav } from '../../User/AdminLeftNav'


class Users extends Component {

    constructor(){
        super()
        this.state = {
          users: []
        }
        
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/users`)
          .then(response => {
            this.setState({ users: response.data.foundUsers })
        })
    }
  

  
  showUsers() {
    return (
      <div>
        <h2>Users</h2>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user, index) =>
              <tr key={user._id}>
                <td>
                {user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)}
                </td>
                <td>
                {user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1)}
                </td>
                <td>
                {user.email}
                </td>

            </tr>
            )}
          </tbody>
        </table>
        <div></div>
      </div>
    )
    
  }

    render() {
      return (
        <div className="row">

          <div className="col s3">
            <AdminleftNav/>
          </div>

          <div className="col s9">
          {this.showUsers()}
          </div>

        </div>
            
              
        
        );
    }
}

export default Users;
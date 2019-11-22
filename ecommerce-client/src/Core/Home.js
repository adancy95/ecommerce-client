import React from 'react';
import './Core.css';
import { Link } from 'react-router-dom'


class Home extends React.Component {
  
  render() {
    const style = {
      background: 'url(/images/home.png) no-repeat center center fixed',
      backgroundSize: 'cover',
      minHeight: '720px',
    }
    const link = {
      position: 'absolute',
      top: '60%',
      left: '29%',
      transform: 'translate(-50%, -50%)'
    }
    return (
      <div style={style}>
         <Link to="/admin/dashboard/products" className="btn-flat disabled transparent" style={link}><h5 className="textColor">Shop Now</h5></Link>
      </div>
    )
  }
}

export default Home;
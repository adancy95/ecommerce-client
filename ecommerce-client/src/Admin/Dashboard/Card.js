import React from 'react';
import "../../Core/Core.css"


export default class Card extends React.Component {
  render() {
    return (
    
        <div className={`card z-depth-4 ${this.props.color}`}>
            <div className="card-content">
            <div className="row">
            <div className="col s6 white-text">{this.props.icon}</div>
                <div className="col s6">
                    <p className="white-text statFont">{this.props.statistics}</p>
                     <p className="white-text">{this.props.label}</p>
                </div>
             </div>
          </div>
        </div>
  
              
              
        
      )
    }
  }



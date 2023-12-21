import "./ServiceHomeStyle.css"

import  { Component } from 'react'

class ServiceData extends Component {
  render() {
    return (
        <div className="s-card">
        <div className="s-image">
            <i className={this.props.icon}></i>
        </div>
        <h3>{this.props.heading}</h3>
        <p1>{this.props.text}</p1>
    </div>
    )
  }
}

export default ServiceData

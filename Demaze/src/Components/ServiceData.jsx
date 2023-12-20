import "./ServiceHomeStyle.css"

import  { Component } from 'react'

class ServiceData extends Component {
  render() {
    return (
        <div className="s-card">
        <div className="s-image">
            <img src={this.props.image} alt="image" />
        </div>
        <h3>{this.props.heading}</h3>
        <p1>{this.props.text}</p1>
    </div>
    )
  }
}

export default ServiceData

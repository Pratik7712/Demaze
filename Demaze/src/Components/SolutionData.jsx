import "./SolutionStyle.css"
import  { Component } from 'react'

class SolutionData extends Component {
  render() {
    return (
        <div className="s-Card">
        <div className="s-Image">
            <img src={this.props.Image} alt="image" />
        </div>
        <p>{this.props.Text}</p>
    </div>
    )
  }
}

export default SolutionData

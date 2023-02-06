// Write your code here

import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, text: 'Even'}

  increment = () => {
    const number = Math.ceil(Math.random() * 100)
    if (number % 2 !== 0) {
      this.setState({count: number, text: 'Odd'})
    } else {
      this.setState({count: number, text: 'Even'})
    }
  }

  render() {
    const {count, text} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="heading">Count {count}</h1>
          <p className="count-para">Count is {text}</p>
          <button type="button" className="button" onClick={this.increment}>
            Increment
          </button>
          <p className="content-para">
            *increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp

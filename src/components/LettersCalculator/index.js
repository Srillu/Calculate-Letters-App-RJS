// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputValue: 0}

  onChangeInput = event => {
    if (event.target.value !== 0) {
      this.setState({inputValue: event.target.value.length})
    }
  }

  render() {
    const {inputValue} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <div className="heading-container">
            <h1 className="heading">Calculate the Letters You Enter</h1>
            <label htmlFor="letter" className="paragraph">
              Enter the phrase
            </label>
            <br />
            <input
              id="letter"
              onChange={this.onChangeInput}
              className="input-box"
              type="text"
              placeholder="Enter the phrase"
            />

            <p className="no-of-letters">No.of Letters: {inputValue}</p>
          </div>
          <div>
            <img
              className="calculator-image"
              alt="letters calculator"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator

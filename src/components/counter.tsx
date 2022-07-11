import React, { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0,
  }

  styles = {
    fontSize: 50,
    fontWeight: 'bold',
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={() => this.handleIncrement()}>Increment</button>
      </div>
    )
  }

  private getBadgeClasses() {
    let classes = 'ui button '
    classes += this.state.count === 0 ? 'red' : 'teal'
    return classes
  }

  formatCount() {
    const { count } = this.state
    return count === 0 ? 'Zero' : count
  }
}

export default Counter

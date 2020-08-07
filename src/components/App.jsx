import React, { Component } from 'react'

import Calendar from './Calendar'

export default class App extends Component {
  state = {
    date: null
  }
  
  handleDateChange = date => this.setState({date})

  render() {
    const {date} = this.state;

    return (
      <div>
        {date && <p>Выбранная дата: {date.toLocaleDateString()}</p> }

        <Calendar onChange={this.handleDateChange} />
      </div>
    )
  }
}

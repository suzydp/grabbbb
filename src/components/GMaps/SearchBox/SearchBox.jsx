import React, { Component } from 'react';
import './SearchBox.scss';

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "this is for the text",
    }
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeText = (event) => {
    this.setState({ text: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`${this.state.text} has been submitted!`);
  }

  // handlePressEnter = (event) => {
  //   event.preventDefault();
  //   alert(`${this.state.text} has been submitted!`);
  // }

  render() {
    return(
      <div>
        <input type="text" value={this.state.text} onChange={this.handleChangeText} />
        <button onClick={this.handleSubmit} onKeyDown={this.handlePressEnter}>Grabbbb it</button>
      </div>
    )
  }
}
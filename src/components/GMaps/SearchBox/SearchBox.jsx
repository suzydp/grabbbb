import React, { Component } from 'react';
import './SearchBox.scss';

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'this is the text value test'
    };

    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePressEnter = this.handlePressEnter.bind(this);
  }

  handleChangeText(event) {
    this.setState({text: event.target.value});
  }

  handleSubmit(event) {
    // preventDefault = need to set for canceling event
    event.preventDefault();
    this.props.onSubmit(this.state.text);
  }

  handlePressEnter(event) {
    event.preventDefault();
    if(event.keyCode === 13) { // 13 is for enter
      this.props.onSubmit(this.state.text);
    }
  }

  render() {
    return (
      <div>
        <input className="searchbox__input" type="text" value={this.state.text} onChange={this.handleChangeText} />
        <button className="searchbox__button" onClick={this.handleSubmit} onKeyDown={this.handlePressEnter}>Grabbbb it</button>
      </div>
    )
  };
}
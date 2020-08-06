import React, { Component } from "react";
import "./App.css";

export default class Qa extends Component {
  state = {
    answer: "",
  };
  handleClick = () => {
    this.setState({ answer: this.props.value.answer });
    console.log(this.state.answer);
  };
  render() {
    return (
      <div>
        <p className="question">{this.props.value.question}</p>
        <p>
          Answer--<span className="answer">{this.state.answer}</span>
        </p>
        <button onClick={this.handleClick}>Click to get answer</button>
      </div>
    );
  }
}

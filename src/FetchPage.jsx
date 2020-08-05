import React, { Component } from "react";
import axios from "axios";

export default class FetchPage extends Component {
  state = {
    answer: "",
  };

  componentDidMount() {
    let one = "http://anapioficeandfire.com/api/characters/16";
    let two = "http://www.anapioficeandfire.com/api/houses/37";
    let three = "http://www.anapioficeandfire.com/api/houses/229";
    let four = "http://www.anapioficeandfire.com/api/houses/17";
    let five = "http://www.anapioficeandfire.com/api/characters/901";
    let six = "http://www.anapioficeandfire.com/api/houses/362";
    let seven = "http://www.anapioficeandfire.com/api/characters/2";

    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    const requestThree = axios.get(three);
    const requestFour = axios.get(four);
    const requestFive = axios.get(five);
    const requestSix = axios.get(six);
    const requestSeven = axios.get(seven);

    axios
      .all([
        requestOne,
        requestTwo,
        requestThree,
        requestFour,
        requestFive,
        requestSix,
        requestSeven,
      ])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0].data;
          const responseTwo = responses[1].data;
          const responseThree = responses[2].data;
          const responseFour = responses[3].data;
          const responseFive = responses[4].data;
          const responseSix = responses[5].data;
          const responseSeven = responses[6].data;
          console.log(
            responseOne,
            responseTwo,
            responseThree,
            responseFour,
            responseFive,
            responseSix,
            responseSeven
          );
        })
      )

      .catch((errors) => {
        console.error(errors);
      });
  }

  handleClick = (response) => {
    console.log("click");
    this.setState({ answer: response });
    console.log(this.state.answer);
  };

  render() {
    return (
      <div>
        <p>1. Where was Margaery Tyrell born?</p>

        <p>Answer: {this.state.answer}</p>
        <button onClick={() => this.handleClick(this.responseOne)}>
          Click to get answer
        </button>
        <p>2. What region is House Targaryen in?</p>
        <p>Answer: {this.state.answer}</p>
        <button onClick={() => this.handleClick(this.responseTwo)}>
          Click to get answer
        </button>
        <p>3. What's the coat of arms of House Lannister?</p>
        <p>Answer: {this.state.answer}</p>
        <button onClick={() => this.handleClick(this.responseThree)}>
          Click to get answer
        </button>
        <p>4. What is the second seat of House Baratheon?</p>
        <p>Answer: {this.state.answer}</p>
        <button onClick={() => this.handleClick(this.responseFour)}>
          Click to get answer
        </button>
        <p>5. What is Robert Baratheon's second alias?</p>
        <p>Answer: {this.state.answer}</p>
        <button onClick={() => this.handleClick(this.responseFive)}>
          Click to get answer
        </button>
        <p>6. What's the name of the founder of House Stark?</p>
        <p>Answer: {this.state.answer}</p>
        <p>
          <button onClick={() => this.handleClick(this.responseSix)}>
            Click to get answer
          </button>
          7. What are the titles of Catelyn Stark's three POV books?
        </p>
        <p>Answer: {this.state.answer}</p>
        <button onClick={() => this.handleClick(this.responseSeven)}>
          Click to get answer
        </button>
      </div>
    );
  }
}

import React, { Component } from "react";
import axios from "axios";
import Qa from "./Qa";
export default class Fetch extends Component {
  state = {
    answers: [],
  };

  componentDidMount() {
    let one = "https://anapioficeandfire.com/api/characters/16";
    let two = "https://www.anapioficeandfire.com/api/houses/37";
    let three = "https://www.anapioficeandfire.com/api/houses/229";
    let four = "https://www.anapioficeandfire.com/api/houses/17";
    let five = "https://www.anapioficeandfire.com/api/characters/901";
    let six = "https://www.anapioficeandfire.com/api/houses/362";
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
          const responseOne = responses[0].data.born;
          const responseTwo = responses[1].data.region;
          const responseThree = responses[2].data.coatOfArms;
          const responseFour = responses[3].data.seats[1];
          const responseFive = responses[4].data.aliases[1];
          const responseSix = responses[5].data.name;
          const responseSeven = responses[6].data.tvSeries[1];

          console.log(
            responseOne,
            responseTwo,
            responseThree,
            responseFour,
            responseFive,
            responseSix,
            responseSeven
          );
          const data = [
            responseOne,
            responseTwo,
            responseThree,
            responseFour,
            responseFive,
            responseSix,
            responseSeven,
          ];
          this.setState({ answers: data });
          console.log(this.state.answers);
        })
      )

      .catch((errors) => {
        console.error(errors);
      });
  }

  render() {
    return (
      <div>
        <Qa
          value={{
            question: "1. Where was Margaery Tyrell born?",
            answer: this.state.answers[0],
          }}
        />
        <Qa
          value={{
            question: "2. What region is House Targaryen in?",
            answer: this.state.answers[1],
          }}
        />
        <Qa
          value={{
            question: "3. What's the coat of arms of House Lannister?",
            answer: this.state.answers[2],
          }}
        />
        <Qa
          value={{
            question: "4. What is the second seat of House Baratheon?",
            answer: this.state.answers[3],
          }}
        />
        <Qa
          value={{
            question: "5. What is Robert Baratheon's second alias?",
            answer: this.state.answers[4],
          }}
        />
        <Qa
          value={{
            question: "6. What's the name of the founder of House Stark?",
            answer: this.state.answers[5],
          }}
        />
        <Qa
          value={{
            question:
              "7. What are the titles of Catelyn Stark's three POV books?",
            answer: this.state.answers[6],
          }}
        />
      </div>
    );
  }
}

import React, { Component } from "react";
import axios from "axios";
// export default class FetchPage extends Component {
//   render() {
//     return <div></div>;
//   }
// }

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
.all([requestOne, requestTwo, requestThree, requestFour, requestFive, requestSix, requestSeven])
.then(
axios.spread(...responses) => {
const responseOne= responses[0];
const responseTwo= responses[1];
const responseThree= responses[2];
const responseFour= responses[3];
const responseFive= responses[4];
const responseSix= responses[5];
const responseSeven= responses[6];
console.log(responseOne,responseTwo, responseThree, responseFour,resonseFive,responseSix,responseSeven);
})
.catch(errors=>{
    console.error(errors);
})

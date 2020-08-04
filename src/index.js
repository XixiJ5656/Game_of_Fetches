import axios from "axios";

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
      const responseOne = responses[0].json();
      const responseTwo = responses[1].json();
      const responseThree = responses[2].json();
      const responseFour = responses[3].json();
      const responseFive = responses[4].json();
      const responseSix = responses[5].json();
      const responseSeven = responses[6].json();
      console.log(
        "1. Where was Margaery Tyrell born?",
        responseOne,
        "2. What region is House Targaryen in?",
        responseTwo,
        "3. What's the coat of arms of House Lannister?",
        responseThree,
        "4. What is the second seat of House Baratheon?",
        responseFour,
        "5. What is Robert Baratheon's second alias?",
        responseFive,
        "6. What's the name of the founder of House Stark? (You have to chain fetch requests!)",
        responseSix,
        "7. What are the titles of Catelyn Stark's three POV books? (Look into Promise.all to request these simultaniously)",
        responseSeven
      );
    })
  )
  .catch((errors) => {
    console.log("There is error");
  });

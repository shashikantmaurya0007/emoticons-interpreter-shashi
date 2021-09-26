import "./styles.css";
import React, { useState } from "react";

var emojidectionary = {
  "🍇": " Grapes",
  "🍈": "Melon",
  "🍉": " Watermelon",
  "🍊": " Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🥝": "Kiwi Fruit",
  "🍅": "Tomato",
  "🥑": "Avocado"
};
export default function App() {
  var [meaning, setMeaning] = useState("");
  var emoticonsarray = Object.keys(emojidectionary);
  function inputvalue(event) {
    var meaning = event.target.value;

    meaning = emojidectionary[meaning];
    if (meaning == undefined)
      meaning = "sorry! it does not exist in our database";
    setMeaning(meaning);
  }
  function inputvaluefromclick(item) {
    setMeaning(emojidectionary[item]);
  }

  return (
    <div className="App">
      <h1>🍎Welcome to fruito pedia</h1>
      <h2></h2>
      <input
        placeholder="enter your fruit emoji"
        id="emoji-input"
        onChange={inputvalue}
      />
      <h4 id="result"> {meaning}</h4>
      <br />
      <br />
      {emoticonsarray.map((item) => {
        return (
          <span id="list" onClick={() => inputvaluefromclick(item)}>
            {item}
          </span>
        );
      })}
    </div>
  );
}

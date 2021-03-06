import "./styles.css";
import React, { useState } from "react";

var emojidectionary = {
  "π": " Grapes",
  "π": "Melon",
  "π": " Watermelon",
  "π": " Tangerine",
  "π": "Lemon",
  "π": "Banana",
  "π": "Pineapple",
  "π₯­": "Mango",
  "π": "Red Apple",
  "π": "Green Apple",
  "π": "Pear",
  "π": "Peach",
  "π": "Cherries",
  "π": "Strawberry",
  "π₯": "Kiwi Fruit",
  "π": "Tomato",
  "π₯": "Avocado"
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
      <h1>πWelcome to fruito pedia</h1>
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

import React, { useState } from "react";
import "./styles.css";

// define a database
var emojiDictionary = {
  "π": "smiling",
  "π₯": "sad",
  "π ": "angry",
  "β€οΈ": "love",
  "π": "pizza",
  "π": "hamburger",
  "π": "french fries",
  "π": "Winking Face with Tongue",
  "π€ͺ": "Zany Face",
  "π": "Squinting Face with Tongue",
  "π€": "Money-Mouth Face",
  "π€": "Hugging Face",
  "π€­": "Face with Hand Over Mouth",
  "π€«": "Shushing Face",
  "π€": "Thinking Face",
  "π€": "Zipper-Mouth Face",
  "π€¨": "Face with Raised Eyebrow",
  "π": "Neutral Face",
  "π": "Expressionless Face",
  "πΆ": "Face Without Mouth",
  "πΆβπ«οΈ": "Face in Clouds",
  "π¨": "Fearful Face",
  "π°": "Anxious Face with Sweat",
  "π’": "Crying Face",
  "π­": "Loudly Crying Face",
  "π±": "Face Screaming in Fear",
  "π": "Confounded Face",
  "π£": "Persevering Face",
  "π": "Disappointed Face",
  "π": "Downcast Face with Sweat",
  "π©": "Weary Face",
  "π«": "Tired Face",
  "π₯±": "Yawning Face",
  "π€": "Face with Steam From Nose"
};

var emojisWeKnow = Object.keys(emojiDictionary);

// meaning n setmeaning state
// two handlers - emojiInputHandler and emojiClickHandler
export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning); //react call to show output
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 class="main"> Find Emoji! </h1>

      <input onChange={emojiInputHandler} />
      {/* actual output */}
      <h2> {meaning} </h2>

      {/* mapping done */}

      <h3 class="subheading"> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

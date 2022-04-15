import React, { useState } from "react";
import "./styles.css";

var headingText = "Eomji ";
var color = "#FFC72C";

var emojiDictionary = {
  "😀": " Grinning Face",
  "😃": " Grinning Face with Big Eyes",
  "😄": " Grinning Face with Smiling Eyes",
  "😁": " Beaming Face with Smiling Eyes",
  "😆": " Grinning Squinting Face",
  "😅": " Grinning Face with Sweat",
  "🤣": " Rolling on the Floor Laughing",
  "😂": " Face with Tears of Joy",
  "🙂": " Slightly Smiling Face",
  "🙃": " Upside-Down Face",
  "😉": " Winking Face",
  "😊": " Smiling Face with Smiling Eyes",
  "😇": " Smiling Face with Halo",
  "🥰": " Smiling Face with Hearts",
  "😍": " Smiling Face with Heart-Eyes",
  "🤩": " Star-Struck",
  "😘": " Face Blowing a Kiss",
  "😗": " Kissing Face",
  "😚": " Kissing Face with Closed Eyes",
  "😙": " Kissing Face with Smiling Eyes",
  "🥲": " Smiling Face with Tear",
  "😋": " Face Savoring Food",
  "😛": " Face with Tongue",
  "😜": " Winking Face with Tongue",
  "🤪": " Zany Face",
  "😝": " Squinting Face with Tongue",
  "🤑": " Money-Mouth Face",
  "🤗": " Smiling Face with Open Hands",
  "🤭": " Face with Hand Over Mouth",
  "😶‍🌫️": " Face in Clouds",
  "😏": " Smirking Face",
  "😒": " Unamused Face",
  "🙄": " Face with Rolling Eyes",
  "😬": " Grimacing Face",
  "😮‍💨": " Face Exhaling",
  "🤥": " Lying Face",
  "😌": " Relieved Face",
  "😔": " Pensive Face",
  "😪": " Sleepy Face",
  "🤤": " Drooling Face",
  "😴": " Sleeping Face",
  "😷": " Face with Medical Mask",
  "🤒": " Face with Thermometer",
  "🤕": " Face with Head-Bandage",
  "🤢": " Nauseated Face",
  "🤮": " Face Vomiting",
  "🤧": " Sneezing Face",
  "🥵": " Hot Face",
  "🥶": " Cold Face",
  "🥴": " Woozy Face",
  "😵": " Face with Crossed-Out Eyes",
  "😵‍💫": " Face with Spiral Eyes",
  "🤯": " Exploding Head",
  "🤠": " Cowboy Hat Face",
  "🥳": " Partying Face",
  "🥸": " Disguised Face",
  "😎": " Smiling Face with Sunglasses",
  "🤓": " Nerd Face",
  "🧐": " Face with Monocle",
  "😕": " Confused Face",
  "😟": " Worried Face",
  "🙁": " Slightly Frowning Face",
  "☹️": " Frowning Face",
  "😮": " Face with Open Mouth",
  "😯": " Hushed Face",
  "😲": " Astonished Face",
  "😳": " Flushed Face",
  "🥺": " Pleading Face"
};
var weKnowEmoji = Object.keys(emojiDictionary);

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);

  function likeclickhandler() {
    var newLikeCounterValue = likeCounter + 1;
    setLikeCounter(newLikeCounterValue);
  }

  const [meaning, setmeaning] = useState("");

  function inputEmojihandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have in our data base";
    }
    setmeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    console.log(meaning);
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>{headingText}</h1>
      <button onClick={likeclickhandler}>❤️</button>
      <span>{likeCounter}</span>
      <input onChange={inputEmojihandler}></input>

      <h3>
        <b>{meaning}</b>
      </h3>
      <h3> we know emoji </h3>
      {weKnowEmoji.map(function (emoji) {
        return (
          <span key={emoji} onClick={() => emojiClickHandler(emoji)}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

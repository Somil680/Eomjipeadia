import React, { useState } from "react";
import "./styles.css";

var headingText = "ð¤ Eomjið¤  ";
var color = "#FFC72C";

var emojiDictionary = {
  "ð": " Grinning Face",
  "ð": " Grinning Face with Big Eyes",
  "ð": " Grinning Face with Smiling Eyes",
  "ð": " Beaming Face with Smiling Eyes",
  "ð": " Grinning Squinting Face",
  "ð": " Grinning Face with Sweat",
  "ð¤£": " Rolling on the Floor Laughing",
  "ð": " Face with Tears of Joy",
  "ð": " Slightly Smiling Face",
  "ð": " Upside-Down Face",
  "ð": " Winking Face",
  "ð": " Smiling Face with Smiling Eyes",
  "ð": " Smiling Face with Halo",
  "ð¥°": " Smiling Face with Hearts",
  "ð": " Smiling Face with Heart-Eyes",
  "ð¤©": " Star-Struck",
  "ð": " Face Blowing a Kiss",
  "ð": " Kissing Face",
  "ð": " Kissing Face with Closed Eyes",
  "ð": " Kissing Face with Smiling Eyes",
  "ð¥²": " Smiling Face with Tear",
  "ð": " Face Savoring Food",
  "ð": " Face with Tongue",
  "ð": " Winking Face with Tongue",
  "ð¤ª": " Zany Face",
  "ð": " Squinting Face with Tongue",
  "ð¤": " Money-Mouth Face",
  "ð¤": " Smiling Face with Open Hands",
  "ð¤­": " Face with Hand Over Mouth",
  "ð¶âð«ï¸": " Face in Clouds",
  "ð": " Smirking Face",
  "ð": " Unamused Face",
  "ð": " Face with Rolling Eyes",
  "ð¬": " Grimacing Face",
  "ð®âð¨": " Face Exhaling",
  "ð¤¥": " Lying Face",
  "ð": " Relieved Face",
  "ð": " Pensive Face",
  "ðª": " Sleepy Face",
  "ð¤¤": " Drooling Face",
  "ð´": " Sleeping Face",
  "ð·": " Face with Medical Mask",
  "ð¤": " Face with Thermometer",
  "ð¤": " Face with Head-Bandage",
  "ð¤¢": " Nauseated Face",
  "ð¤®": " Face Vomiting",
  "ð¤§": " Sneezing Face",
  "ð¥µ": " Hot Face",
  "ð¥¶": " Cold Face",
  "ð¥´": " Woozy Face",
  "ðµ": " Face with Crossed-Out Eyes",
  "ðµâð«": " Face with Spiral Eyes",
  "ð¤¯": " Exploding Head",
  "ð¤ ": " Cowboy Hat Face",
  "ð¥³": " Partying Face",
  "ð¥¸": " Disguised Face",
  "ð": " Smiling Face with Sunglasses",
  "ð¤": " Nerd Face",
  "ð§": " Face with Monocle",
  "ð": " Confused Face",
  "ð": " Worried Face",
  "ð": " Slightly Frowning Face",
  "â¹ï¸": " Frowning Face",
  "ð®": " Face with Open Mouth",
  "ð¯": " Hushed Face",
  "ð²": " Astonished Face",
  "ð³": " Flushed Face",
  "ð¥º": " Pleading Face",
  "ð": "Waving Hand ",
  "ð¤": "Raised Back of Hand",
  "ðï¸": "Hand with Fingers Splayed",
  "â": "Raised Hand",
  "ð": "Vulcan Salute",
  "ð": "OK Hand",
  "ð¤": "Pinched Fingers",
  "ð¤": "Pinching Hand",
  "âï¸": "Victory Hand",
  "ð¤": "Crossed Fingers",
  "ð¤": "Love-You Gesture",
  "ð¤": "Sign of the Horns",
  "ð¤": "Call Me Hand",
  "ð": "Backhand Index Pointing Left",
  "ð": "Backhand Index Pointing Right",
  "ð": "Backhand Index Pointing Up",
  "ð": "Middle Finger",
  "ð": "Backhand Index Pointing Down",
  "âï¸": "Index Pointing Up",
  "ð": "Thumbs Up",
  "ð": "Thumbs Down",
  "â": "Raised Fist",
  "ð": "Oncoming Fist",
  "ð¤": "Left-Facing Fist",
  "ð¤": "Right-Facing Fist",
  "ð": "Clapping Hands",
  "ð": "Raising Hands",
  "ð": "Open Hands",
  "ð¤²": "Palms Up Together",
  "ð¤": "Handshake",
  "ð": "Folded Hands",
  "âï¸": "Writing Hand",
  "ð": "Nail Polish",
  "ð¤³": "Selfie",
  "ðª": "Flexed Biceps",
  "ð¦¾": "Mechanical Arm",
  "ð¦¿": "Mechanical Leg",
  "ð¦µ": "Leg",
  "ð¦¶": "Foot",
  "ð": "Ear",
  "ð¦»": "Ear with Hearing Aid",
  "ð": "Nose"
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
      <button onClick={likeclickhandler}>â¤ï¸</button>
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

import React, {useState} from "react";
import "./styles.css";

const emojiDictionary ={
  "😀" : "smiling",
  "😘" : "kiss",
  "😑" : "annoyance",
  "😔" : "sad",
  "❤️" : "heart"
};
let emojisWeKnow = Object.keys(emojiDictionary);


export default function App() {
  
  const [meaning , setMeaning]  = useState("")
  function emojiInputHandlet(event){
    let userInput = event.target.value;
   
    return (userInput in emojiDictionary)? setMeaning(emojiDictionary[userInput]):setMeaning("Failure to recognise this emoji");
      
    
  }
  
  function emojiClickHandler(emoji){
    setMeaning(emojiDictionary[emoji])
  }


  return (
    <div className="App">
      <h1>Insideoutt </h1>
      <input onChange = {emojiInputHandlet} / >
      <h2> {meaning}</h2>
      <h3>Emojis we know </h3>
      
     {emojisWeKnow.map(emoji=>{
          return (<span
            onClick ={()=> emojiClickHandler(emoji)}
           style={{padding: "2rem", cursor:"pointer"}} key={emoji}>
            {emoji}</span>)
        })}
      
     
      
    </div>
  );
}

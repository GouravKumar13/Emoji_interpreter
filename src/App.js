import React, {useState} from "react";
import "./styles.css";


export default function App() {
  
  const [ likecounter, setLikeCounter ] = useState(0);
  
  function likeClickHandler() {
 
  setLikeCounter(likecounter + 1);
}

  
  
  return (
    <div className="App">
      <h1>Welcome </h1>
      <button onClick={likeClickHandler}>Like me! </button>{likecounter}
    </div>
  );
}

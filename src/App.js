import './App.css';
import {useCallback, useState} from "react"
import Drawing from "./comp/Drawing"
import Word from "./comp/Word"
import Input from "./comp/Input"
function App() {
const words = ["monitor", "program", "application", "keyboard", "javascript", "gaming", "network"];
const [RanWord] = useState(words[Math.floor(Math.random() * words.length)].toUpperCase())
const [Letters, setLetter] = useState([])

const add = useCallback((l) => {
  if(Letters.includes(l))return
  setLetter((Letters) => [...Letters,l])
  }
)
const lost = (Letters.filter((i) => !RanWord.includes(i)).length) > 5
const win = RanWord.split("").every(v => Letters.includes(v));

console.log(win)
if(lost){
  alert("You Lose! Refresh to Try Again")
}
if(win){
  alert("You Win! Refresh to Play Again")
}
  return (
    <div
    style = {{
      display:"flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "50px",
    }}
    >
      <div><h1>HANGMAN Game</h1></div>
      <Drawing Guesses = {Letters.filter((i) => !RanWord.includes(i)).length}/>
      <Word Word = {RanWord} Letters = {Letters}
      lost = {lost}
      
      
      />
      <Input
        Letters = {Letters}
        add = {add}
        
       />
    </div>
  );
}

export default App;

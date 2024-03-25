import { useState,useReducer,useEffect,useRef } from "react";
import { words } from "./word";
import HangImage from "./components/HangImage";
import PopUp from "./components/PopUp";
function App() {
  const turkAlfabesi = ['a', 'b', 'c', 'ç', 'd', 'e', 'f', 'g', 'ğ', 'h', 'ı', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'ö', 'p', 'r', 's', 'ş', 't', 'u', 'ü', 'v', 'y', 'z'];
    const [word,setWord]=useState("");
    const [corrects,setCorrects]=useState([]);
    const [fails,setFails]=useState([]);
    const [status,setStatus]=useState("");
    const [disable,setDisable]=useState(false);
    const randomWords =()=>{
      if(words.length>0){
        setWord(words[Math.floor(Math.random()*words.length)])
      }
    }
    const reset =()=>{
      randomWords();
      setCorrects([]);
      setFails([]);
      setStatus("");
      setDisable(false);
    }

    useEffect(() => {
    reset();
    }, [])
    
    useEffect(() => {
     if(corrects.length&&word.split("").every(letter=>corrects.includes(letter))){
      setStatus("win")
     }
    }, [])

    useEffect(() => {
     if(fails.length===6){
        setDisable(true)
        setStatus("lose")
     }
    }, [fails])
    
    const maskWord= word.split("").map(letter => corrects.includes(letter)?letter: "_").join("");
    const onGuess =(letter)=>{
          if(word.includes(letter)){
            setCorrects([...corrects,letter])
          }else{
            setFails([...fails,letter])
          }
    }
  return (
    <div className="App">
  <p className="mask text-center">{maskWord}</p>
   <div className="grid grid-cols-10 w-2/3 m-auto gap-3">
          {
          turkAlfabesi.map((letter,index)=>(
            <button key={index} onClick={()=>onGuess(letter)} disabled={corrects.includes(letter) || fails.includes(letter)||disable}>{letter}</button>
          ))
        }
  </div>
     
        <HangImage fails={fails.length}></HangImage>
        <PopUp status={status} reset={reset} word={word}></PopUp>
    </div>
  );
}

export default App;


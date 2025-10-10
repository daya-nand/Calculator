import { useState } from "react";
import "./App.css";
import Container from "./container";
import Input from "./input";
import Button from "./buttons";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const CalButtons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  const [initialBtn,SetinitialBtn]=useState()
  const [initialInput,SetinitialInput]=useState("")
  
  const handleOnClick=(e)=>{

    if(e.target.innerText==="C"){
      SetinitialInput("");
    }
    else if(e.target.innerText==="="){
      const result=eval(initialInput);
      SetinitialInput(result);
    }
    else{
      SetinitialInput(initialInput+e.target.innerText)
    }
  }
  
  return (
    <Container>
      <Input initialInput={initialInput}></Input>
      <Button value={initialBtn} CalButtons={CalButtons} handleOnClick={handleOnClick}></Button>
    </Container>
  );
}

export default App;

import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  function incr() // Function for the Incrementing the value of the counter
  {
    // counter = counter + 1;
    // console.log(counter);
    setCounter(counter+1);
    setCounter(prev => prev +1);
  }

  function decr() // Function to decrement the value of the counter
  {
    // counter = counter - 1;
    // console.log(counter);
    setCounter(counter-1);
  }

  console.log(counter)

  return (
    <>
    <h1> {counter} </h1>
    <button onClick= {incr}> Increment </button>
    <button onClick= {decr}> Decrement </button>
    </>
  )
}

export default App

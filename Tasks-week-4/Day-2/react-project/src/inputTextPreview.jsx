import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState("");

  function handleInput(e) {
    setText(e.target.value)
  }

  return (
    <div className="box" >
      <h3> INPUT TEXT PREVIEW </h3>
      <input className="inputBox" onChange={handleInput} type="text"
        placeholder="Write Something here" />
      <p> {text || "Nothing to display"} </p>
    </div >

  )
}

export default App

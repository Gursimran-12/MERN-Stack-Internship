import { useRef } from "react"
import './App.jsx'

function UseRef() {
  const input = useRef(null);

  function handleBtnClick() {
    input.current.click();
  }

  return (
    <>
      <input ref={input} type="file" placeholder="Write your text here" style={{display: 'none'}}/>
      <button onClick={handleBtnClick}> Upload your file here </button>
    </>

  )

}

export default UseRef;


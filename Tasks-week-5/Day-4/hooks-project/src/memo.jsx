import React, {useState} from 'react'
import HelloWorld from './components/hello'
import MemoPrac from './components/button'

function Memo()
{
  const[counter, setCounter] = useState(0);

  function handleClick()
  {
    setCounter(prev=> prev+1);
  }

  return(
    <>
    <h3> {counter} </h3>
    <button onClick={handleClick}> Increase </button>

    <HelloWorld />
    <MemoPrac />
    </>
  )
}

export default Memo
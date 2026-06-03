import './App.css'
import { useState } from 'react'

function App() {

  // Using Hook (useState) for managing the States
  let [convertor, tempConvert] = useState(18);
  let [conversion, unitConvert] = useState(12);

  function convert()
  {
    // Main function for temperature conversion
    tempConvert((convertor-32) * 5/9);
  }

  function units()
  {
    unitConvert(conversion*1000);
  }

  console.log(tempConvert);
  return (
    <>
    {/* Temperature Convertor */}
    {/* Displaying the value of convertor  */}
    <h2> Temperature Convertor (Farenheit to Celcius): { convertor } </h2> 

    {/* Here we are calling the convert function */}
    <button onClick = {convert}> conversion </button>
    

    {/* Unit Conversions (Km to m) */}
    {/* Description of the second function  */}
    <h2> Units Conversion (KM to meters): {conversion} Km </h2>

    {/* Adding Event Listener for the conversion */}
    <button onClick={units}> Convert </button>


    </>
  )
}

export default App

import { useState } from "react"
import { v4 as uuid } from "uuid"

function IdGenerator()
{
  const [id, setId] = useState("")

  function getId()
  {
    setId(uuid());
  }


  return(
    <>
    <button onClick={getId}> Generate Id </button>
    <h3> {id} </h3>
    </>
  )

}

export default IdGenerator
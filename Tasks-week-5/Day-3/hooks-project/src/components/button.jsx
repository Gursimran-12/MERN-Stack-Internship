import React, {memo} from "react"
import '../App.css'

const MemoPrac = () =>
{
    console.log(" Button Rendered!");

    return (
        <>
        <button> Click Here </button>
        </>
        
    )
}


export default memo(MemoPrac)
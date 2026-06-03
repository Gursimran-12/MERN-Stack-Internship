import { useState } from "react";
import "./App.css";

function Liked()
{
    const[like, setLike] = useState("like");

    function handleClick()
    {
        // setLike("liked"); // Simple without Toggle
       setLike(prev => (prev === "liked" ? "like" : "liked")); // with Toggle
    }

    return(
        <>
        <h1> {like} </h1>
        <button onDoubleClick={handleClick}> click here </button>
        </>
    )
}

export default Liked;
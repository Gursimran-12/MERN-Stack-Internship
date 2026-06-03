import { useState, useEffect } from 'react'
import './App.css'

function BackgroundColour() {
    const [bgColor, setcolor] = useState("lightgreen");
    const [textColor, setTextClr] = useState("");

    function blackClr()
    {
        setcolor("black");
        setTextClr("White");
    }

    
    function whiteClr()
    {
        setcolor("white");
        setTextClr("black");
    }

    function pinkClr()
    {
        setcolor("pink");
        setTextClr("black");
    }

    return (
        <div className="heroBox" style={{ backgroundColor: bgColor, color: textColor}}>
            <h3 > BACKGROUND COLOR CHANGER </h3>
            <div className='btnRow'>
                <button id="blackBtn" onClick={blackClr}> Black </button>
                <button id="whiteBtn" onClick={whiteClr}> White </button>
                <button id="pinkBtn" onClick={pinkClr}> Soft-Pink </button>

            </div>
        </div >

    )
}

export default BackgroundColour
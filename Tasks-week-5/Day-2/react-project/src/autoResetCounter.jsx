// import { useState, useEffect } from "react";

// function ResetCounter() {
//     const [counter, setCounter] = useState(0);


//     function incr() {
//         {
//             (counter < 10) ? setCounter(counter + 1) : setCounter(0)
//         }
//     }

//     function decr() {
//         setCounter(counter - 1);
//     }



//     return (
//         <>
//             <h1> {counter} </h1>
//             <button onClick={incr}> Increment </button>
//             <button onClick={decr}> Decrement </button>
//         </>
//     )

// }

// export default ResetCounter

import { useState, useEffect } from "react";

function ResetCounter() {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        let interval;
        interval = setInterval(() => { setCounter(prev => (prev < 10 ? prev + 1 : 0)) }, 1000)

        return () => clearInterval(interval);

    }, [])


    return (
        <>
            <p> Here is the counter and it will reset after 10 </p>
            <h1> {counter} </h1>
        </>
    )

}

export default ResetCounter
import React, {useEffect, useState} from 'react'

function Timer()
{
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let interval;
        if(running)
        {
            interval = setInterval(()=> {setTime(prev=> prev+1)},1000)
        }

        return () => clearInterval(interval); // stop the timer
    }, [running]); // Reload when the running's state will be changed

    return(

        <>
        <p> {time} </p>
        <button onClick={() => setRunning(true)}> Start </button>
        <button onClick={()=> setRunning(false)}> Stop </button>
        </>
    )
}
export default Timer
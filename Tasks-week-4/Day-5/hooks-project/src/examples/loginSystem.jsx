// Login Form with Auto Focus

// Task:

// Create a login form where:

// When the page loads → cursor should automatically focus on username input

// When user clicks Login, focus should move to password input if empty

import { useState, useEffect, useRef } from "react";
import '../App.css'

function Login() {
    const userNameRef = useRef();
    const passRef = useRef();
    const [status, setStatus] = useState("");

    useEffect(() => {
        userNameRef.current.focus();
    }, [])

    function handlePass() {
        if (userNameRef.current.value === "") {
            setStatus("Username is a mandatory field");
            userNameRef.current.focus();
            return;
        }

        if (passRef.current.value === "") {
            setStatus("Password is a mandatory field");
            passRef.current.focus();
            return;
        }
        
        else {
            setStatus("Login Successfully!")
            setTimeout(() => {

                userNameRef.current.value = "";
                passRef.current.value = "";
                setStatus(" ")
            }, 2000)
        }
    }

    const handleChange = (e) => {
        if (e.target.value !== "") {
            setStatus(" ")
        }
    }

    return (
        <>
            <div className="box">
                <h2> LOGIN </h2>
                <h3> {status} </h3>
                <input className="inputBox" onChange={handleChange} ref={userNameRef} type="text" placeholder="Username Here" />
                <input className="inputBox" onChange={handleChange} ref={passRef} type="password" placeholder="Password Here" />
                <button id="btn" onClick={handlePass}> Login </button>

            </div>

        </>
    )
}

export default Login
// - Button: **Login / Logout**
// - When logged in → show `"Welcome User"`
// - When logged out → show `"Please Login"`

import React, { useState } from "react";
import '../App.css'
import {Button} from './Button.jsx'

function Login() {
    const [status, setStatus] = useState("");
    function login() {

                setStatus(prev=> prev=== "Welcome User"? " " : "Welcome User");
    }

    return (
        <>
            <Button />
            <button onClick={login}> Login </button>
            <p> {status} </p>
        </>
    )
}

export default Login;
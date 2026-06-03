// // - Button: **Login / Logout**
// // - When logged in → show `"Welcome User"`
// // - When logged out → show `"Please Login"`

// import React, { useState } from "react";

// function Login() {
//     const [status, setStatus] = useState("");

//     function login() {

//         setStatus(prev => prev === "Welcome User" ? " " : "Welcome User");
//         userLogout.style.display = "block";
//         userLogin.style.display = "none";
//     }


//     function logout() {

//         setStatus(prev => prev === "Login Here" ? " " : "Login Here");
//         userLogout.style.display = "none";
//         userLogin.style.display = "block";
//     }

//     return (
//         <>
//             <p> {status} </p>
//             <button id="userLogin" onClick={login}> Login </button>
//             <button id="userLogout" onClick={logout} style={{ display: 'none' }}> Logout </button>
//         </>
//     )
// }

// export default Login;

// Another Way of doing this
import React, { useState } from "react";

function Login() {
    const [status, setStatus] = useState(false);
    function login() {
        setStatus(true);
    }

    function logout() {
        setStatus(false);
    }

    return (
        <>
            <p> {status ? "Welcome User" : "Login Here"} </p>
            {status ?
                <button onClick={logout}> Logout </button> :
                <button onClick={login}> Login </button>
            }
        </>
    )
}

export default Login;
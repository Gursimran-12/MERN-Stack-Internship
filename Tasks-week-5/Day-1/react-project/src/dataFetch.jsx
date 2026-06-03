import { useState, useEffect } from "react";

function HandleData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setLoading(true)
        async function getData() {
            let res = await fetch("https://jsonplaceholder.typicode.com/posts");
            res = await res.json();

            setTimeout(() => {
                setData(res)
                setLoading(false);
            }, 1000)
        }

        getData();
    }, [])

    return (
        <>
        {!loading
        ? data &&
        data.length > 0 &&
         data.map((user, index) => {
                console.log("running");
            return (
            <div key={user.id}>
                <h1>{user.title}</h1>
                <p> {user.body} </p>
                <hr />
            </div>
            );
        })
        : "loading....." }
        </>
    )
}

export default HandleData
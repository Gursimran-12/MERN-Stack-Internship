import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setLoading(true)
    async function getData() {
      let res = await fetch("https://dummyjson.com/users");
      res = await res.json();
      setTimeout(() => {
        setData(res.users);
        setLoading(false)
      }, 1000);

    }
    getData();
  }, [refresh]);

  function handleRefresh()
  {
    setRefresh(prev => !prev);
    setData([]);
  }

  return (
    <>
    <button onClick={handleRefresh}> Refresh </button>
      {!loading
        ? data &&
        data.length > 0 &&
        data.map((user, index) => {
          console.log("running");
          return (
            <div key={index}>
              <img src={user.image} alt="" srcSet="" />
              <h1>{user.firstName}</h1>
              <hr />
            </div>
          );
        })
        : "Loading..."}
    </>
  );
}

export default App;


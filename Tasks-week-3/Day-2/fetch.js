// First way (Simple fetching using await())
// const res = await fetch("https://dummyjson.com/users");
// const readableData = await res.json();
// console.log(readableData);


// Second way (fetching using then-catch)
// fetch("https://dummyjson.com/users")
// .then((res) => res.json())
// .then((res) => console.log("res : ", res))
// .catch((err) => {
// console.log("Error!!");
// });

// Third way (Using async-await)
// async function fetchUserData ()
// {
//  const res = await fetch("https://dummyjson.com/users");
//  const readableData = await res.json();
// console.log(readableData)
// }
// fetchUserData();

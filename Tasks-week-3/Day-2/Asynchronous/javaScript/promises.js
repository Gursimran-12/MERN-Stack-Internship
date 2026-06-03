/*
let promise = new Promise((resolve,reject) => {
    let success = false;
    if(success)
    {
        console.log("Task completed");
    }
    else
    {
        console.log("Something went wrong!");
    }
});


// Promises using settimeout()
function getData()
{
    return new Promise((resolve,reject) => 
        {
            let result = true;
            if(result)
            {
                setTimeout(() => {console.log(`Data Recieved !`)},2000)
            }
            else
            {
                console.log(`Something went wrong`);
            }
            });
}
getData();

// Another Example related to promises
const userData = 
{
    userName: "Simran",
    profileImage: "www.xyz.com"
}

const getImage = () => {
    return new Promise((resolve, reject) => setTimeout(() => {
        const data = false;
        if(data)
        {
            console.log(`userData`);
        }
        else
        {
            console.log(`Error`)
        }
    }, 1500))
}

// Using .then in promises
let myPromise = new Promise((resolve,reject) =>
{
    setTimeout(() => {resolve("Data loaded successfully")},2000);
});

myPromise.then((result) => {
    console.log("Recieved from promises:", result);
});
console.log("Program ended");


// Using the catch ()

let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Failed to load data");
    }, 2000);
});

console.log(myPromise);
myPromise.catch((error) => {
    console.log("Error:", error);
});
console.log(myPromise);
*/








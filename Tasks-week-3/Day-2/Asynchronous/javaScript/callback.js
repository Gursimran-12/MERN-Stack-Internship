/*
// Here we are going to use callback
// Synchronous Callback

function greet(name, callback)
{
    console.log(`Hello ${name}`);
    callback();
}

function sayBye()
{
    console.log(`GoodBye!`);
}

greet("Simran", sayBye);

// Asynchronous Callback
console.log(`Starting...........`);
setTimeout(() => {console.log("Waiting done!")}, 2000);
console.log(`Ending.........`)
*/

/*
// Another Example

console.log(`Starting........`);
function success(fun)
{
    console.log(`Operation Successful!`);
    fun();
}
function error()
{
    console.log(`Error in fetching the data`);
}

function Display(success,error)
{
    console.log(`First`)
    setTimeout(() => {
        const data= Math.round(Math.random)
        if(data)
        {
            success(() => {console.log(`Hello world!`)});
        }
        else
        {
            error();
        }
    }, 1500)
}

Display(success, error)
console.log(`ending......`);
*/

// Practice Example related to Callback
/*
Problem Statement (Callback – Beginner)

Create a function named processNumber that accepts two parameters:

A number

A callback function

Inside the processNumber function, check whether the given number is greater than 10.

If the number is greater than 10, call the callback function and pass the message "Number is greater than 10".

If the number is not greater than 10, call the callback function and pass the message "Number is 10 or less".

Write another function that will receive the message and print it to the console.

Call the processNumber function with a sample number and the callback function.


function processNumber(number, callback)
{
    if(number > 10)
    {
        callback();
        console.log(`Number is greater than 10`);
    }
    else
    {
        callback();
        console.log('Number is less than 10');
    }
}

function number()
{
    console.log(`We got the number, let us examine this`);
}

processNumber(12, number);
*/

// Another Example
// Create a function named loadData that accepts two parameters:
// A message string
// A callback function
// Inside the loadData function, display "Loading data..." in the console.
// Use setTimeout to wait for 2 seconds.
// After 2 seconds, call the callback function and pass the message string to it.
// Create another function that receives the message and prints it to the console.
// Call the loadData function with a sample message and the callback function.

function loadData(message, callback)
{
    console.log(`Loading........`);
    setTimeout(() => {
        callback();
        console.log(`${message}`);
    }, 2000);
}

function msg()
{
    console.log(`Hey! we are calling callback fucntion`);
}

loadData("Practicing callback concepts", msg);


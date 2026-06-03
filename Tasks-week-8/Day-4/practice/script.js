// // Asynchronous JavaScript
// // callback, promise, Async-await

// // callback
// function error() {
//     console.log("Sorry, you have an error here");
// }

// function success() {
//     console.log("Congratulations! you have won");
// }

// console.log("Starting...")
// function display(error, success) {
//     setTimeout(() => {
//         const data = Math.round(Math.random());
//         if (data) {
//             success();
//         }
//         else {
//             error();
//         }

//     }, 3000)
// }
// display(error, success);
// console.log("Ending...");

// // promise

// console.log("Beginning with promises here");
// let myPromise = new Promise((resolve, reject) => {
//     let success = true;
//     if (success) {
//         resolve("Task completed");
//     }
//     else {
//         reject("Not able to complete the task")
//     }
// });

// // Promise using then() and catch()

// console.log("Starting....")
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const data = Math.round(Math.random());

//         if (data) {
//             resolve("Congratulations! You got the data");
//         } else {
//             reject("Sorry! You failed");
//         }

//     }, 3000);
// });

// promise.then((result) => {
//     console.log("Success message from promise:", result);
// })
//     .catch((error) => {
//         console.log("Error message from promise:", error);
//     });

// console.log("Program ended");

// // Promise chain

// function shower() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Showered!"), 2000);
//     });
// }

// function dress() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Dressed !"), 2000);
//     });
// }

// function eatBreakfast() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Eating..."), 3000);
//     })
// }

// shower()
//     .then((msg) => {
//         console.log(msg);
//         return dress();
//     })
//     .then((msg) => {
//         console.log(msg);
//         return eatBreakfast();
//     })
//     .then((msg) => {
//         console.log(msg);
//         console.log("Ready to go!");
//     });

// // Practice of Async-Await

// const database = {
//     username: "Gursimran",
//     password: "123456"
// };

// function login(username, password) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (username === database.username && password === database.password) {
//                 resolve("You are logged in!");
//             } else {
//                 reject("Invalid Credentials");
//             }
//         }, 1500);
//     });
// }

// const getDataFromUser = async () => {
//     const username = "Gursimran";
//     const password = "123456";

//     try {
//         const res = await login(username, password);

//         if (res) {
//             window.location.href = "https://google.com";
//         }

//     } catch (err) {
//         console.log(err);
//     } finally {
//         console.log("Always run!");
//     }
// };

// getDataFromUser();


// // using fetch()

// async function getData()
// {
//     const data = await fetch("https://dummyjson.com/products");
//     const res = await data.json();
//     console.log(res)
// }
// getData();

// Local Storage
// Basically local storage is a storage, in which data remains safe even if the browser
// is closed permanently

let username = "Gursimran";
localStorage.setItem("User", username);
let storedUser = localStorage.getItem("User");

console.log("Stored User: ", storedUser);


// Session Storage
// Session Storage is a storage the data is deleted when the browser tab is closed

sessionStorage.setItem("color", "blue");
let favColor = sessionStorage.getItem("color");
console.log("Fav color:", favColor);

// Program to practice related to Array and objects
// Map(), filter(), reduce(), some(), forEach(), push(), pop(), shift(), unshift(), 
// slice(), splice(), split(), join()

// Create a small Student Marks Manager using JavaScript arrays.
// You will manage students' names and marks using different array functions.

let students = [
  { name: "Simran", marks: 85 },
  { name: "Geeta", marks: 97 },
  {name: "Hari", marks: 87},
  {name: "Seema", marks: 98}
];

// Adding a new student at the end using push()
students.push({name: "Sham", marks: 92});

// Adding a student at the start using unshift()
students.unshift({name:"Babita", marks: 90});

// Removing the Student at the last
students.pop();

//Removing the student at the starting
students.shift();

// Displaying Students 
students.forEach((student) => {
    console.log(`Student's Name: ${student.name}, Student's Marks: ${student.marks}`);
})

// Deleting a particular student
// Suppose we want to delete the student whose name is "Geeta"
const newStudents = students.filter((student)=> {
    return(student.name !== "Geeta");
})

console.log("Students name after deletion")
console.log(newStudents);


// Get only passed students
const passedStudents = students.filter((student) => {
    return(student.marks > 70);
})
console.log("Displaying the pass Students");
console.log(passedStudents);


// Create Only Names List
const nameList = students.map((student) => {
    return(student.name);
})
console.log("Displaying names of the students only");
console.log(nameList);

// Calculate Total Marks

const TotalMarks = students.reduce((acc,n) => acc+n.marks, 0)
console.log(TotalMarks);

// Check if Any Student Scored bad

const badScore = students.some(student => student.marks<90);
console.log(badScore);

// Simple Program to understand the concept of slice(), splice() and split() , join()
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

let someFruits = fruits.slice(1, 3);

console.log("Original Array:", fruits);
console.log("Sliced Array:", someFruits);

fruits.splice(2, 1, "Strawberry"); 
console.log("After Splice:", fruits);

let sentence = "I love learning JavaScript";
let words = sentence.split(" ");
console.log(words);

words = ["I", "love", "JavaScript"];
sentence = words.join(" ");
console.log(sentence);

// Simple Program to understand for..of loop
for(let student of students)
{
    console.log(`${student.name} - ${student.marks}`);
}

// Understanding objects
// Making use of for...in loop, keys(), values(), enteries(), hasownProperty(), in-keyword()

let student = {
    name: "Simran",
    age: 20,
    course: "B.Tech",
    marks: 95
};

console.log("Using for...in loop:");
for (let key in student) {
    console.log(key + " : " + student[key]);
}

console.log("Using 'in' keyword:");
console.log("name" in student);  
console.log("salary" in student);

console.log("Using Object.keys():");
let keys = Object.keys(student);
console.log(keys);

console.log("Using Object.values():");
let values = Object.values(student);
console.log(values);

console.log("Using Object.entries():");
let entries = Object.entries(student);
entries.forEach(([key, value]) => {
    console.log(key + " : " + value);
});


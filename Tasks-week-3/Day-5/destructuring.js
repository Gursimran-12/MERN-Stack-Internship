// Array Destructuring Syntax or Expression)
// Array Intialization
const fruits = ["Apple", "Mango", "Banana", "Orange", "Papaya", "Grapes", "Guava"];

// Array Destructing (Storing the values of the array Fruits into another array)
const [first, second, third, fourth, fifth, sixth, seventh] = fruits;

// Printin the values fetched using destructing of array
console.log(first, second, third, fourth, fifth, sixth, seventh);

// ***************************************************************************************

// Object Destructuring
// Object Intialization
const obj = {
    name: "Gursimran",
    rollNo: 2215053,
    study: "Computer Science",
    hobbies: ["Sketching", "Painting", "Playing Piano", "Art & craft"],
    favouriteFood: "fruits",
    friend:
    {
        fname: "abc",
        rollNo: "2215054",
        study: "Computer Science",
        hobbies: ["Singing", "Gardening"],
        favouriteFood: "Pizza"
    }
}

// Object Destructuring 
const { name: username, rollNo, study, hobbies, favouriteFood, friend: { fname: friendName } } = obj
// Displaying after Destructuring
console.log(username, rollNo, study, hobbies, favouriteFood, friendName)

// *******************************************************************************************


// Combining Two objects using (...)
// First Object
const junior = {
    name: "Gursimran",
    rollNo: 2215053,
    study: "Computer Science",
    hobbies: ["Sketching", "Painting", "Playing Piano", "Art & craft"],
    favouriteFood: "fruits"
}

// Second Object
const senior = {
    sName: "xyz",
    sRollNo: 2215054,
    sStudy: "Computer Science",
    sHobbies: ["Sketching", "Painting", "Playing Piano", "Art & craft"],
    sFavouriteFood: "Cake"
}


// Third Object
const combine =
{
    ...junior,
    ...senior
}

// Displaying
console.log(combine);

// **************************************************************************************************

// Using ...rest (operators)
// Rest: Gathering unnamed, extra arguments: function myFunc(first, ...restOfArgs) { ... }.
function show (a,b,c,...rest)
{
    console.log(`The elements in the rest are ${rest}`);
}
show(2,3,4,5,6,7,8)


// *******************************************************************************************************

// Using ...spread (operators)
// Spread: Opposite of rest, Expands arrays and objects into individual elements

const nums = [1,2,3,4,5,6,7,8,9]
function display(a,b,c,...rest)
{
    console.log(`The values inside the rest is ${rest}`);
}
display(1,2,3,...nums)


// ***********************************************************************************************************
// Using arguement[]
// arguments[]: This is an array-like object. It is a built-in local variable available within all non-arrow functions

const numbers = [1,2,3,4,6,7]
function sum() {
    console.log(arguments[0]);
}
sum(3, 5, ...numbers);

// ********************************************************************************************************
// TASKS RELATED TO THIS
// Sum of unknown number of variables

/*
// Practic of Looping Statements

// Example: while loop
// Displaying Even Numbers
let num = 1;
console.log(`Displaying the Even numbers`);
while(num<10)
{
    if(num%2 === 0)
    {
        console.log(`${num}`);
    }
    num++ ;
}

// Displaying Odd Numbers
console.log('Displaying the Odd numbers');
let no = 1;
while(no<10)
{
    if(no%2 !== 0)
    {
        console.log(`${no}`);
    }
    no++;
}

// Example: for loop
// To find the Factorial of a number
let fact = parseInt(prompt(`Enter the value whose factorial you want: `));
let factorial = 1;
for(let i=1; i<=fact; i++)
{
    factorial = factorial *i;
}
console.log(`The factorial of ${fact} is ${factorial}`);
alert(`The factorial of ${fact} is ${factorial}`);

// To find the sum of n natural numbers
let n = parseInt(prompt(`Enter the number till where you want to find the sum: `));
let sum = 0;
for(let j=1; j<=n; j++)
{
    sum = sum +j;
}
console.log(`The sum of ${n} natural numbers is ${sum}`);

// Example for do-while loop
let inp = parseInt(prompt(`Enter till where you want to display the number`));
let numm = 1;
do
{
    console.log(numm);
    numm++;
}while(numm<=inp);
console.log(`${numm}`); // It is exit controlled loop, firstly the loop will be executed then conditon will be checked

// Second Example

let option;
do
{
    option = parseInt(prompt(`Enter the number related to your choice
        1. Choice 1
        2. Choice 2
        3. Exit`));
    
    switch(option)
    {
        case 1:
        {
            alert(`You selected case 1`);
            break;
        }
        case 2:
        {
            alert(`You selected case 2`);
            break;
        }
        case 3:
        {
            alert(`Exiting........`);
            break;
        }
        default:
        {
            alert(`Invalid Choice`);
        }
    }
}while(option !== 3)
*/

// Displaying Table using for loop

// let table = parseInt(prompt(`Input the number whose table you want`));
// console.log(`Displaying the table of ${table}`);
// let result;

// for(let i=0; i<=10; i++)
// {
//     result = table * i;
//     console.log(`${table} X ${i} = ${result} `)
// }


/*
// Create a loop that asks for 5 test scores, sums them up, and then calculates the average. 
let num = prompt(`Enter the Number of Subjects:`);
let marks= 0;
let grades, percentage;
for(let i=1; i<=num; i++)
{
    grades = parseInt(prompt(`Enter the marks of Subject- ${i} (out of 100)`));
    marks = marks + grades;
}
alert(`Total Marks ${marks}`);
let choice = prompt(`Do you want to find percentage`);
if(choice === "Yes" || choice === "yes")
{
    percentage = (marks/(num*100))*100;
    alert(`You scored ${percentage} %`);
}
*/

/*
// Powers of Two: Generate a sequence of powers (2, 4, 8, 16...) up to 512.

let num = prompt(`Enter till where you want to generate the series`);
let powerr;
for(let i=1; i<=num; i++)
{
    powerr = 2**i;
    console.log(`${powerr}`);
}
*/

/*
// Print numbers from 0 to 100 in increments of 10.
let num = parseInt(prompt(`Enter the number till where you want to display numbers with increment of 10`));
let no = 0;
while(no <= num)
{
    console.log(no);
    no = no + 10;
}
*/

/*
// Using break and continue
console.log(`This shows the example of break`);
for(let i=1; i<=10;i++)
{
    if(i === 6)
    {
        break;
    }
    console.log(`The value of i is ${i}`);
}

// Using continue
console.log(`This shows the example of continue`);
for(let i=1; i<=10; i++)
{
    if(i=== 6)
    {
        continue;
    }
    console.log(`The value of i is ${i}`);
}
*/

/*

// Displaying the patterns 
// *****
// *****
// *****
// *****
// *****

let num = parseInt(prompt(`Enter the number till where you want to print the pattern: `));
let str = "";

for(let i=0; i<num; i++)
{
    for(let j=0; j<num; j++)
    {
        str += "* ";
    }

    str += "\n";
}
console.log(`${str}`);

*/

/*

// Displaying the second pattern
// *
// **
// ***
// ****
// *****

let num = parseInt(prompt(`Enter the number till where you want to print the pattern`));
let str = "";

for(let i=0; i<num; i++)
{
    for (let j=0; j<i; j++)
    {
        str += "* ";
    }
    str += "\n";
}
console.log(`${str}`);

*/

/*
// Displaying the pattern
// *****
// **** 
// ***
// **
// *

let num = parseInt(prompt(`Enter the number till where you want to print the pattern`));
let str = "";

for(let i=num; i>=1; i--)
{
    for (let j=0; j<i; j++)
    {
        str += "* ";
    }
    str += "\n";
}
console.log(`${str}`);
*/

/*
// Displaying the pattern
//    *
//   **
//  ***
// ****

let num = 4;
let str="";
for(let i=1; i<=num; i++)
{
    for(let k=1; k<=num-i; k++)
    {
        str += " ";
    }
    for(let j=1; j<=i; j++)
    {
        str += "*";
    }
    str += "\n";
}
console.log(`${str}`);
*/

/*
// Displaying the following pattern
// 1
// 10
// 101
// 1010
// 10101

let str= "";
let num = 4;
let result = "1";
for(let i=1; i<=4; i++)
{
    for(let j=1; j<=i; j++)
    {
        str += result;
        if(result == "1")
        {
            result = 0;
        }
        else
        {
            result = 1;
        }
    }
    str += "\n";
    result = 1;
}
console.log(`${str}`);
*/

/*
// Displaying the following pattern
// 1
// 01
// 010
// 1010
// 10101

let str= "";
let num = 4;
let result = "1";
for(let i=1; i<=4; i++)
{
    for(let j=1; j<=i; j++)
    {
        str += result;
        if(result == "1")
        {
            result = 0;
        }
        else
        {
            result = 1;
        }
    }
    str += "\n";
}
console.log(`${str}`);
*/

/*
// Displaying the pattern
// A
// AB
// ABC
// ABCD

let str= "";
let num = 4;
for(let i=1; i<=4; i++)
{
    for(let j=1; j<=i; j++)
    {
        str += String.fromCharCode(64+j);
    }
    str += "\n";
}
console.log(`${str}`);
*/

// Displaying the following pattern
// *    *
//  *  *  
//   *
//  *  *
// *    *

/*
let str= "";
let num = 5;
let digit = num;
for(let i=1; i<=num; i++)
{
    for(let j=1; j<=num; j++)
    {
        if(j==i)
        {
            str += "* "
        }

        else if(j == digit)
        {
            str += "*"
        }
        else
        {
            str += " ";
        }

    }

    
    digit--;
    str += "\n";
}
console.log(`${str}`);
*/

// Displaying the following pattern
//   *   
//  ***
// *****

// let num = 4;
// let str="";
// for(let i=1; i<=num; i++)
// {
//     for(let k=1; k<=num-i; k++)
//     {
//         str += " ";
//     }
//     for(let j=1; j<=num; j++)
//     {
//         if(j<=i)
//         {
//             str += "*";
//         }
//     }
//     for(let l=1; l<i; l++)
//     {
//             str += "*";
//     }
//     str += "\n";
// }
// console.log(`${str}`);


// Displaying the second pattern
// *
// **
// ***
// ****
// *****

let num = parseInt(prompt(`Enter the number till where you want to print the pattern`));
let str = "";

for(let i=0; i<num; i++)
{
    for (let j=0; j<=i; j++)
    {
        str += "* ";
    }
    str += "\n";
}
console.log(`${str}`);
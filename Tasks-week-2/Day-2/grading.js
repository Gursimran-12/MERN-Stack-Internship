// Switch Statement
let a = parseInt(prompt(`Enter the first number`));
let b = parseInt(prompt(`Enter the Second number`));
let c;

let num = prompt(`Enter the operator (+,-,*,/)`);
switch (num) {
    case "+": //Addition
        {
            c = a + b;
            alert(`The Addition of ${a} and ${b} is ${c}`);
            break;
        }

    case "-": //Subtraction
        {
            c = a - b;
            alert(`The Subtraction of ${a} and ${b} is ${c}`);
            break;
        }

    case "*": // Multiplication
        {
            c = a * b;
            alert(`The product of ${a} and ${b} is ${c}`);
            break;
        }

    case "/": // Division
        {
            c = a / b;
            alert(`The result for the division is ${c}`);
            break;
        }

    default: // Invalid Result
        {
            alert(`Invalid operations`);
        }
}

/*
console.log(`Hey! this is a Grading System`);
let marks = parseInt(prompt(`Enter the marks here (0 - 100)`));

// Conditon for avoiding the negative numbers
if(marks<0){
    console.log(`Not possible`);
    alert(`Kindly note, marks cannot be negative`);
}

// Main logic for grading system

else if(marks>= 0 && marks<40){
    console.log(`Failed!`);
    alert(`Unfortunately, you have failed the Exam!`);
}

else if(marks>=40 && marks<60) {
    console.log(`C Grade`);
    alert(`You have passed the Exam with C Grade`);
}

else if(marks>=60 && marks<80) {
    console.log('B Grade');
    alert(`You have passed the Exam with B Grade`);
}

else if(marks>=80 && marks<90) {
    console.log('A Grade');
    alert('You have passed the Exam with A Grade');
}

else if(marks>=90 && marks<100) {
    console.log('A+ Grade');
    alert(`Congratulations! you have passed the Exam with A+ Grade`);
}

// Condition for avoiding the marks greater than 100
else {
    console.log('Not Allowed');
    alert(`Kindly note, marks should not be greater than 100`);
}


// Small Program to check whether you will be able to drive the car or not

let carLicense= prompt(`Do you have Car Licsence (yes/no): `);
let carInsurance= prompt(`Do you have Car Insurance (yes/no):`);

if(carLicense == 'yes' || carLicense == 'Yes' && carInsurance == 'yes' || carInsurance == 'Yes') {
    console.log(`Yes! you can drive the car`);
    alert(`Yes! you can drive the car`);
}

else {
    console.log('No, you will not be able to drive the car');
    alert(`No, you won't be able to drive the car`);
}

// Small Program to choose clothing with respect to seasons

let season = prompt(`Enter the season here, based on the season we will predict which kind of clothing you should do`);

switch(season)
{
    case "Summer":
    {
        console.log(`In Summer Season, you should wear cotton clothes`);
        alert(`In Summer season, you should wear Cotton clothes`);
        break;
    }

    case "Winter":
    {
        console.log(`In Winte season, you should wear woolen clothes`);
        alert('In Winter season, you should wear Woolen clothes');
        break;
    }

    case "Spring":
    {
        console.log(`In Spring season, you should wear cotton or linen clothes`);
        alert('In Spring season, you should wear cotton or linen clothes');
        break;
    }

    case "Autumn":
    {
        console.log(`In Autumn season, you should wear cozy clothes`);
        alert('In Autumn season, you should wear cozy clothese');
        break;
    }

    default:
    {
        console.log(`Invalid Season`);
    }
}

// Small program to implement the concept of Ternary operators

let age = 18;

// using simple if-else statement 
if(age>=18){
    console.log(`You are an adult`);
    alert(`You are an adult`);
}
else
{
    console.log('You are a minor');
    alert(`You are a minor`);
}

// Using ternary operator
let result = (age>=18) ? "Adult" : "Minor";
console.log(`${result}`);
alert(`${result}`);
*/


// Creation of an ATM Menu

let savedMoney = 2000;
let amount;
let money;
let i = 15;
do {
    let operation = parseInt(prompt(`ATM MENU
    1. Withdraw
    2. Deposit
    3. Check Balance
    4. Exit
    
    Enter the number related to you choice (1/2/3/4):`));
    switch (operation) {
        case 1:
            {
                console.log(`Withdrawing the money from your account`);
                amount = parseInt(prompt(`Enter the amount of money you want to withdraw`));
                if (amount > savedMoney) {
                    console.log(`Sorry! you won't be able to withdraw money`);
                    alert(`Sorry ! you won't be able to withdraw money`);
                }
                else {
                    money = savedMoney - amount;
                    alert(`The amount left after withdrawl ${money}`);
                    savedMoney = money;
                }
                break;
            }

        case 2:
            {
                console.log(`Depositing the money into the Bank`);
                amount = parseInt(prompt(`Enter the amount of money you want to deposit`));
                money = savedMoney + amount;
                console.log(`The amount after deposit is ${money}`);
                alert(`The amount after deposit is ${money}`);
                savedMoney = money;

                break;

            }

        case 3:
            {
                console.log('checking Balance');
                alert(`The current amount of money is ${savedMoney}`)
                break;
            }

        case 4:
            {
                console.log(`Exiting.........`);
                alert(`Exiting........`);
                i = 1;
                break;
            }

        default:
            {
                console.log(`Invalid choice`);
                alert(`Invalid choice`);
            }

    }
    i--;

} while (i > 1);



/*
// Asking permission (yes/no)

let savedMoney = 2000;
let amount;
let money;
let choice = "Yes";
do {
    let operation = parseInt(prompt(`ATM MENU
    1. Withdraw
    2. Deposit
    3. Check Balance
    4. Exit

    Enter the number related to you choice (1/2/3/4):`));
    switch (operation) {
        case 1:
            {
                console.log(`Withdrawing the money from bank`);
                amount = parseInt(prompt(`Enter the amount of money you want to withdraw`));
                if (amount > savedMoney) {
                    console.log(`Sorry! you won't be able to withdraw money`);
                    alert(`Sorry ! you won't be able to withdraw money`);
                }
                else {
                    money = savedMoney - amount;
                    alert(`The amount left after withdrawl ${money}`);
                    savedMoney = money;
                }
                break;
            }

        case 2:
            {
                console.log(`Depositing the money into the Bank`);
                amount = parseInt(prompt(`Enter the amount of money you want to deposit`));
                money = savedMoney + amount;
                console.log(`The amount after deposit is ${money}`);
                alert(`The amount after deposit is ${money}`);
                savedMoney = money;

                break;

            }

        case 3:
            {
                console.log('checking Balance');
                alert(`The current amount of money is ${savedMoney}`)
                break;
            }

        case 4:
            {
                console.log(`Exiting.........`);
                alert(`Exiting........`);
                break;
            }

        default:
            {
                console.log(`Invalid choice`);
                alert(`Invalid choice`);
            }

    }
    choice = prompt(`Do you want to continue (Yes/No):`);

} while(choice == "Yes");
 */


// Comparison of var, const and let

// Using var first

// console.log(c) /* Here we are trying to display the number before the intialization, it will show error, reference error)

// var a = 10;
// console.log(`The value of (a) before redeclaration ${a}`);
// var a = 20;
// console.log(`The value of(a) after redeclaration ${a}`);
// a = 30;
// console.log(`The value of (a) after reassignment is ${a}`);

/* When we declare the values using var then we can redeclare them as well and
moreover their scope is global means if we display them earlier using the console
and then declare them, then this will not show any error rather they will show undefined
on the console, this is called hoisting */

// Using const
//const b = 10;
// console.log(`The value of (b) before redeclaration ${b}`);

// b = 20; But this will generate the error (Type error)

// console.log(`The value of (b) after reassignment is ${b}`);
// const b = 20;
// console.log(`The value of (b) after redeclaration ${b}`);

/* This will show an error, as redeclaration of the const is not possible  (Syntax Error)*/

// Using let
// let c = 10;
//console.log(`The value of (c) before redeclaration ${c}`);

// c = 20; // This will not show any error, as we are reassigning the value here
// console.log(`The value of (c) after reassignment is ${c}`);

// let c = 20;
// console.log(`The value of c, after reassignment is ${c} `);

/* But this will generate an error as reassignment using let is possible, but redeclaration
is not possible at all (Syntax Error) */







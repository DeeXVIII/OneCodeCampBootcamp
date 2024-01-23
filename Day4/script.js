//VARIABLES

// 3 types of variable var, let, const

//var - global scope changeable variable; may or may not have a value
//let - block (inside the curly bracket only) scope changeable variable; may or may not have a value
//const - block (inside the curly bracket only) sope and unchangeable needs a value

//starts with letter, underscore, and dollar sign
//casesensitive


var example = 0;
let cosnt = 1;
const me = 2;

//DATA TYPES

//number - both positive and negative integers
let age = 26;

//string - textual data (characters) and needs quatation either '' or ""
let name = "Dee";

//boolean - logical value true or false
let single = true;

//undefined - no value yet during declaration
//typeof - returns the data type of the variable
let city;
console.log(typeof single);

//null - intentionally empty
//returns a data type of object
let car = null;

//Object Types
//object - {}
//Array - []
//Date - Represents a specific moment in time
//RegEx (Regular Expression) - pattern matching within strings
//Function - reusable blocks of code 

//Operators
//Arithmetic Operators: +, -, /, *, %
//Logical Operators: &&, ||, !
//Unary Operators: +, -, ++, --
//Assignment Operators: =, +=, -=, *=, /=, %=

//JS Expressions
//Arithmetic operations: 
let x = 5;
let y = 2;

let sum = x + y;
console.log(sum);

//String Expressions
//String Concatenation: +
console.log("Hello " + "World " + "Was up!");

//Logical Expressions
var a = true;
var b = false;

console.log(a && b);

//Assignment Expressions
// x += y or x = x + y;
let c = 10;
let d = 5;

c += d;
console.log(c);

//Function Call Expressions
function myFunction(num1, num2){
    console.log(num1 + num2);
}

myFunction(30, 10); 
//arguments actual value inside function call
//parameters values inside the function holder

//Conditional Statement

//if statement
let section = "Honesty";

if (section == "Honesty")
{
    console.log("Ayyy Okay!");
}

//if-else
if (section =="Love")
{
    console.log("Okay");
}
else
{
    console.log("Ayy Honesty");
}

//if - else - if statement
let temperature = 25;

if (temperature == 0)
{
    console.log("Frozen");
}
else if( temperature > 0 && temperature <= 20) 
{
    console.log("Cold Day");
}
else if(temperature > 20 && temperature <= 30)
{
    console.log("Warm Day");
}

//Switch Statement

let day = "Thursday";

switch (day)
{
    case "Monday":
        console.log("Oh Ohhh! It's Monday time to werk!");
        break;
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
        console.log("Hang in there.");
        break;
    case "Friday":
        console.log("One more Day!");
        break;
    case "Saturday": 
        console.log("Party Time!");
        break;
}

//LOOPS

//for loop
for (let i = 1; i <= 5; i++)
{
    console.log("Count: " + i);
}

//while loop
let count = 6;

while (count <= 10)
{
    console.log("Count: " + count);
    count++;
}

//do-while loop
let cnt = 11;

do
{
    console.log("Count: " + cnt);
    cnt++;
} while(cnt <= 15)

//ARRAY
let fruits = ["apple","banana","orange","mango"];

//accesing an Array
//console.log(fruits[0]);
console.log(fruits[3]);

// returns the last item of the array
console.log(fruits[fruits.length - 1]);

//Objects
var teacher = {
    name: "Ian",
    city: "Atlanta",
    gender: "Female",
    subject: ["English", "Math"] 
};

//Accesing an Object
console.log(teacher.gender);

//replacing the value
teacher.name = "Amanda";

console.log(teacher.name);

//Accesing an object with array value
console.log(teacher.subject[0]);


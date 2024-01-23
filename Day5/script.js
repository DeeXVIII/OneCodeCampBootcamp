//FUNCTION

function greet()
{
    console.log("Hello, welcome to the world of functions!");
}

//function call
greet();

//function declaration
function squareDeclaration(num){
    return num * num;
}

//function expression: no function name
//callbacks - function used as parameter or define functions conditionally within code blocks.
//anonymous function since no function name
const squareExpression = function(num) {
    return num * num;
}

//function call
console.log("Square (Function Declaration): ",squareDeclaration(5));
console.log("Square (Function Expression): ",squareExpression(5));

//function hoisting - called the function in later part of the script; can't be used in arrow function

//sayHello();

function sayHello(name){
    console.log("Hello, " + name);    
}

sayHello("Harold");

//anonymous function - no name; for DOM manipulation; used in events

var test = function() {
    console.log("Hello, world!");
}

test();

//function with return value
function sum(num1, num2){
    return num1 + num2;
}


console.log(sum(2, 5));

let result = sum(5, 8);

console.log(result);

//callback
function calculate(num1, num2, operation){
    return operation(num1, num2);
}

//callback function
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

let result1 = calculate(5, 3, add);
let result2 = calculate(5, 3, subtract)

console.log("Result (Additiion): ", result1);
console.log("Result (Subtraction): ", result2);
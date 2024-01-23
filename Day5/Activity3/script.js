//1
function greet(yname)
{
    console.log(`Hello, ${yname}`);
}

greet("Dee");

//2
const add = function (a, b)
{
    return a + b;
}

console.log(add(5, 7));

//3
function isEven(number)
{
    return number % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(7));

//4
var globalVar = 5;

function declaration()
{
    let globalVar = 10;
    console.log(globalVar);
}

declaration();
console.log(globalVar);

//5
hoistedFunction();

function hoistedFunction()
{
    console.log("This is an example of a hoisted function.");
}

//6
function mathOperation(a, b, callback)
{
    return callback;
}

const addition = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a *b;
const divide = (a, b) => a / b;

console.log(mathOperation(5, 3, addition));
console.log(mathOperation(5, 3, subtract));
console.log(mathOperation(5, 3, multiply));
console.log(mathOperation(5, 3, divide));

//7
function counter()
{
    let count = 0;
    return function()
    {
        count ++;
        console.log(count);
    }
}

const counter1 = counter();
const counter2 = counter();

counter1();
counter1();
counter2();

//8
function applyFunction(func, array)
{
    const result = [];
    for(let item of array)
    {
        result.push(func(item));
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5];
const square = (x) => x * x;
console.log(applyFunction(square, numbers));

//9
function getUserData(callback)
{
    setTimeout(function(){
        const user = {
            name: "John",
            age: 30
        }; callback(user);
    }, 1000);
}

getUserData(function (user){
    console.log("User Data: ", user);
});
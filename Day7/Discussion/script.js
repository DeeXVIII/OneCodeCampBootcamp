// //ECMA 6 Script

// //Block Scope variables
// function example()
// {
//     var x = 1;
//     console.log(x);
// }

// //template literals
// let name = "Amanda";
// let age = "18";
// //Old Concatination Method
// console.log("My name is " +  
//  name + " and I am " + age + " years old.");
//  //backtick or string concantenation method
//  console.log(`My name is ${name} and I am ${age} years old.`);

// //  let message = "This is 
// //                 a multi line 
// //                  message";

//  //back tick can be used for multiline string
// let message = `This is 
// a multi-line
// message`;
// console.log(message);

// //Arrow Functions - no need for brackets if single line only: can only be used in function declaration
// function square (num) 
// {
//     return num * num;
// }

// console.log(square(5));

// let square = (num) => num * num;

// let multiplication = (num1, num2) => num1 * num2;

// console.log(multiplication(5, 2));

//this
//lexical scope

// const person = {
//     name: "Dion",
//     greetRegular: function()
//                 {
//                    console.log(`Hello ${this.name}, good morning!`);     
//                 },
//     greetArrow: () => 
//                 {
//                     console.log(`Hello ${this.name} !`);
//                 }
// };

// person.greetRegular();
// person.greetArrow();

//Destructuring assignment

// const number = [1, 2, 3, 4, 5];
// //conventional method
// console.log(number[0]);

// //array
// const [a, b, c, d, e] = number;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// const person = {
//     name: "LJ",
//     age: 30,
//     country: "PH"
// }

// const {name, age, country} = person;
// console.log(name);
// console.log(age);
// console.log(country);

//Spread and Rest Operators

//Spread
// function sum(x, y, z)
// {
//     return x + y + z;
// }

// const numbers = [1, 2, 3];
// console.log(sum(...numbers));
//... spread operator instead of writing all values: incapsulates the given parameters without specification

//Rest Operator
// function myFunction(firstArg, ...restofArgs)
// {
//     console.log(firstArg);
//     console.log(restofArgs);
//     //gets the rest of the arguments
// }

// myFunction("one", "two", "three", "four");


// const grades = {
//     math: 94,
//     english: 81,
//     science: 72,
//     pe: 99
// }

// const grades2 = {
//     ...grades,
//     history: 85
// }

// console.log(grades2);


//JS BUILT IN METHODS

//JS STRING METHODS

//Split - stores to another variable the changes from the original value: inside the parameter will be character where it will be separated called the marker: not case sensitive
// const message = "Hello, World!";
// const words = message.split(",");

// console.log(words);
// console.log(words[0]);

//Includes - look for the parameter if it's included in the sentence: returns a boolean value
// const sentence = "The quick brown fox jumps over the lazy dog.";
// const containsWord = sentence.includes("fox");

// console.log(containsWord);

//length - the numbers of characters in the string include the space and other formatiing symbols

// const sampleString = "Welcome to Modern JS Features!";
// const strlength = sampleString.length;

// console.log(strlength);

//Max - gives the biggest number in the group

// let arr = [1, 2, 3, 4, 5, 6];
// const maxNumber = Math.max(10, 5, 20);
// const maxNumberArr = Math.max(arr);

// console.log(maxNumber);
//console.log(maxNumberArr);

//Min
// const minNumber = Math.min(10, 5, 20);

// console.log(minNumber);

//random
// const randomValue = Math.random();
// console.log(randomValue);

//Floor - looks for the whole number
// const roundedNumber = Math.floor(3.7);
// console.log(roundedNumber);

//Ceil - looks for the number then plus 1
// const roundedNumber = Math.ceil(3.7);
// console.log(roundedNumber);

//round - follows the regular rounding of number in Math
// const roundedNumber = Math.round(3.7);
// console.log(roundedNumber);

//nested math methods
// function getRandomInt(min, max)
// {
//     min = Math.ceil(min);
//     max = Math.floor(max);

//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const randomInteger = getRandomInt(1, 10);
// console.log(randomInteger);
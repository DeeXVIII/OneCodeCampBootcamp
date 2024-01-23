//1. Create a program that prints the arithmetic series or the sum of the sequence of values in the array "number". Your "numbers" array should contain the following sequence: 2, 5, 8, 11, 14

let num = [2, 5, 8, 11, 14];
let sum = 0;

let series = num.toString();

for (let cntr = 0; cntr < num.length; cntr++)
{
    sum += num[cntr];
}

console.log("Arithmetic Series: "+ series);
console.log("Sum of the Sequence is: " + sum + ".");

//2. Create a program that prints the mean of the values in the array called "number". Array "numbers" should have the following values: 13, 143, 88, 65, 120.

let num2 = [13, 143, 88, 65, 120];
let totalSum = 0;
let mean;

for (let ind = 0; ind < num2.length; ind++)
{
    totalSum += num2[ind];
}

mean = totalSum / num2.length;
console.log(mean);

//3. Create an array that inclusively contains all even numbers between 0 to 100.


let arr = [];

for (let check = 0; check <= 100; check++)
{
    if (check % 2 == 0)
    {
        arr.push(check);
    }
}

console.log(arr);

//4. Guess the Secret Number Game

let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
let guessedNumber = [];

let count = 0;


console.log("Welcome to the Guessing Game!");
do {
    let usernum = prompt("Please enter a number. ");
    count = usernum;
    attempts = guessedNumber.length;
    guessedNumber.push(usernum);
    if(usernum == secretNumber)
    {
        console.log("Congratulations! You guessed the correct number. " + secretNumber +".");
        console.log("It took you " + attempts + " attempts.");
    }
    else if(usernum > secretNumber)
    {
        console.log("Too high! Try again.");
    }
    else if(usernum < secretNumber)
    {
        console.log("Too low! Try again.");
    }
} while(count != secretNumber);
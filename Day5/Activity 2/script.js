//1
function isEven(num){
    if(num % 2 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

//2
for(let num = 0; num <= 10; num++)
{
    console.log(num + " " + isEven(num));
}

//3
function multiply(num1, num2)
{
    return num1 * num2;
}

//4
let cntr = 0;
while(cntr == 0)
{
   let fnum = parseInt(prompt("Enter the first number: ")); 
   let snum = parseInt(prompt("Enter the second number: "));
        if((fnum >= 0) && (snum >= 0))
        {
            console.log("The product of " + fnum + " and " + snum + " is " + multiply(fnum, snum));  
        }
        else if((fnum < 0) || (snum < 0))
        {
            console.log("You entered a negative number.");
            cntr = 1;
        }
        else
        {
            console.log("Not a number.");
            cntr = 1;
        }
}

//5
function reverseString(string)
{
    return string.split('').reverse().join('');
}

//6
console.log(reverseString("hello"));

//7
function countVowels(word)
{
    //regular expression
    var vowel = /[aeiou]/ig;
    var vowelMatches = word.match(vowel);
    //ternary
    return vowelMatches ? vowelMatches.length : 0;
}

//8
console.log(countVowels("JavaScript"));

//9
function findMax(arr)
{
    var maximum = Math.max(...arr);
    return maximum;
}

//10
let arr = [4, 9, 2, 7, 5];
console.log(findMax(arr));

//11
function calculateFactorial(number)
{
    if (number < 0) {
        return "Factorial is not defined for negative numbers";
      }
    
      // Base case: factorial of 0 or 1 is 1
      if (number === 0 || number === 1) 
      {
        return 1;
      } 
      else 
      {
        // Recursive case: n! = n * (n-1)!
        return number * calculateFactorial(number - 1);
      }
}

//12
console.log(calculateFactorial(5));

//13
function isPalindrome(word)
{
    // Remove non-alphanumeric characters and convert to lowercase
  var cleanWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Compare the original and reversed strings
  return cleanWord === cleanWord.split('').reverse().join('');
}

//14
console.log(isPalindrome("level"));

//15
function sumArray(numbers)
{
    let sum = 0;
    for(let i = 0; i < numbers.length; i++)
    {
        //?
        sum += numbers[i];
    }
    return sum;
}

//16
let arr2 = [1, 2, 3, 4, 5];
console.log(sumArray(arr2));

//17
function capitalizeFirstLetter(string)
{
    if(typeof string === 'string' && string.length > 0)
    {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

//18
console.log(capitalizeFirstLetter("javascript"));

//19
function filterEvenNUmbers(arr)
{
    // Use the filter method to create a new array with only even numbers
    var evenNumbers = arr.filter(function(number) {
        return number % 2 === 0;
    });

    return evenNumbers;
}

//20
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEvenNUmbers(arr3));
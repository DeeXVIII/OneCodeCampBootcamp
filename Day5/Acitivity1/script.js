//1
let greet = function(){
    console.log("Hello there!");
}

//2
greet();

//3
const add = function(num1, num2){
    return num1 + num2;
}

//4
let sum = add(5, 3);

//5
console.log("The sum is ", sum);

//6
const multiply = function(num1, num2){
    return num1 * num2;
}

//7
let product = multiply(4, 2);

//8
console.log("The product is ", product);

//9
const isEven = function(number){
    if(number % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

//10
let even = isEven(6);

//11
console.log(even);

//12
const square = function(number){
    return number * number;
}

//13
let squaredValue = square(3);

//14
console.log("Squared Value is ", squaredValue);

//15
const fullName = function(firstName, lastName){
    return firstName + ' ' + lastName;
}

//16
let name1 = fullName("John", "Doe");

//17
console.log("Your name is ",name1);

//18
const capitalize = function(string){
    if(typeof string === 'string' && string.length > 0)
    {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

//19
let capitalizedString = capitalize("javascript");

//20
console.log(capitalizedString);
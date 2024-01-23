//4.1 Use arrow functions to calculate the square of a given number and log the result to the console.

const square = (number) => number * number;
console.log(`The square of the number is ${square(2)}`); 

//4.2 Use template literals to create a welcome message that includes the name and age of a person.

let person = {
    name: "Jon Snow",
    age: 24
}
console.log(`Welcome to Kings Landing ${person.name}, ${person.age} years old.`);

//4.3 Use destructuring to extract the first and last name from a person object and log them to the console.

let human = {
    fname: "Daenerys",
    lname: "Targaryen",
    age: 24
}

const {fname, lname, age} = human;
console.log(fname);
console.log(lname);

//4.4 Use the spread operator to merge two arrays into a single array

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

let together = [...arr1, ...arr2];

console.log(together);

//4.5 Use default parameters to create a function that calculates the area of a rectangle. If no arguments are provided, assume a default length and width of 1.

function areaOfRectangle(width, length)
{
    let area = 1;

    if((width == undefined) && (length == undefined))
    {
        return area; 
    }
    // else if((width == undefined) || (length == undefined))
    // {
    //     if(width == undefined)
    //     {
    //         return area = 1 * length;
    //     }
    //     else
    //     {
    //         return area = width * 1;
    //     }
    // }
    else
    {
        return area = width * length;
    }
}

console.log(`Area of a Rectangle is ${areaOfRectangle()}`);
// console.log(`Area of a Rectangle is ${areaOfRectangle(1)}`);
console.log(`Area of a Rectangle is ${areaOfRectangle(2, 4)}`);
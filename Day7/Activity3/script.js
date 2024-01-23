//1. User inputs their date of birth
var dateOfBirth = prompt("Please enter your date of birth (MM/DD/YYYY):");

//2. separate into variables
var dateComponents = dateOfBirth.split("/");
let birthMonth = parseInt(dateComponents[0]);
let birthDate = parseInt(dateComponents[1]);
let birthYear = parseInt(dateComponents[2]);

//3 Calculate
const today = new Date();

let userBirthDate = new Date(birthYear, birthMonth - 1, birthDate);

let ageInMiliseconds = today - userBirthDate;

let ageInYears = ageInMiliseconds / (365.25 * 24 * 60 *60 * 1000);

if((birthMonth < 1) || (birthMonth > 12))
{
    console.log(`You entered an INVALID Month. Please enter a month from 1 - 12.`);
}
else if((birthDate < 1) || (birthDate > new Date(birthYear, birthMonth, 0).getDate()))
{
    console.log(`You enetered an INVALID DAY of the given month. Please enter a valid day.`);
}
// else if(birthMonth === 2 && birthDate === 29 && !isLeapYear(birthYear))
// {
//     console.log("Invalid date. February 29 is valid only in leap years.");
// }
else if((birthMonth === today.getMonth() + 1) && (birthDate === today.getDate()))
{
    console.log(`You're ${Math.floor(ageInYears)}  years old.`);
    console.log(`Happy Birthday!`);
}
else
{
    console.log(`You're ${Math.floor(ageInYears)} years old.`);
}

// function isLeapYear(year)
//  {
//     return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
// }
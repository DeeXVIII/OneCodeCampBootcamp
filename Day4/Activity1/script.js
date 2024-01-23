// 1) Create a program that prints all the even numbers from 1 to 1000. Use the standard for loop for this exercise and don't create any arrays.

// for (let num = 1; num <= 1000; num++)
// {
//     if (num % 2 == 0)
//     {
//         console.log(num + " is even.");
//     }
// }

//2) Create a program that prints the arithmetic progression starting at 8 and going up to 1,000

// FOR LOOP
// for (let num = 8; num <= 1000; num += 8)
// {
//     console.log(num);
// }

//WHILE LOOP
/*let num = 8;

while (num <= 1000)
{
    console.log(num);
    num += 8;  
}*/

//DO WHILE
/*let num = 8

do 
{
    console.log(num);
    num += 8;
} while(num <= 1000)*/

//3) Create a program that counts from 1 to 1000. As it loops through each number, have your program generate the number and a message saying whether it's multiple of 3 or not.

for (let num = 1; num <= 1000; num++)
{
    if (num % 3 == 0)
    {
        console.log(num + " is a multiple of 3.");
    }
    else 
    {
        console.log(num + " is not a multiple of 3.");
    }
}

//WHILE LOOP
/*let num = 1
while (num <= 1000) 
{
    if (num % 3 == 0)
    {
        console.log(num + " is a multiple of 3.");
    }
    else 
    {
        console.log(num + " is not a multiple of 3.");
    }
    num++;
}*/

//DO WHILE LOOP
/*let num = 1;

do 
{
    if (num % 3 == 0)
    {
        console.log(num + " is a multiple of 3.");
    }
    else 
    {
        console.log(num + " is not a multiple of 3.");
    }
    num++;
} while (num <= 1000)*/

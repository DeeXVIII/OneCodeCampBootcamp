let attempt = 1;

//Traditional Callback
function EmitRandomNumber(attempt)
{
    setTimeout(() =>
    {
      const randomNumber = Math.floor(Math.random() * 101);
        console.log(`Attempt ${attempt}: 
2 seconds have lapsed.
Random Number Generated: ${randomNumber}
- - - - - - -`);

        if((randomNumber < 80) && attempt < 10)
        {
            EmitRandomNumber(attempt + 1);
        }
        else if(attempt == 10)
        {
            console.log(`Zero attempts left. 
...stopping the program...`);
        }        
        else
        {
           console.log(`Random number is greater than or equal to 80, 
...stopping the program...`);
        }
    }, 2000);
}

//Function for generating a random number
/*function generateRandomNumber()
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random()* 101);
            resolve(randomNumber);
        }, 2000);
        
    });
}*/

//Using Promise
/*function EmitRandomNumber(attempt)
{
    return generateRandomNumber()
        .then((randomNumber) => 
        {
            console.log(`Attempt ${attempt}: 
2 seconds have lapsed.
Random Number Generated: ${randomNumber}
- - - - - - -`);

        if((randomNumber < 80) && (attempt < 10))
        {
            return EmitRandomNumber(attempt + 1);
        }
        else if(attempt == 10)
        {
            console.log(`Zero attempts left.
...stopping the program...`);
        } 
        else{
            console.log('Random number is greater than or equal to 80, ...stopping the program...');
        }
        });
}*/

//using async

/*async function EmitRandomNumber(attempt)
{
    try
    {
        const randomNumber = await generateRandomNumber();
        console.log(`Attempt ${attempt}: 
2 seconds have lapsed.
Random Number Generated: ${randomNumber}
- - - - - - -`);

        if((randomNumber < 80) && (attempt < 10))
        {
            //await new Promise((resolve) => setTimeout(resolve, 2000));
            await EmitRandomNumber(attempt + 1);
        }
        else if(attempt == 10)
        {
            console.log(`Zero attempts left.
...stopping the program...`);
        }
        else
        {
            console.log('Random number is greater than or equal to 80, stopping.
...stopping the program...');
        }
    }
    catch (error)
    {
        console.error(`An error occured: `, error);
    }
}*/

//function call
EmitRandomNumber(attempt);
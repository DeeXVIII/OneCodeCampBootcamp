// Generate a random number between 1 and 10.
const numberGenerator = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const randomNumber = numberGenerator(1, 10);

for(let life = 3; life > 0; life--)
{
    // Guess what the random generated number is
    let guess = parseInt(prompt("Guess a number from 1 - 10. Enter your guess: "));

    // Check if the user's input is a valid number
    if( isNaN(guess))
    {
        alert("Your entry is not a number.");
    }
    else
    {
        //Check if the guess is correct.
        if(guess == randomNumber)
        {
            alert(`You guessed the number. The mystery number is ${randomNumber}`);
        }
        else
        {
            alert("Wrong guess!");
        }
    }
}

console.log(randomNumber);

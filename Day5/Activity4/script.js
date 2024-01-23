//1
function print_orders(arr)
{
    // Opening <ol> tag
    console.log("<ol>");

    // Iterating over the array and printing each value in an <li> element
    //   arr.forEach((value) => { console.log(`  <li>${value}</li>`);
    //   });
    for(let a = 0; a < arr.length; a++)
    {
        console.log(`  <li>${arr[a]}</li>`);
    }

    // Closing </ol> tag
    console.log("</ol>");
}

const array = ["Banana", "Apple", "Orange", "Kiwi"];

print_orders(array);

//2
let cards = {
    "King": 13,
    "Queen": 12,
    "Jack": 11,
    "Ace": 1
};

function passCard(cards)
{
    let arr = [];
    for(const key in cards)
    {
        arr.push(key);
    }
    console.log("List of keys in the array: ");
    for(let cntr = 0; cntr < arr.length; cntr++)
    {
        console.log(arr[cntr]);
    }
    
    for(const key in cards)
    {
        console.log(`The value of ${key} in Pyramid Solitaire is ${cards[key]}.`);
    }
}

passCard(cards);

//3
const randomScore = Math.floor(Math.random() * 100) + 1;

function judgement(num)
{
    if(num < 50)
    {
        return "Never sing again, ever!";
    }
    else if((num >= 50) && (num < 80))
    {
        return "Practice more!";
    }
    else if((num >= 80) && (num <95))
    {
        return "You're getting better!";
    }
    else
    {
        return "What an excellent singer!";
    }
}

console.log("Your score is " + randomScore + ". "+ judgement(randomScore));

//4
function practice()
{
    let success = 0;
    let failed = 0;

    console.log("Practice starts...");

    for(let trial = 1; trial <= 10; trial++)
    {
        const number = Math.random() < 0.5;

        if(number)
        {
            success++;
            console.log(`Attempt #${trial}: Shooting the ball... Success! ... Got ${success}x success and ${failed}x epic fail(s) so far`);
        }
        else
        {
            failed++;
            console.log(`Attempt #${trial}: Shooting the ball... Epic Fail! ... Got ${success}x success and ${failed}x epic fail(s) so far`);
        }
    }
    console.log("Practice ended.");
}

practice();

//5
function convert_to_blanks(arr){
    let print = "";
    for(let index = 0; index < arr.length; index++)
    {
        for(let count = 1; count <= arr[index]; count++)
        {
           print += "-"; 
        }
        console.log(print);
        print = "";
    }
}

let sample = [6, 1, 3, 5, 7];
convert_to_blanks(sample);
let minutes, seconds, timerInterval;

/*function startTimer()
{
    const inputElement = document.getElementById("timeInput");
    minutes = parseInt(inputElement.value, 10);

    if((isNaN(minutes)) || (minutes < 1) || (minutes > 60))
    {
        alert(`Error! Please enter a valid input in minutes between 1 and 60!`);
        return;
    }

    seconds = 0;
    updateTimerDisplay();

    timerInterval = setInterval(() =>
    {
        if((minutes === 0) && (seconds === 0))
        {
            clearInterval(timerInterval);
            alert(`Time is up!`);
        }
        else
        {
            decrementTime();
            updateTimerDisplay();
        }
    }, 1000);
}*/

//Asynchronous
async function startTimer() 
{
    const inputElement = document.getElementById("timeInput");
    minutes = parseInt(inputElement.value, 10);

    if (isNaN(minutes) || minutes < 1 || minutes > 60) {
        alert(`Error! Please enter a valid input in minutes between 1 and 60!`);
        return;
    }

    seconds = 0;
    updateTimerDisplay();

    timerInterval = setInterval(async () => {
        if ((minutes === 0) && (seconds === 0)) {
            clearInterval(timerInterval);
            alert(`Time is up!`);
        } else {
            decrementTime();
            updateTimerDisplay();
        }
    }, 1000);
}

function resetTimer()
{
    clearInterval(timerInterval);
    minutes = 0;
    seconds = 0;
    updateTimerDisplay();
}

function stopTimer()
{
    clearInterval(timerInterval);
}

function decrementTime()
{
    if((seconds === 0) && (minutes > 0))
    {
        minutes--;
        seconds = 59;
    }
    else
    {
        seconds--;
    }
}

function updateTimerDisplay() 
{
    const timerElement = document.getElementById("timer");
    timerElement.textContent = `${padZero(minutes)}:${padZero(seconds)}`
}

function padZero(value)
{
    return value < 10 ? `0${value}`: value;
}


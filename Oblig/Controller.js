newGame();
function newGame()
{
    computerNumber=Math.floor(Math.random() *100+1);
    console.log(computerNumber)
    guessAnswer=""
    previousAnswer="";
    guesses=0;
    GuessesStr="";
    lowHigh="";
    numberGuess="";
    low=1;
    high=100;
    updateNow();
}

function compareGuess(that)
{
    var guessNumber=Number(that.value)
    if(guesses<10 && guessNumber == computerNumber)
    {
        guesses++;
        previousAnswer="";
        GuessesStr="";
        guessAnswer="You Won with "+ guesses +" guesses";
    }
    else if(guesses<10 && guessNumber<computerNumber)
    {
        guesses++;
        if(guessNumber>low)low=guessNumber;
        guessAnswer="Number is to low"
        previousAnswer+="-"+guessNumber;
        numberGuess="";
        GuessesStr="You have used: "+guesses+" guesses.";
        lowHigh="Number is between "+low+" and "+high;
    }
    else if(guesses<10 && guessNumber>computerNumber)
    {
        guesses++;
        if(guessNumber<high)high=guessNumber;
        guessAnswer="Number is to high"
        previousAnswer+="-"+guessNumber;
        numberGuess="";
        GuessesStr="You have used: "+guesses+" guesses.";
        lowHigh="Number is between "+low+" and "+high;
    }
    else
    {
        previousAnswer="";
        GuessesStr="";
        guessAnswer="You Won with "+ guesses +" guesses";
    }
    updateNow();
}
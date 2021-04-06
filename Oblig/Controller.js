function newGame()
{
    computerNumber=Math.floor(Math.random() *100+1);
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
    guessNumber=Number(that.value)
    if(guessNumber == computerNumber)
    {
        guesses++;
        previousAnswer="";
        GuessesStr="";
        guessAnswer="You Won with "+ guesses +" guesses";
    }
    else if(guessNumber<computerNumber)
    {
        guesses++;
        if(guessNumber>low)low=guessNumber;
        guessAnswer="Number is to low"
        previousAnswer+="-"+guessNumber;
        numberGuess="";
        GuessesStr="You have used: "+guesses+" guesses.";
        lowHigh="Number is between "+low+" and "+high;
    }
    else
    {
        guesses++;
        if(guessNumber<high)high=guessNumber;
        guessAnswer="Number is to high"
        previousAnswer+="-"+guessNumber;
        numberGuess="";
        GuessesStr="You have used: "+guesses+" guesses.";
        lowHigh="Number is between "+low+" and "+high;
    }
    updateNow();
}
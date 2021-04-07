

function compareGuess(guessNumber)
{
    guesses++;
    if(guesses<10 && guessNumber == computerNumber)
    {
        previousAnswer="";
        GuessesStr="";
        guessAnswer="You Won";// with "+ guesses +" guesses";
    }
    else if(guesses<10 && guessNumber<computerNumber)
    {
        if(guessNumber>low)low=guessNumber;
        guessAnswer="Number is to low";
        previousAnswer+="-"+guessNumber;
        numberGuess="";
        GuessesStr="You have used: "+guesses+" guesses.";
        lowHigh="Number is between "+low+" and "+high;
    }
    else if(guesses<10 && guessNumber>computerNumber)
    {
        if(guessNumber<high)high=guessNumber;
        guessAnswer="Number is to high";
        previousAnswer+="-"+guessNumber;
        numberGuess="";
        GuessesStr="You have used: "+guesses+" guesses.";
        lowHigh="Number is between "+low+" and "+high;
    }
    else
    {
        previousAnswer="";
        GuessesStr="";
        guessAnswer="You loose";// with "+ guesses +" guesses";
    }
    updateNow();
}
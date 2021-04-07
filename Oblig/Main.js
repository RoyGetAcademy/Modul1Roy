//Model
var computerNumber;
var guessNumber;
var guesses=0;
var low=0;
var high=0;
var guessAnswer="";
var previousAnswer="";
var numberGuess="";
var GuessesStr="";
var lowHigh="";
//View
newGame();
updateNow();
function updateNow()
{
    document.getElementById("app").innerHTML=`
    <div id="GuessBack">
        <button id="newGame" onClick="newGame()">New Game</button>
        <h3>Guess a number between 1 and 100</h3>
        <div>${lowHigh}</div>
        <input id="Numerics" type="text" min="1" max="100" onchange="compareGuess(this.value)" placeholder="Number Here">${numberGuess}</input>
        <p>${guessAnswer}</p>
        <p>Previous answers: </p>
        <p>${previousAnswer}</p>
        <p>${GuessesStr}</p>
    </div>
`;
}
//Controller is in its own script.

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
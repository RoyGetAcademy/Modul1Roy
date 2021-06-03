function StartGame(){//Starts the game.. 
    model.page=1;//Game page
    view();
}

function QuitGame(){//Quits the game.. duh
    model.page=0;//Intro page
    view();
}

function Stats(){
    view();
}

function Restart(){//Gonna be used to reset the game.. no way!!
    view();
}

function GuessChange(val){//The main controller for the game
    var guessChange=parseInt(val);
    model.game.currentGuess=val;
    if(val==model.game.NumberToGuess){

        model.infoText = `${model.game.currentPlayerName} guessed right!<br>The number was ${guessChange}`;
        model.numbers[model.game.currentBox]=guessChange;
        newNumber();
        model.game.currentPlayerName = (model.game.currentPlayerName == model.player1.name)  ? model.player2.name : model.player1.name;
    }
    else{
        if(model.game.NumberToGuess > val && model.game.min < val)model.game.min= guessChange;
        else if(model.game.NumberToGuess < val && model.game.max > val)model.game.max= guessChange;
        model.game.currentPlayerName = (model.game.currentPlayerName == model.player1.name)  ? model.player2.name : model.player1.name;

        if(model.game.currentPlayerName=="Computer")
        {
            compTurn();
        }
        model.infoText= `Wrong guess. ${model.game.currentPlayerName}'s turn`;
    }
    view();
}

//Here comes the player options. Radio buttons on intro site decides this. View is not updated from these.
function Player1Name(value)//Sets the name of player 1 and adds to the list of potential winners if not already there.
{
    model.player1.name=value;
    var index = model.winners.find(winners => winners.name == value)
    if(!index){model.winners.push({name:`${model.player1.name}`,wins:0})}
}

function Player2Name(value)//Sets the name of player 2 and adds to the list of potential winners if not already there.
{
    model.player2.name=value;
    var index = model.winners.find(winners => winners.name == value)
    if(!index){model.winners.push({name:`${model.player2.name}`,wins:0})}
}

function Computer(that)//Sets computer to tru if that is checked of on intro page
{
    if(that.checked===true)
    {
        model.isComputer=true;
        model.player2.name="Computer";
    }
}

function compTurn(){
    model.computer.guess = Math.floor(Math.random() * (model.game.max - model.game.min +1) + model.game.min);
    console.log("Computer guessed" + model.computer.guess);
    if(model.computer.guess===model.game.NumberToGuess)
    {
        var useIt=Math.floor(Math.random() * 100 ) + 1;
        if(model.difficulty=="Easy"){
            if(useIt <= 99){
                GuessChange(model.computer.guess);
            }
        }
        else if(model.difficulty=="Medium"){
            if(useIt <= 66){
                GuessChange(model.computer.guess);
            }
        }
        else if(model.difficulty=="Hard"){
            if(useIt <= 33){
                GuessChange(model.computer.guess);
            }
        }
        else{
            compTurn();
        }
    }
    else{
        GuessChange(model.computer.guess);
    }
}

function newNumber()
{
    let myIndexes=[];
    for (let i = 0; i < model.numbers.length; i++){
        if(isNaN(model.numbers[i])){
            myIndexes.push(i);
        }
    }
    let myRan = Math.floor(Math.random() * myIndexes.length);
    model.game.currentBox=myIndexes[myRan];
    model.game.NumberToGuess=Math.floor(Math.random() * 100)+1;
    model.game.min=1;
    model.game.max=100;
}


//Helpers
function easyMode(that){
    if(that.checked===true)model.difficulty="Easy";
}

function mediumMode(that){
    if(that.checked===true)model.difficulty="Medium";
}

function hardMode(that){
    if(that.checked===true)model.difficulty="Hard";
}

function notComp(){//just sets the game to be 2 players not computer
    model.isComputer=false;
}

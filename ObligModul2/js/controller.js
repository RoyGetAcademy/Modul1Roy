function StartGame(){//Starts the game.. 
    if(model.player1.name==="")
    {
        messageP1="You have to enter your name player 1";
    }
    else if(model.player2.name==="")
    {
        messageP2="You have to enter your name player 2";
    }
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
    model.numbers=[NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    model.rows=["-", "-", "-"];
    model.player1.score=0;
    model.player2.score=0;
    model.infoText="New game started.";
    newNumber();
    view();
}

function GuessChange(val){//The main controller for the game
    var guessChange=parseInt(val);
    model.game.currentGuess=val;
    if(val==model.game.NumberToGuess){

        model.infoText = `${model.game.currentPlayerName} guessed right!<br>The number was ${guessChange}`;
        model.numbers[model.game.currentBox]=guessChange;
        rowCheck();
        newNumber();
    }
    else{
        if(model.game.NumberToGuess > val && model.game.min < val)model.game.min= guessChange;
        else if(model.game.NumberToGuess < val && model.game.max > val)model.game.max= guessChange;
        model.game.currentPlayerName = (model.game.currentPlayerName == model.player1.name) ? model.player2.name : model.player1.name;
        model.infoText= `Wrong guess. ${model.game.currentPlayerName}'s turn`;
    }
    if(model.game.currentPlayerName=="Computer"){
        compTurn();
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
        if(model.difficulty=="Easy" && useIt <=99){
            GuessChange(model.computer.guess);
        }
        else if(model.difficulty=="Medium" && useIt <= 66){
            GuessChange(model.computer.guess);
        }
        else if(model.difficulty=="Hard" && useIt <= 33){
            GuessChange(model.computer.guess);
        }
        else{
            compTurn();
        }
    }
    else{
        GuessChange(model.computer.guess);
    }
}

function rowCheck(){
    if(Number.isFinite(model.numbers[0]) && Number.isFinite(model.numbers[1]) && Number.isFinite(model.numbers[2])){
        if(model.rows[0]=== "-"){
            model.rows[0]= `${model.game.currentPlayerName} 's row`;
            rowPoints();
        }
    }
    if(Number.isFinite(model.numbers[3]) && Number.isFinite(model.numbers[4]) && Number.isFinite(model.numbers[5])){
        if(model.rows[1]=== "-"){
            model.rows[1]= `${model.game.currentPlayerName} 's row`;
            rowPoints();
        }
    }
    if(Number.isFinite(model.numbers[6]) && Number.isFinite(model.numbers[7]) && Number.isFinite(model.numbers[8])){
        if(model.rows[2]=== "-"){
            model.rows[2]= `${model.game.currentPlayerName} 's row`;
            rowPoints();
        }
    }
}

function rowPoints()
{
    if(model.game.currentPlayerName==model.player1.name){
        model.player1.score += 1;
        view();
        if(model.player1.score==2){
            var index = model.winners.find(winners => winners.name == model.game.currentPlayerName)
            index.wins +=1;
            setTimeout(wonGame, 500);
        }
    }
    else if(model.game.currentPlayerName==model.player2.name){
        model.player2.score += 1;
        view();
        if(model.player2.score==2){
            var index = model.winners.find(winners => winners.name == model.game.currentPlayerName)
            index.wins +=1;
            setTimeout(wonGame,500);
        }
    }
}

function wonGame(){
    alert(`${model.game.currentPlayerName} has won the game! New round starting shortly`)
    setTimeout(Restart, 5000);
}

function newNumber(){
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

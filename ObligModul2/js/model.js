//Player stuff
let difficulty="Easy";
let player1="Player 1";//changes to the players name on input in start window
let player1Score=0;//when player2 wins a row this number goes up. When it becomes 2 they win the round.
let player2="Player 2";//changes to the players name on input in start window
let player2Score=0;//when player2 wins a row this number goes up. When it becomes 2 they win the round.

//Computer stuff
let comp=false;//if this is true then player2 is computer. Chosen on start screen.
var compGuess=0;
var compChance=33;//The % chance of the computer using a winning number. (Easy is 33, medium is 66 and hard is 99)

//Game stuff
var currentPlayer=1;//Used to decide who plays next
var min=1;//minimum number, changes durring play
var max=100;//maximum number, changes durring play
var currentGuess=0;//current guess

var numbers = [];//The 9 numbers for the boxes generated on start

let winners = [
    {
        id=0,
        name="Computer",
        wins=0//total games won not rows.
    }
];//This list gets added to when a new name is found in player1 or player2 and is used for stats
let infoText=" ";//used for putting info of correct or wrong answers as well as WINNER IS!!(This is shown between the input field and the ticktacktoe)
let turnText=" ";//used for who's turn it is shown to the right of input field
var box1 = box2 = box3 = box4 = box5 = box6 = box7 = box8 = box9 = "";//Boxes in the ticktacktoe
var row1 = row2 = row3 = "";//Rows of ticktacktoe (If someone wins row1 it becomes their name + "'s Row")


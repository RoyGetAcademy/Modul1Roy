const model ={
    infoText:" ",//used for putting info of correct or wrong answers as well as WINNER IS!!(This is shown between the input field and the ticktacktoe)
    turnText:" ",//used for who's turn it is shown to the right of input field

    boxes: ["","","","","","","","",""],//Text for the 9 boxes
    numbers:[0,0,0,0,0,0,0,0,0],//Randomly generated array of numbers for the boxes(The ones you guess)
    rows: ["","",""],//This is for the text next to each row when someone wins a row.
    difficulty: ["Easy", "Medium", "Hard"],//This is for computer difficulty. 

    isComputer: false,
    computer:
    {
        guess:0,
        chance: [33, 66, 99]
    },
    players: 
    {
        player1:"Player 1",
        player1Score:0,
        player2:"Player 2",
        player2Score:0
    },
    game:
    {
        currentPlayer:1,
        min:1,
        max:100,
        currentGuess:0
    },
    winners: 
    [
        {
            id:0,
            name:"Computer",
            wins:0
        }
    ],//This list gets added to when a new name is found in player1 or player2 and is used for stats
};

const model ={
    player: 
    {
        difficulty:"Easy",
        player1:"Player 1",
        player1Score:0,
        player2:"Player 2",
        player2Score:0
    },
    computer:
    {
        comp:false,
        compGuess:0,
        compChance:33
    },
    game:
    {
        currentPlayer:1,
        min:1,
        max:100,
        currentGuess:0
    },
    numbers:
    [
        0,0,0,0,0,0,0,0,0
    ],
    winners: 
    [
        {
            id:0,
            name:"Computer",
            wins:0
        }
    ],//This list gets added to when a new name is found in player1 or player2 and is used for stats
    text:
    {
        infoText:" ",//used for putting info of correct or wrong answers as well as WINNER IS!!(This is shown between the input field and the ticktacktoe)
        turnText:" "//used for who's turn it is shown to the right of input field
    },
    boxes:
    {
        box1:"",
        box2:"",
        box3:"",
        box4:"",
        box5:"",
        box6:"",
        box7:"",
        box8:"",
        box9:""
    },//Boxes in the ticktacktoe
    rows:
    {
        row1:"",
        row2:"",
        row3:""
    }
};


const model = {
    page: 0,
    infoText: "Computer won a row!", //used for putting info of correct or wrong answers as well as WINNER IS!!(This is shown between the input field and the ticktacktoe)
    turnText: "Per's turn", //used for who's turn it is shown to the right of input field

    numbers: [35, 15, 50, NaN, 45, 15, 12, 25, NaN],
    rows: ["Computer's Row", "-", "-"], //This is for the text next to each row when someone wins a row.
    difficulty: "Easy", //This is for computer difficulty. 

    isComputer: false,
    computer:
    {
        guess: 0,
    },
    player1:
    {
        name: "Per",
        score: 0,
    },
    player2:
    {
        name: "Computer",
        score: 1,
    },
    game:
    {
        currentPlayerName: "Per",
        currentBox: 7,
        currentGuess: 22,
        NumberToGuess: 25,
        min: 22,
        max: 100,
        guessCorrect: false
    },
    winners:
        [
            {
                name: "Computer",
                wins: 0
            },
            {
                name: "Per",
                wins: 0
            },
            {
                name: "Maia",
                wins: 0
            }
        ], //This list gets added to when a new name is found in player1 or player2 and is used for stats
};

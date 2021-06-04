page = document.getElementById("app");
view();
function view() {
    if (model.page === 0) {
        page.innerHTML = `
            <div id="view">
                <div id="Header">
                    <h1 id="HeadTitle">Oblig Modul 2 Roy</h1>
                    <h4 id="HeadText">Guess the steps</h4>
                </div>
                <div id="difficulty">
                    <h3><u>Difficulty</u></h3>
                    <ul>
                        <input type="radio" class="myRadios" id="easy" name="diff" checked="true" onChange="easyMode(this)">
                        <label for="easy">Easy</label>
                        <input type="radio" class="myRadios" id="medium" name="diff" onChange="mediumMode(this)">
                        <label for="medium">Medium</label>
                        <input type="radio" class="myRadios" id="hard" name="diff" onChange="hardMode(this)">
                        <label for="hard">Hard</label><br>
                    </ul>
                </div>
                <div id="players">
                    <h3><u>Players</u></h3>
                    <ul>
                        <input type="radio"disabled="true">
                        <input type="text" id="player1" class="myRadios" placeholder="Player 1 name" onchange="Player1Name(value)"><br>
                        <input type="radio" name ="Player2Check" required="true" onChange="notComp()">
                        <input type="text" id="player2" class="myRadios" placeholder="Player 2 name" onchange="Player2Name(value)">
                        <p>${messageP1}<br>
                        <input type="radio" name ="Player2Check" id="computer" class="myRadios" required="true" onchange="Computer(this)">
                        <input type="text" id="player2comp" class="myRadios" Value="Computer" disabled="true">
                        <p>${messageP2}<br>
                    </ul>
                </div>
                <input type="submit" id="startButton" value="Start new Game" onclick="StartGame()">
            </div>
        `
    }
    else if (model.page === 1) {
        page.innerHTML =
            `
            <div id="view2">
                <div id="Header">
                    <h1 id="HeadTitle">Oblig Modul 2 Roy</h1>
                    <h4 id="HeadText">Guess the steps</h4>
                </div>
                <div id="guessTheNumber">
                    <p id="guessHeadText"><u>The number is between ${model.game.min} and ${model.game.max}</u></p>
                    <input type="text" id="guessed" placeholder="Insert a number" onchange="GuessChange(value)">
                    <h3><u>${model.infoText}</u></h3>
                    <div class="boxFrame">
                        <div><p>${model.player1.name}<br>Score:${model.player1.score}</p></div>
                        <div id="box1" class="boxes">${isNaN(model.numbers[0]) ? " " : model.numbers[0]}</div>
                        <div id="box2" class="boxes">${isNaN(model.numbers[1]) ? " " : model.numbers[1]}</div>
                        <div id="box3" class="boxes">${isNaN(model.numbers[2]) ? " " : model.numbers[2]}</div>
                        <div id="row1"><p>${model.rows[0]}</p></div>
                        <div><p>${model.player2.name}<br>Score:${model.player2.score}</p></div>
                        <div id="box4" class="boxes">${isNaN(model.numbers[3]) ? " " : model.numbers[3]}</div>
                        <div id="box5" class="boxes">${isNaN(model.numbers[4]) ? " " : model.numbers[4]}</div>
                        <div id="box6" class="boxes">${isNaN(model.numbers[5]) ? " " : model.numbers[5]}</div>
                        <div id="row2"><p>${model.rows[1]}</p></div>
                        <div><p></p></div>
                        <div id="box7" class="boxes">${isNaN(model.numbers[6]) ? " " : model.numbers[6]}</div>
                        <div id="box8" class="boxes">${isNaN(model.numbers[7]) ? " " : model.numbers[7]}</div>
                        <div id="box9" class="boxes">${isNaN(model.numbers[8]) ? " " : model.numbers[8]}</div>
                        <div id="row3"><p>${model.rows[2]}</p></div>
                    </div>
                    <div id="buttons">
                        <input type="submit" id="quitButton" value="Quit" onclick="QuitGame()">
                        <input type="submit" id="statsButton" value="Stats" onclick="Stats()">
                        <input type="submit" id="restartButton" value="Restart" onclick="Restart()">
                    </div>
                </div>
            </div>
        `
    }
}
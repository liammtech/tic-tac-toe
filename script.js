/*
    1. Render noughts and crosses on page
    2. Render message on page
    3. Switch player turn
    3. Check for winning condition (total of 8 possible winning conditions: 3 row, 3 columns, 2 diagonals)
    4. Render winning message: player 1 win, player 2 win, or tie
    5. Render winning line (if game is won)
    6. Reset game
*/

(function() {
    var app = {
        gameConditions: ["x-turn","o-turn","tie","x-win","o-win"],
        currentCondition: null,
        gridValues: ["","","","","","","","",""],
        winningCombo: null,
        init: function() {
            this.currentCondition = this.gameConditions[0];
            this.cacheDom();
            this.eventListeners();
            this.render();
        },
        cacheDom: function() {
            this.resetButton = document.querySelector("#reset-button");
            this.gridCells = document.querySelectorAll(".grid-cell");
            this.messageBox = document.querySelector("#message-box");
        },
        eventListeners: function() {
            this.resetButton.addEventListener("click", this.resetGame.bind(this));
            this.gridCells.forEach((gridCell) => {
                gridCell.addEventListener("click", (e) =>{
                    this.addNoughtOrCross(gridCell.id);
                    this.checkCondition();
                    this.render();
                })
            });
        },
        message: function() {
            switch(this.currentCondition) {
                case "x-turn":
                    return "X's turn";
                case "o-turn":
                    return "O's turn";
                case "tie":
                    return "It's a tie!";
                case "x-win":
                    return "X wins!";
                case "o-win":
                    return "O wins!";
            }
        },
        render: function() {
            for (let i in this.gridCells) {
                this.gridCells[i].textContent = this.gridValues[i];
            }
            this.messageBox.textContent = this.message();
        },        
        addNoughtOrCross: function(gridCell) {
            if (this.gridValues[gridCell] != "") {
                return;
            }
            if (this.currentCondition === "tie" | 
            this.currentCondition === "x-win" | 
            this.currentCondition === "o-win" ) {
            } else if (this.currentCondition === "x-turn") {
                this.gridValues[gridCell] = "X";
            } else if (this.currentCondition === "o-turn") {
                this.gridValues[gridCell] = "O";
            }
            this.switchPlayerTurn();
        },
        checkCondition: function() {
            winCombos = [
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]
            ]
            for (i in winCombos) {
                if (this.gridValues[winCombos[i][0]] != "" && this.gridValues[winCombos[i][1]] != "" && this.gridValues[winCombos[i][2]] != "") {
                    if (this.gridValues[winCombos[i][0]] === "X" && this.gridValues[winCombos[i][1]] === "X" && this.gridValues[winCombos[i][2]] === "X") {
                        this.winningCombo = i;
                        this.currentCondition = this.gameConditions[3];
                        this.render();
                        this.renderWinLine();
                    } else if (this.gridValues[winCombos[i][0]] === "O" && this.gridValues[winCombos[i][1]] === "O" && this.gridValues[winCombos[i][2]] === "O") {
                        this.winningCombo = i;
                        this.currentCondition = this.gameConditions[4];
                        this.render();
                        this.renderWinLine();
                    }
                }
            }
        },
        switchPlayerTurn: function() {
            if (this.currentCondition === "x-turn") {
                this.currentCondition = "o-turn";
            } else if (this.currentCondition === "o-turn") {
                this.currentCondition = "x-turn" 
            };
        },
        renderWinLine: function() {
            gameboard = document.querySelector("#gameboard-container");
            switch(this.winningCombo) {
                case "0":
                    gameboard.innerHTML += '<svg class="win-line" xmlns="http://www.w3.org/2000/svg" width="576" height="576"><rect x="40" y="88" width="496" height="15" style="fill:red" /></svg>'
                    break;
                case "1":
                    gameboard.innerHTML += '<svg class="win-line" xmlns="http://www.w3.org/2000/svg" width="576" height="576"><rect x="40" y="280" width="496" height="15" style="fill:red" /></svg>'
                    break;
                case "2":
                    gameboard.innerHTML += '<svg class="win-line" xmlns="http://www.w3.org/2000/svg" width="576" height="576"><rect x="40" y="460" width="496" height="15" style="fill:red" /></svg>'
                    break;
                case "3":
                    gameboard.innerHTML += '<svg class="win-line" xmlns="http://www.w3.org/2000/svg" width="576" height="576"><rect x="94" y="40" width="15" height="496" style="fill:red" /></svg>'
                    break;
                case "4":
                    gameboard.innerHTML += '<svg class="win-line" xmlns="http://www.w3.org/2000/svg" width="576" height="576"><rect x="280" y="40" width="15" height="496" style="fill:red" /></svg>'
                    break;
                case "5":
                    gameboard.innerHTML += '<svg class="win-line" xmlns="http://www.w3.org/2000/svg" width="576" height="576"><rect x="467" y="40" width="15" height="496" style="fill:red" /></svg>'
                    break;
                case "6":
                    gameboard.innerHTML += '<svg class="win-line" xmlns="http://www.w3.org/2000/svg" width="576" height="576"><path d="M40 52 L524 536 L536 524 L52 40 Z" style="fill:red"/></svg>'
                    break;
                case "7":
                    gameboard.innerHTML += '<svg class="win-line" xmlns="http://www.w3.org/2000/svg" width="576" height="576"><path d="M40 524 L524 40 L536 52 L52 536 Z" style="fill:red"/></svg>'
                    break;    
            }
        },
        resetGame: function() {
            this.gridValues = ["","","","","","","","",""];
            this.currentCondition = this.gameConditions[0];
            this.render();
        }
    }
    app.init();
})();
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
                return;
            } else if (this.currentCondition === "x-turn") {
                this.gridValues[gridCell] = "X";
            } else if (this.currentCondition === "o-turn") {
                this.gridValues[gridCell] = "O";
            }
            this.switchPlayerTurn();
        },
        checkCondition: function() {
            winningGridAreas = [
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]
            ]
            for (area in winningGridAreas) {
                if (winningGridAreas.at(area).at(0) != "" && area[1] != "" && area[2] != "") {
                    if (this.gridCells[area[0]] != "X" && this.gridCells[area[1]] != "X" && this.gridCells[area[2]] != "X") {
                        return "x-win";
                    } else if (area[0] != "O" && area[1] != "O" && area[2] != "O") {
                        return "o-win";
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
        resetGame: function() {
            this.gridValues = ["","","","","","","","",""];
            this.currentCondition = this.gameConditions[0];
            this.render();
        }
    }
    app.init();
})();
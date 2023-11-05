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
        currentCondition: this.gameConditions[0],
        gridValues: ["","","","","","","","",""],
        init: function() {
            this.cacheDom();
            this.eventListeners();
            this.render();
        },
        cacheDom: function() {
            this.resetButton = document.querySelector("#reset-button");
            this.gridCells = document.querySelectorAll(".grid-cell");
        },
        eventListeners: function() {
            this.resetButton.addEventListener("click", this.resetGame());
            this.gridCells.forEach((gridCells) => {
                gridCells.addEventListener("click", (e) =>{
                    this.addNoughtOrCross();
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
        }
        render: function() {
            for (let i in this.gridCells) {
                this.gridCells[i].textContent = this.gridValues[i];
            }
        },        
        addNoughtOrCross: function(playerTurn) {

        },
        checkCondition: function() {

        },
        generateMessage: function() {

        },
        switchPlayerTurn: function() {

        },
        resetGame: function() {

        }
    }
    app.init();
})();
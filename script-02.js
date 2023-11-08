const prompt = require('prompt-sync')();

(function() {
    var app = {

        init: function() {
            this.game();
            this.playerX = new this.player("X");
            this.playerO = new this.player("O");
        },

        gameboard: ["","","","","","","","",""],

        game: function() {
            this.currentTurn = "X";
            this.turnSwitcher = (function() {
                switch(this.currentTurn) {
                    case "X":
                        this.playerX.takeTurn();
                        currentTurn = "O";
                    case "O":
                        this.playerO.takeTurn();
                        currentTurn = "X";
                }
            })()
        },

        player: function(symbol) {
            this.symbol = symbol;
            this.cells = [];
            this.takeTurn = function() {
                choice = prompt("Enter cell no.: ");
                gameboard[choice] = this.symbol;
                this.cells.push(choice);
            }
        }
    }

    app.init();

})()
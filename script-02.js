(function() {
    var app = {

        init: function() {
            this.game();
            this.gameboard();
            this.playerOne = new this.player("X");
            this.playerTwo = new this.player("O");
        },

        game: function() {
            this.startingTurn = "X";
            

        },

        gameboard: ["","","","","","","","",""],

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
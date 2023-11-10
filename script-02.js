(function() {

    var app = {

        init: function() {
            this.game();
            this.gameboard();
            this.playerX = new this.player("X");
            this.playerO = new this.player("Y");
        },

        game: function() {
            this.turn = "X";
            this.playerChoice = null;
        },

        gameboard: ["","","","","","","","",""],

        player: function(symbol) {
            this.symbol = symbol;
            this.cells = [];
            this.takeTurn = (playerChoice) => this.gameboard[playerChoice] = this.symbol;
        }

    }

    app.init();

})()
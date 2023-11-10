const prompt = require('prompt-sync')();

(function() {

    var app = {

        init: function() {
            this.game();
            this.gameboard();
            this.playerOne = new this.player("X");
            this.playerTwo = new this.player("Y");
        },
        game: {},
        gameboard: [
            "","","","","","","","",""
        ],
        player: function(symbol) {
            this.symbol = symbol;
            this.cells = [];
        }

    }

    app.init();

})()
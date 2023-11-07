(function() {
    var app = {
        init: function() {
            this.game();
            this.gameboard();
            this.playerOne = new this.player();
            this.playerTwo = new this.player();
        },
        game: {},
        gameboard: {},
        player: {}
    }
    app.init();
})()
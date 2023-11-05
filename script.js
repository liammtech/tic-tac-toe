/*
    1. Render noughts and crosses on page
    2. Render message on page
    3. Check for winning condition (total of 8 possible winning conditions: 3 row, 3 columns, 2 diagonals)
    4. Render winning message: player 1 win, player 2 win, or tie
    5. Render winning line (if game is won)
    6. Reset game
*/

(function() {
    var app = {
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

        },
        render: function() {

        }
    }
    app.init();
})();
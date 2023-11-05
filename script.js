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
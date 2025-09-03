const gameboard = function () {
    // Filling array with "undefined" allows Array.map() method in the display controller to substitute in spaces
    let board = new Array(9).fill(undefined); 

    const placeSymbol = (symbol, place) => board[place - 1] = symbol;
    const getBoard = () => board;
    const resetBoard = () => board = new Array(9).fill(undefined);

    return { placeSymbol, getBoard, resetBoard };
}();

const shellDisplayController = (function () {
    const printBoard = function () {
        const board = gameboard.getBoard()
            // Mapping in spaces stops the display from saying "undefined" everywhere
            .map(symbol => symbol === undefined ? " " : symbol); 

        const [ a, b, c, d, e, f, g, h, i ] = board;

        console.log(
            ` 1  |2  |3  `, `\n`,
            ` ${a} | ${b} | ${c} `, `\n`,
            `___|___|___`, `\n`,
            `4  |5  |6  `, `\n`,
            ` ${d} | ${e} | ${f} `, `\n`,
            `___|___|___`, `\n`,
            `7  |8  |9  `, `\n`,
            ` ${g} | ${h} | ${i} `, `\n`,
            `   |   |   `
        );
    };

    return { printBoard };
})();

function createPlayer (symbol) {
    const promptTurn = prompt(`Player ${symbol}'s turn, where will you put your symbol? (Enter number): `)

    return { symbol, promptTurn };
}

const game = (function () {
    gameboard.resetBoard();

    const playerX = createPlayer("X");
    const playerY = createPlayer("Y");

    gameWon = false;
    let currentTurn = 0;

})();
const gameboard = (function () {
    // Filling array with "undefined" allows Array.map() method in the display controller to substitute in spaces
    let board = new Array(9).fill(undefined); 

    const placeSymbol = (symbol, place) => board[place] = symbol;
    const getBoard = () => board;

    return { placeSymbol, getBoard };
})();

const shellDisplayController = (function () {
    const printBoard = function () {
        const board = gameboard.getBoard()
            // Mapping in spaces stops the display from saying "undefined" everywhere
            .map(symbol => symbol === undefined ? " " : symbol); 

        const [ a, b, c, d, e, f, g, h, i ] = board;

        console.log(
            `    |   |   `, `\n`,
            ` ${a} | ${b} | ${c} `, `\n`,
            `___|___|___`, `\n`,
            `   |   |   `, `\n`,
            ` ${d} | ${e} | ${f} `, `\n`,
            `___|___|___`, `\n`,
            `   |   |   `, `\n`,
            ` ${g} | ${h} | ${i} `, `\n`,
            `   |   |   `
        );
    };

    return { printBoard };
})();

function createPlayer (symbol) {
    const symbol = symbol;

    return { symbol };
}

const game = (function () {})();
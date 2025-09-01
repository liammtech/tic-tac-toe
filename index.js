const gameboard = (function () {
    let board = new Array(9);

    const placeSymbol = (symbol, place) => board[place] = symbol;
    const getBoard = () => board;

    return { placeSymbol, getBoard };
})();

const shellDisplayController = (function () {
    const printBoard = function () {
        const [ a, b, c, d, e, f, g, h, i ] = gameboard.getBoard();

        console.log(
            `   |   |   `, `\n`,
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
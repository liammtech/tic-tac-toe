const gameboard = (function () {
    let board = new Array(9).fill(undefined);

    const placeSymbol = (symbol, place) => board[place] = symbol;
    const getBoard = () => board;

    return { placeSymbol, getBoard };
})();

const shellDisplayController = (function () {
    const printBoard = function () {
        const board = gameboard.getBoard()
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
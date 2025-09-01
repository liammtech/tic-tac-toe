const gameboard = (function () {
    let board = new Array(9);

    const placeSymbol = (symbol, place) => board[place] = symbol;
    const getBoard = () => board;

    return { placeSymbol, getBoard };
})();
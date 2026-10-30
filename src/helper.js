export function hasWinner(board) {
    if(board[0][0] === board[0][1] === board[0][0]) {
        return true
    }

    if(board[1][0] === board[1][1] === board[1][0]) {
        return true
    }

    if(board[2][0] === board[2][1] === board[2][0]) {
        return true
    }

    return false;
}

export function isEmptySpace(board, x, y) {
    return board[x][y] === undefined;
}
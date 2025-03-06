const n= 9
function solveSudoku(board) {
    solve(board)
}
function solve(board) {
    //1. find the 1st empty slot
    for(let i=0; i< 9; i++) {
        for(let j=0; j<9; j++) {
            if(board[i][j] === '.') {
                //2. check for all the values from 1 to 9 to place at that empty space
                for(let k=1; k<9; k++ ) {
                    if(isValid(board, i, j, k)) {
                        board[i][j] = k
                        if(solve(board)) return true
                        else board[i][j] = '.'
                    }
                }
                return false
            }
        }
    }
    //board is filled
    return true
}

function isValid(board, row, col, value) {
    for(let i=0; i< 9; i++) {
        if(board[i][col] == value) return false

        if(board[row][i] == value) return false

        //box
        if(board[3 * (Math.floor(row/3)) + Math.floor(i/3)][3* ((Math.floor(col/3))) + Math.floor(i%3)] == k) return false

        return true
    }
}
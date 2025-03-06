var solveNQueens = function(n) {
  const output = []
  const nQueens = Array(n).fill().map(() => Array(n).fill('.'))

  function isSafePlace(row, col) {
      // check if queen exits in same col above
      for(let i=0; i<n; i++) {
          if(nQueens[i][col] === 'Q') return false
      }

      // check upper left diagnol for queen
      for(let i= row-1, j=col-1; i>=0 && j>=0; i--, j--){
          if(nQueens[i][j] === 'Q') return false
      }

      // check upper right diagnol for queen
      for(let i= row-1, j= col+1; i>=0 && j<n; i--, j++) {
          if(nQueens[i][j] === 'Q') return false
      }

      //safe to place
      return true
  }

  function solve(row) {
      if(row === n) {
          output.push(nQueens.map((row) => row.join('')))
          return
      } 
      for(let col =0; col < n; col++) {
          if(isSafePlace(row, col)) {
              nQueens[row][col] = 'Q'
              solve(row + 1)
              nQueens[row][col] = '.'
          }
      }
  }
  solve(0)
  return output
};
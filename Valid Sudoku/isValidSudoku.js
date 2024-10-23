var isValidSudoku = function (board) {
  //9x9

  let rowCheck = []
  for (let i = 0; i < board.length; i++) {
    //console.log("i: ", i)
    for (let j = 0; j < board.length; j++) {
      rowCheck.push(board[i][j])

      //console.log("rowCheck: ", rowCheck)

      if (rowCheck.length == board.length) {
        rowCheck = rowCheck.filter(
          (item, index) => rowCheck.indexOf(item) !== index && item != ".",
        )
        //console.log("rowCheck: ", rowCheck)
        if (rowCheck.length != 0) {
          console.log("este ROW es false")
          return false
        } else {
          //console.log("vacia el array", i, j)
          rowCheck = []
          //rowCheck.push(board[i][j])
        }
      }
    }
  }

  let columnCheck = []
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      columnCheck.push(board[j][i])

      if (columnCheck.length == board.length) {
        columnCheck = columnCheck.filter(
          (item, index) => columnCheck.indexOf(item) !== index && item != ".",
        )
        //console.log("columnCheck: ", columnCheck)
        if (columnCheck.length != 0) {
          console.log("esta COLUMN es false")
          return false
        } else {
          columnCheck = []
          //columnCheck.push(board[j][i])
        }
      }
    }
  }

  //3x3

  let firstLimit = 0
  let lastLimit = 3
  let outerCounter = 0
  let arrayCheck = []

  while (outerCounter <= 3) {
    for (let i = 0; i < board.length; i++) {
      /* 	console.log(board[i]) */

      for (let j = firstLimit; j < lastLimit; j++) {
        //console.log("board[i][j]: ", board[i][j])

        if (arrayCheck.length < board.length) {
          arrayCheck.push(board[i][j])
        } else if (arrayCheck.length == board.length) {
          arrayCheck = arrayCheck.filter(
            (item, index) => arrayCheck.indexOf(item) !== index && item != "." && item != undefined,
          )
          if (arrayCheck.length != 0) {
            console.log("este array 3x3 es FALSE")
            return false
          } else {
            arrayCheck = []
            arrayCheck.push(board[i][j])
            
          }
        }
        //console.log("arrayCheck: ", arrayCheck)
      }
    }
    outerCounter++
    firstLimit += 3
    lastLimit += 3
    //console.log("------   ", outerCounter)
  }

  return true
}

const result = isValidSudoku([
  [".", ".", ".", ".", ".", ".", "5", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "3"],
  [".", "2", ".", "7", ".", ".", ".", ".", "."],
  ["8", "3", "6", "5", ".", ".", ".", ".", "1"],
  [".", ".", ".", ".", ".", "1", ".", ".", "."],
  ["2", ".", ".", ".", ".", ".", ".", ".", "5"],
  [".", ".", ".", ".", ".", ".", ".", ".", "7"],
  [".", ".", ".", "4", ".", ".", ".", "7", "."],
])

console.log("result: ", result)

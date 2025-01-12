import {
  Digit,
  SudokuBoard,
  SudokuPosition,
  SudokuCoordinate,
} from "./sudokuTypes";

function isValid(digit: Digit, pos: SudokuPosition, board: SudokuBoard) {
  for (let i = 0; i < 9; i++) {
    // If there is the same digt in the row we inserted then return false
    //  but ignore the digit we inserted
    if (board[pos.y][i] === digit && pos.x != i) return false;
  }

  // Check column, similar to rows, but instead of checking by pos.x
  //  we look at the vertical position pos.y
  for (let i = 0; i < 9; i++) {
    if (board[i][pos.x] === digit && pos.y != i) return false;
  }

  // Checking boxes
  // boxX and boxY will be either 0, 1 or 2
  const boxX = Math.floor(pos.x / 3);
  const boxY = Math.floor(pos.y / 3);

  // we start at i = 0 or i = 3 or i = 6,
  //  which is the first Y coordinate of the box
  //  and we end the loop on the last Y coordinate of that box
  for (let y = boxY * 3; y < boxY * 3 + 3; y++) {
    // similar with box X coordinates
    for (let x = boxX * 3; x < boxX * 3 + 3; x++) {
      // if there already is the same digit in the box that we inserted
      //  and if the cell isn't with the digit we inserted, then return false
      if (board[y][x] === digit && pos.x !== x && pos.y !== y) return false;
    }
  }

  // if all tests were passed return true (is valid)
  return true;
}

export function solve(board: SudokuBoard) {
  const find = findEmpty(board);

  // if all the cells are filled, solution found
  if (!find) return [true, board];

  const { x, y } = find;

  for (let i: Digit = 1 as Digit; i <= 9; i++) {
    if (isValid(i, { x, y }, board)) {
      // if the number is valid, add it to the board
      board[y][x] = i;

      if (solve(board)[0]) return [true, board];

      // if the number isn't correct we reset it to 0
      //  and try again with different value
      board[y][x] = 0;
    }
  }

  return [false, board];
}

function findEmpty(board: SudokuBoard): SudokuPosition | false {
  // find the first empty cell (0 on the board)
  for (let y = 0 as SudokuCoordinate; y < 9; y++) {
    for (let x = 0 as SudokuCoordinate; x < 9; x++) {
      if (board[y][x] === 0) {
        return { x, y };
      }
    }
  }

  // if no empty cells
  return false;
}

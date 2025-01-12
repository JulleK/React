export type SudokuRow = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];

export type SudokuBoard = [
  SudokuRow,
  SudokuRow,
  SudokuRow,
  SudokuRow,
  SudokuRow,
  SudokuRow,
  SudokuRow,
  SudokuRow,
  SudokuRow
];

export type Digit = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type SudokuCoordinate = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type SudokuPosition = { x: SudokuCoordinate; y: SudokuCoordinate };

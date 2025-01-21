export type PlayerSymbol = "X" | "O";
export type Cell = null | "X" | "O";
export type Board = Cell[][];
export type GameTurn = {
  square: { row: number; col: number };
  player: PlayerSymbol;
};

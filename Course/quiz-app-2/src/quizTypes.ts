export type Question = {
  id: string;
  text: string;
  answers: Answer[];
};
export type Answer = string | null;

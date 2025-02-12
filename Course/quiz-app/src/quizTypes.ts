export type Answer = string;
export type Question = {
  id: string;
  text: string;
  answers: [Answer, Answer, Answer, Answer];
};

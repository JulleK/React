export type Answer = string;
export type Question = {
  id: string;
  text: string;
  answers: [Answer, Answer, Answer, Answer];
};

export type AnswerState = "" | "answered" | "correct" | "wrong";

export type SummaryStatus = "correct" | "wrong" | "skipped";

export type SummaryAnswer = {
  text: string;
  status: SummaryStatus;
};

export type SummaryUserAnswers = SummaryAnswer[];

export type SummaryStats = {
  skipped: number;
  correct: number;
  wrong: number;
};

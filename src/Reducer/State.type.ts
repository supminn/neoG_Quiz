export type State = {
  score: number;
  questionNo: number;
  quizName: string;
  stats: Array<Stats>;
};

export type Stats = {
  name: string;
  highScore: number;
  attempt: number;
};
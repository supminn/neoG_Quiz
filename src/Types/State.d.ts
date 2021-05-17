type State = {
  score: number;
  questionNo: number;
  quizName: string;
  stats: Array<Stats>;
};

type Stats = {
  name: string;
  highScore: number;
  attempt: number;
};
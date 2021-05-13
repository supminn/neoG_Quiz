type Options = {
  value: string;
  isRight: boolean;
};

type Questions = {
  question: string;
  points: number;
  negativePoints?:number;
  options: Array<Options>;
};

type Quiz = {
  quizName: string;
  highScore: number;
  questions: Questions[];
};

type Quizes = Array<Quiz>;
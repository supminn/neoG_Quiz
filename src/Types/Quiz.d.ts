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
  level: string;
  questions: Questions[];
};

type Quizes = Array<Quiz>;
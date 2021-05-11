export type Options = {
  value: string;
  isRight: boolean;
};

export type Questions = {
  question: string;
  points: number;
  negativePoints?:number;
  options: Array<Options>;
};

export type Quiz = {
  quizName: string;
  highScore: number;
  questions: Questions[];
};

export type Quizes = Array<Quiz>;
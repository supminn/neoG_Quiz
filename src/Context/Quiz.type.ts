export type Options = {
  value: string;
  isRight: boolean;
};

export type Questions = {
  question: string;
  points: number;
  negativePoints?:number;
  options: Array<Options>;
  image?: string;
};

export type Quiz = {
  quizName: string;
  level: string;
  questions: Questions[];
};


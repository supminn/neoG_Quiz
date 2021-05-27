import { Quiz } from "../Context/Quiz.type";

export type QuizState = {
  score: number;
  questionNo: number;
  currentQuiz: Quiz;
  stats: Array<Stats>;
};

export type Stats = {
  name: string;
  highScore: number;
  attempt: number;
};

export type UserState = {
  username:string;
  password:string;
  email:string;
  name: string;
}
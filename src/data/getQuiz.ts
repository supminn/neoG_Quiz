import { Quiz } from "./quiz.types";

export const quiz: Quiz = {
  quizName: "Basic Jump Rope Quiz",
  questions: [
    {
      question: "What is jump roping also known as?",
      points: 5,
      options: [
        {
          value: "Rope Skipping",
          isRight: false,
        },
        {
          value: "Skipping Rope",
          isRight: false,
        },
        {
          value: "Rope Jumping",
          isRight: false,
        },
        {
          value: "All of the above",
          isRight: true,
        },
      ],
    },
    {
      question:
        "What is the easiest way of measuring jump rope's height? Where should the handles come up to?",
      points: 5,
      negativePoints: 2,
      options: [
        {
          value: "Head",
          isRight: false,
        },
        {
          value: "Waist",
          isRight: true,
        },
        {
          value: "Knees",
          isRight: false,
        },
        {
          value: "Shoulder",
          isRight: false,
        },
      ],
    },
    {
      question: "Where should one's hands be placed while jumping rope?",
      points: 5,
      negativePoints: 2,
      options: [
        {
          value: "By the hips",
          isRight: true,
        },
        {
          value: "Behind the head",
          isRight: false,
        },
        {
          value: "Beside the shoulders",
          isRight: false,
        },
        {
          value: "None of the above",
          isRight: false,
        },
      ],
    },
    {
      question:
        "Ideally, how high should one jump for the rope to go over and complete a rotation?",
      points: 10,
      negativePoints: 5,
      options: [
        {
          value: "As high as possible",
          isRight: false,
        },
        {
          value: "Not more than 1 - 1.5 inches of the ground",
          isRight: true,
        },
        {
          value: "1 feet",
          isRight: false,
        },
        {
          value: "It doesn't matter",
          isRight: true,
        },
      ],
    },
    {
      question: "What is the right technique of jumping?",
      points: 10,
      negativePoints: 5,
      options: [
        {
          value: "Place you complete foot down after each jump",
          isRight: false,
        },
        {
          value: "Jump using your heels",
          isRight: false,
        },
        {
          value: "Using your toes only",
          isRight: false,
        },
        {
          value: "Jump on the balls of your feet",
          isRight: true,
        },
      ],
    },
  ],
};

export const JRDquiz: Quiz = {
  quizName: "Quiz related to Jump Rope Dudes",
  questions: [
    {
      question: "Which brand does the Jump Rope Dudes endorse?",
      points: 15,
      options: [
        {
          value: "Rush Athletics",
          isRight: false,
        },
        {
          value: "Jump Rope Dudes ropes",
          isRight: false,
        },
        {
          value: "CrossRopes",
          isRight: true,
        },
        {
          value: "Dope Ropes",
          isRight: false,
        },
      ],
    },
  ],
};

export const TrickQuiz: Quiz = {
  quizName: "Jump Rope tricks",
  questions: [
    {
      question: "Nateflix is a colaborations between?",
      points: 15,
      options: [
        {
          value: "Nate KG and Coach Chris",
          isRight: true,
        },
        {
          value: "Nate KG and Bav",
          isRight: false,
        },
        {
          value: "Coach Chris and Bav",
          isRight: false,
        },
        {
          value: "Sarah and Lauren",
          isRight: false,
        },
      ],
    },
  ],
};

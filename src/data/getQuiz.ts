import { Quiz, Quizzes } from "./Quiz.type";
import EQ1 from "../Assets/EQ1.png";
import EQ2 from "../Assets/EQ2.png";
import EQ3 from "../Assets/EQ3.png";
import EQ4 from "../Assets/EQ4.png";
import EQ5 from "../Assets/EQ5.png";
import MQ1 from "../Assets/MQ1.png";
import MQ2 from "../Assets/MQ2.png";
import MQ3 from "../Assets/MQ3.png";
import MQ4 from "../Assets/MQ4.png";
import MQ5 from "../Assets/MQ5.png";
import HQ1 from "../Assets/HQ1.png";
import HQ2 from "../Assets/HQ2.png";
import HQ3 from "../Assets/HQ3.png";
import HQ4 from "../Assets/HQ4.png";
import HQ5 from "../Assets/HQ5.png";


export const BasicQuiz: Quiz = {
  quizName: "Basic Jump Rope Quiz",
  level: "Easy",
  questions: [
    {
      question: "What is jump roping also known as?",
      points: 10,
      image: EQ1,
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
      points: 10,
      image:EQ2,
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
      points: 10,
      image:EQ3,
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
      image:EQ4,
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
          isRight: false,
        },
      ],
    },
    {
      question: "What is the right technique of jumping?",
      points: 10,
      image:EQ5,
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

export const JrdQuiz: Quiz = {
  quizName: "The Jump Rope Dudes Quiz",
  level: "Medium",
  questions: [
    {
      question: "Which brand does the Jump Rope Dudes endorse?",
      points: 10,
      image: MQ1,
      negativePoints: 5,
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
    {
      question: "Who are the Jump Rope Dudes?",
      points: 10,
      image: MQ2,
      negativePoints: 5,
      options: [
        {
          value: "Rushie and Chris",
          isRight: false,
        },
        {
          value: "Brandon and Dan",
          isRight: true,
        },
        {
          value: "Dan and Rushie",
          isRight: false,
        },
        {
          value: "Nate and Brandon",
          isRight: false,
        },
      ],
    },
    {
      question: "What is the slogan Jump Rope Dudes promote?",
      points: 10,
      image: MQ3,
      negativePoints: 5,
      options: [
        {
          value: "Lets get jumping",
          isRight: false,
        },
        {
          value: "Jump rope for life",
          isRight: false,
        },
        {
          value: "Get set jump",
          isRight: false,
        },
        {
          value: "Do the thing",
          isRight: true,
        },
      ],
    },
    {
      question: "What is the ideal way to lose weight, get lean?",
      points: 10,
      image: MQ4,
      negativePoints: 5,
      options: [
        {
          value: "Jump rope and body weight exercises 3-4 days/week",
          isRight: true,
        },
        {
          value: "Jump rope for all the 7 days continuously",
          isRight: false,
        },
        {
          value: "Maintain a good diet. That's all",
          isRight: false,
        },
        {
          value: "Watch JRD jump and chill",
          isRight: false,
        },
      ],
    },
    {
      question:
        "How long should one jump rope session be according to the jump rope dudes?",
      points: 10,
      image: MQ5,
      negativePoints: 5,
      options: [
        {
          value: "2 hours straight",
          isRight: false,
        },
        {
          value: "Keep jumping until one gets tired",
          isRight: false,
        },
        {
          value: "15 to 30 minutes",
          isRight: true,
        },
        {
          value: "Nothing is specified",
          isRight: false,
        },
      ],
    },
  ],
};

export const FancyQuiz: Quiz = {
  quizName: "Jump Rope Tricks Quiz",
  level: "Hard",
  questions: [
    {
      question: "Nateflix is a colaborations between?",
      points: 10,
      image:HQ1,
      negativePoints: 5,
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
    {
      question: "What is Nateflix?",
      points: 10,
      image:HQ2,
      negativePoints: 5,
      options: [
        {
          value:
            "All the jump rope tricks taught by Chris and challenges created by Bav",
          isRight: false,
        },
        {
          value:
            "All the jump rope tricks taught by Nate and challenges created by Chris",
          isRight: false,
        },
        {
          value:
            "All the jump rope tricks taught by Kathy and challenges created by Nate",
          isRight: false,
        },
        {
          value:
            "All the jump rope tricks taught by Chris and challenges created by Nate",
          isRight: true,
        },
      ],
    },
    {
      question: "Where is Jump Rope Coach Chris based out of?",
      points: 10,
      image:HQ3,
      negativePoints: 5,
      options: [
        {
          value: "United States of America",
          isRight: false,
        },
        {
          value: "United Arab Emirates",
          isRight: false,
        },
        {
          value: "United Kingdom",
          isRight: true,
        },
        {
          value: "Australia",
          isRight: false,
        },
      ],
    },
    {
      question: "How does Coach Chris teach combos on instagram?",
      points: 10,
      image:HQ4,
      negativePoints: 5,
      options: [
        {
          value:
            "Add multiple clips of slow motion to cover all the aspects of explaination",
          isRight: true,
        },
        {
          value: "Instagram live sessions every day to each a new trick",
          isRight: false,
        },
        {
          value:
            "Adds pictures so that people view them and learn on their own",
          isRight: false,
        },
        {
          value: "Coach Chirs is not on instagram",
          isRight: false,
        },
      ],
    },
    {
      question: "What type of ropes does Chris and Nate use?",
      points: 10,
      image:HQ5,
      negativePoints: 5,
      options: [
        {
          value: "Steel cable speed ropes",
          isRight: false,
        },
        {
          value: "PVC ropes",
          isRight: false,
        },
        {
          value: "Beaded ropes",
          isRight: true,
        },
        {
          value: "Crossrope",
          isRight: false,
        },
      ],
    },
  ],
};

export const quizzes: Quizzes = [BasicQuiz, JrdQuiz, FancyQuiz];

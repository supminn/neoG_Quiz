export const allQuizzes = `query MyQuery {
    Quiz {
      id
      quizName
      level
      questions {
        question
        points
        negativePoints
        image
        options {
          value
          isRight
        }
      }
    }
  }`;
  
export const levelEasy = `query MyQuery {
  Quiz(where: {level: {_eq: "Easy"}}) {
    id
    quizName
    level
    questions {
      question
      points
      negativePoints
      image
      options {
        value
        isRight
      }
    }
  }
}
`;

export const levelMedium = `query MyQuery {
  Quiz(where: {level: {_eq: "Medium"}}) {
    id
    quizName
    level
    questions {
      question
      points
      negativePoints
      image
      options {
        value
        isRight
      }
    }
  }
}
`;

export const levelHard = `query MyQuery {
  Quiz(where: {level: {_eq: "Hard"}}) {
    id
    quizName
    level
    questions {
      question
      points
      negativePoints
      image
      options {
        value
        isRight
      }
    }
  }
}
`;
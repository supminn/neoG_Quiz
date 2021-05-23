export const allQuizes = `query MyQuery {
    Quiz {
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
  
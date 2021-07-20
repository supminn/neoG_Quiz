export const quizzesQuery = `query MyQuery {
  Quiz {
    id
    level
    quizName
  }
}
`;

export const individualQuizQuery = (id: string) => `query MyQuery {
  Quiz(where: {id: {_eq: "${id}"}}) {
    id
    level
    quizName
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

export const createScoreEntry = (
  userId: string,
  quizId: string,
  highScore: number,
  attempt: number
) => `mutation MyMutation {
  insert_Scoreboard_one(object: {userId:${userId}, quizId:${quizId}, highScore:${highScore}, attempt:${attempt}}) {
    id
  }
}`;

export const updateScoreAndAttempt = (userId: string,
  quizId: string,
  highScore: number) => `mutation MyMutation {
  update_Scoreboard(where: {
    quizId: {_eq: ${quizId}},
    userId: {_eq: ${userId}}},
    _set: {highScore: ${highScore}}, _inc: {attempt: 1}){
    returning{
      id
    }
  }
}`;

export const clearStats = (id: string) => `mutation MyMutation {
  delete_Scoreboard_by_pk(id: ${id}){
    id
  }
}`;

export const loadStats = (userId: string) => `query MyQuery {
  Scoreboard(where: {userId: {_eq: ${userId}}}) {
    id
    userId
    quizId
    highScore
    attempt
    ScoreRel {
      quizName
    }
  }
}`;

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


[![wakatime](https://wakatime.com/badge/github/supminn/neoG_Quiz.svg)](https://wakatime.com/badge/github/supminn/neoG_Quiz)

# SupQuiz

SupQuiz is a multilevel quiz related to jump rope. There are 3 levels - easy, medium and hard. As the difficulty increases, negative markings are introduced.

## Technology Stack
- TypeScript with React
- React - Reducer + Context
- React Player for video playback
- Styling using [TailwindCSS](https://tailwindcss.com/)
- React Router v6 (beta) for routes
- Express & MongoDB for user authentication [Repo Link](https://github.com/supminn/neoG_Backend/)
- Hasura GraphQL to store quiz data

## Functionalities
- Multiple Quizzes
- Rules and instructions prior to starting a quiz
- Timer of 30 seconds for each question
- Display the right answer after attempt or end of time
- Final scores at the end of quiz
- Access score board if user is signed in

## Enhancements
* Fix data on refresh
* Quiz unlocks by scoring a threshold in the previous quiz. (specific to a user)
* Challenge friends to take up the quiz.
* Show points break-up.

## Live link and demo
[Deployed Link](https://deploy-preview-1--supquiz.netlify.app/)

https://user-images.githubusercontent.com/30731236/122635590-7354a900-d102-11eb-827c-ede49c4911ec.mp4

## Instructions on using SupQuiz locally.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This starter kit could be installed in 2 ways.

1. Clone this repository and start working on the development.
2. Using [degit](https://github.com/Rich-Harris/degit).

### Instructions while using degit

degit installation:

```bash
yarn install -g degit
```

Follow the below instructions to use this starter kit:

```
degit supminn/neoG_Quiz my-app-name
cd my-app-name

yarn install
```
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

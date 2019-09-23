# AppFigures
Of course, many improvements could be implemented, especially after adding redux (which will make it easy to do so).
- For UI/UX I used combination of Bootstrap and MaterialUI.
- For the application's state I used Redux and Hooks !!!

To run the application please set a local variable in your computer to point the URL.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Set Local Envs example
- examples are done using Linux terminal commands (I am a Linux guy)

export variable $URL :
### `➜ export URL=https://yourEndPointHere`

test your local env (should output the url of the endpoint) :
### `➜  echo -n $URL https://yourEndPointHere%`

## Available Scripts

In the project directory, you can run:

### `npm start`
but don't forget to do a 
### `yarn`
before running the app

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

Libraries used :
  ` "@material-ui/core": "^4.4.2",
    "@material-ui/icons": "^4.4.1",
    "@material-ui/lab": "^4.0.0-alpha.26",
    "axios": "^0.19.0",
    "bootstrap": "^4.3.1",
    "keymirror": "^0.1.1",
    "moment": "^2.24.0",
    "react": "^16.9.0",
    "react-dom": "^16.9.0",
    "react-emojione": "^5.0.1",
    "react-redux": "^7.1.1",
    "react-scripts": "3.1.1",
    "redux": "^4.0.4",
    "redux-thunk": "^2.3.0",
    "shortid": "^2.2.15"`

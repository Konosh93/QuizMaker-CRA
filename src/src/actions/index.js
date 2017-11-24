import Cookies from 'universal-cookie';
import agent from '../agent';
import {
  LOGIN,
  SIGNUP,
  BEGIN_AUTH,
  REQUEST_QUIZES,
  RECEIVE_QUIZES,
  ADD_QUIZ,
  SELECT_QUIZ,
  SET_TITLE,
  INVALIDATE,
  PERMIT_EDIT,
  ADD_PROBLEM,
  REMOVE_PROBLEM,
  SET_CURRENT_PROBLEM,
  SET_QUESTION_TEXT,
  SET_QUESTION_MEDIA,
  ADD_CHOICE,
  EDIT_CHOICE_TEXT,
  EDIT_CHOICE_MEDIA,
  REMOVE_CHOICE,
  SET_CORRECT,
  SYNC_QUIZ,
} from '../constants';

export const recallUser = () => dispatch => {
  const cookies = new Cookies();
  const token = cookies.get('token');
  agent.setToken(token);
  agent.accounts.recall()
    .then(res => dispatch(login(res.user)));
}


export const beginAuth = ()  => ({
  type: BEGIN_AUTH,
});

const login = (user) => ({
  type: LOGIN,
  payload: {
    user,
  }
});

export const loginAsync = (email, password) => dispatch => {
  dispatch(beginAuth());
  agent.accounts.login(email, password).then(res => dispatch(login(res.user)))
};

export const signup = (name, email, password) => dispatch => {
  dispatch({
    type: SIGNUP,
    payload: agent.accounts.signup(name, email, password) });// this one is the problem
};

export const setTokenCookie = token => {
  const cookies = new Cookies();
  cookies.set('token', token, { path: '/', maxAge: 86400 });
};

export const requestQuizes = () => ({
  type: REQUEST_QUIZES,
});

export const receiveQuizes = (quizlist) => ({
  type: RECEIVE_QUIZES,
  payload: {
    quizlist,
  },
});

export const selectQuiz = (quiz) => ({
  type: SELECT_QUIZ,
  payload: {
    quiz,
  }
});

export const addQuiz = (quiz, quizData) => ({
  type: ADD_QUIZ,
  payload: {
    quiz,
    quizData,
  }
});

export const permitEdit = quiz => ({
  type: PERMIT_EDIT,
  payload: {
    quiz,
  }
});

export const setTitle = (quiz, title) => ({
  type: SET_TITLE,
  payload: {
    quiz,
    title,
  }
});

export const invalidate = quiz => ({
  type: INVALIDATE,
  payload: {
    quiz,
  }
});

export const addProblem = quiz => ({
  type: ADD_PROBLEM,
  payload: {
    quiz,
  }
});

export const removeProblem = (quiz, problem) => ({
  type: REMOVE_PROBLEM,
  payload: {
    quiz,
    problem,
  }
});

export const setCurrentProblem = (quiz, problem) => ({
  type: SET_CURRENT_PROBLEM,
  payload: {
    quiz,
    problem,
  }
});


export const addChoice = (quiz, problem) => ({
  type: ADD_CHOICE,
  payload: {
    quiz,
    problem,
  }
});

export const removeChoice = (quiz, problem, choice) => ({
  type: REMOVE_CHOICE,
  payload: {
    quiz,
    problem,
    choice,
  }
});


export const setCorrect = (quiz, problem, correctChoice) => ({
  type: SET_CORRECT,
  payload: {
    quiz,
    problem,
    correctChoice,
  }
});


export const setQuestionText = (quiz, problem, questionText) => ({
  type: SET_QUESTION_TEXT,
  payload: {
    quiz,
    problem,
    questionText,
  }
});

export const syncQuiz = (oldQuiz, newQuiz) =>  ({
  type: SYNC_QUIZ,
  payload: {
    oldQuizId: Object.keys(oldQuiz)[0],
    newQuizId: Object.keys(newQuiz)[0],
  }
});
export const editChoiceText = (quiz, problem, choice, choiceText) => ({
  type: EDIT_CHOICE_TEXT,
  payload: {
    quiz,
    problem,
    choice,
    choiceText,
  }
});
/*
export const fetchQuizes = () => dispatch => {
  dispatch(requestQuizes());
  return agent.fetchQuizes().then( res => res.json()).then(json => dispatch(receiveQuizes(json.quizlist)));
}
*/
//testing
export const fetchQuizes = () => dispatch => {
  dispatch(requestQuizes());
  return fetch('www.omeryourock.com').then( res => res.json()).then(json => dispatch(receiveQuizes(json.quizlist)));
}



export const submitQuiz = (quiz) => dispatch => {console.log(quiz)

  return agent.quizes.submitQuiz(quiz).then( res => dispatch(syncQuiz(quiz, res)));
}

/*
export const laterChange = {
  setTokenCookie,
  submitQuiz,
  getQuiz,
  getQuizList,
  login,
  signup,
  beginAuth,
};


export const action = param => ({
  type: TYPE,
  payload: {
    param,
  }
});
*/
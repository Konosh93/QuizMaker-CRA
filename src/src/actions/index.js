import Cookies from 'universal-cookie';
import agent from '../agent';
import * as types from '../constants';

export const recallUser = () => dispatch => {
  const cookies = new Cookies();
  const token = cookies.get('token');
  agent.setToken(token);
  agent.accounts.recall()
    .then(res => dispatch(registerUser(res.user, res.errors)));
}


export const beginAuth = ()  => ({
  type: types.BEGIN_AUTH,
});

const registerUser = (user, errors) => {
  if (user && user.token) {
    setTokenCookie(user.token);
  }
  return {
    type: types.LOGIN,
    payload: {
      user,
      errors,
    }    
  }
};

export const logout = () => {
  removeTokenCookie();

  return{
    type: types.LOGOUT,
  }
}

export const loginAsync = (email, password) => dispatch => {
  dispatch(beginAuth());
  agent.accounts.login(email, password).then(res => dispatch(registerUser(res.user, res.errors)))
};

export const signupAsync = (name, email, password) => dispatch => {
  dispatch(beginAuth());
  agent.accounts.signup(name, email, password).then(res => dispatch(registerUser(res.user, res.errors)))
};


export const setTokenCookie = token => {
  const cookies = new Cookies();
  cookies.set('token', token, { path: '/', maxAge: 86400 });
};

export const removeTokenCookie = () => {
  const cookies = new Cookies();
  cookies.remove('token');
};

export const getTokenCookie = () => {
  const cookies = new Cookies();
  return cookies.get('token');
};

export const requestQuizes = () => ({
  type: types.REQUEST_QUIZES,
});

export const receiveQuizes = (quizlist) => ({
  type: types.RECEIVE_QUIZES,
  payload: {
    quizlist,
  },
});

export const selectQuiz = (quiz) => ({
  type: types.SELECT_QUIZ,
  payload: {
    quiz,
  }
});

export const addQuiz = (quiz, quizData) => ({
  type: types.ADD_QUIZ,
  payload: {
    quiz,
    quizData,
  }
});

export const permitEdit = quiz => ({
  type: types.PERMIT_EDIT,
  payload: {
    quiz,
  }
});

export const setTitle = (quiz, title) => ({
  type: types.SET_TITLE,
  payload: {
    quiz,
    title,
  }
});

export const invalidate = quiz => ({
  type: types.INVALIDATE,
  payload: {
    quiz,
  }
});

export const addProblem = quiz => ({
  type: types.ADD_PROBLEM,
  payload: {
    quiz,
  }
});

export const removeProblem = (quiz, problem) => ({
  type: types.REMOVE_PROBLEM,
  payload: {
    quiz,
    problem,
  }
});

export const setCurrentProblem = (quiz, problem) => ({
  type: types.SET_CURRENT_PROBLEM,
  payload: {
    quiz,
    problem,
  }
});


export const addChoice = (quiz, problem) => ({
  type: types.ADD_CHOICE,
  payload: {
    quiz,
    problem,
  }
});

export const removeChoice = (quiz, problem, choice) => ({
  type: types.REMOVE_CHOICE,
  payload: {
    quiz,
    problem,
    choice,
  }
});


export const setCorrect = (quiz, problem, correctChoice) => ({
  type: types.SET_CORRECT,
  payload: {
    quiz,
    problem,
    correctChoice,
  }
});


export const setQuestionText = (quiz, problem, questionText) => ({
  type: types.SET_QUESTION_TEXT,
  payload: {
    quiz,
    problem,
    questionText,
  }
});

export const syncQuiz = (oldQuizId, newQuizId) =>  ({
  type: types.SYNC_QUIZ,
  payload: {
    oldQuizId,
    newQuizId,
  }
});
export const editChoiceText = (quiz, problem, choice, choiceText) => ({
  type: types.EDIT_CHOICE_TEXT,
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



export const submitQuiz = quiz => dispatch => {
  const token = getTokenCookie();
  agent.setToken(token);
  return agent.quizes.submitQuiz(quiz).then( res => dispatch(syncQuiz(quiz.id, res.quiz.id)));
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
  type: types.TYPE,
  payload: {
    param,
  }
});
*/
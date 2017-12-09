import agent from '../agent';
import * as types from '../constants';
import * as utils from '../utils';

export const setSize = (width, height) => ({
  type: types.RESIZE,
  payload: {
    width,
    height,
  },
})


export const beginAuth = ()  => ({
  type: types.BEGIN_AUTH,
});

export const login = (email, password) => dispatch => {
  dispatch(beginAuth());
  agent.accounts.login(email, password)
    .then(res => dispatch(setAuthStatus(res.body.user, null)))
    .catch(err => {
      if (err.response) {
        dispatch(setAuthStatus(null, err.response.body.errors))
      }else{
        console.log(err);
      }
    });
};

export const recallUser = () => dispatch => {
  dispatch(beginAuth());
  const token = utils.tokenAuth.get('token');
  agent.setToken(token);
  agent.accounts.recall()
    .then(res => dispatch(setAuthStatus(res.body.user, null)))
    .catch(err => {
      if (err.response) {
        dispatch(setAuthStatus(null, err.response.body.errors))
      }else{
        console.log(err);
      }
    });
}

export const signup = (name, email, password) => dispatch => {
  dispatch(beginAuth());
  agent.accounts.signup(name, email, password)
    .then(res => dispatch(setAuthStatus(res.body.user, null)))
    .catch(err => {
      if (err.response) {
        dispatch(setAuthStatus(null, err.response.body.errors))
      }else{
        console.log(err);
      }
    });
};

export const logout = () => {
  utils.tokenAuth.remove('token');
  return{
    type: types.LOGOUT,
  }
}

const setAuthStatus = (user, errors) => {
  if (user && user.token) {
    utils.tokenAuth.set('token', user.token, { path: '/', maxAge: 86400 })
    return {
      type: types.AUTHENTICATE,
      payload: { user },   
    }
  }
  return {
    type: types.AUTHENTICATE,
    payload: { errors },  
  }
};

export const requestQuizes = () => ({
  type: types.REQUEST_QUIZES,
});

export const clearQuizes = () => ({
  type: types.CLEAR_QUIZES,
});

export const selectQuiz = (quizId) => ({
  type: types.SELECT_QUIZ,
  payload: {
    quizId,
  }
});

export const addQuiz = (quizId, quizData) => ({
  type: types.ADD_QUIZ,
  payload: {
    quizId,
    quizData,
  }
});

export const permitEdit = () => ({
  type: types.PERMIT_EDIT,
});

export const setTitle =  title => ({
  type: types.SET_TITLE,
  payload: {
    title,
  }
});

export const invalidate = () => ({
  type: types.INVALIDATE,
});

export const addProblem = () => ({
  type: types.ADD_PROBLEM,
});

export const removeProblem = () => ({
  type: types.REMOVE_PROBLEM,
});

export const setCurrentProblem = ( problemId) => ({
  type: types.SET_CURRENT_PROBLEM,
  payload: {
    problemId,
  }
});


export const addChoice = () => ({
  type: types.ADD_CHOICE,
});

export const removeChoice = (choiceId) => ({
  type: types.REMOVE_CHOICE,
  payload: {
    choiceId,
  }
});


export const setCorrect = (correctChoiceId) => ({
  type: types.SET_CORRECT,
  payload: {
    correctChoiceId,
  }
});


export const setQuestion = (editorState) => ({
  type: types.SET_QUESTION,
  payload: {
    editorState,
  }
});

export const syncQuiz = (oldQuizId, newQuizId) =>  ({
  type: types.SYNC_QUIZ,
  payload: {
    oldQuizId,
    newQuizId,
  }
});

export const transformThenAdd = servedQuizes => dispatch => {
  for (var q of servedQuizes) { 
    var quiz = utils.convertToReduxFormat(q);
    dispatch(addQuiz(quiz._id, { title: quiz.title, problems: quiz.problems}));
  }
}

export const setChoice = (choiceId, editorState) => ({
  type: types.SET_CHOICE,
  payload: {
    choiceId,
    editorState,
  }
});
/* actual */
export const fetchQuizes = () => dispatch => {
  dispatch(requestQuizes());
  dispatch(clearQuizes())
  return agent.quizes.fetchQuizes()
    .then( res => dispatch(transformThenAdd(res.body.quizes)))
    .catch( err => console.log(err))
}

export const fetchMyQuizes = () => dispatch => {
  dispatch(requestQuizes());
  dispatch(clearQuizes())
  const token = utils.tokenAuth.get('token');
  agent.setToken(token);
  return agent.quizes.fetchMyQuizes()
    .then( res => dispatch(transformThenAdd(res.body.quizes)))
    .catch( err => console.log(err))
}
/*
//testing
export const fetchQuizes = () => dispatch => {
  dispatch(requestQuizes());
  return fetch('www.omeryourock.com').then( res => res.json()).then(json => dispatch(receiveQuizes(json.quizlist)));
}
*/


export const submitQuiz = quiz => dispatch => {
  const token = utils.tokenAuth.get('token');
  const _quiz = utils.convertToServerFormat(quiz);
  agent.setToken(token);
  return agent.quizes.submitQuiz(_quiz)
    .then( res => dispatch(syncQuiz('new-quiz', res.body.quiz._id)))
    .catch( err => console.log(err));
}

export const submitAnswers = quiz => dispatch => {
  const token = utils.tokenAuth.get('token');
  const answers = utils.extractAnswers(quiz);
  return agent.quizes.submitAnswers(answers)
    .then(res => console.log(res.body.score))
    .catch(err => console.log(err));
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
import * as types from '../../constants';

const initState = {
  isFetching: false,
  quizlist: {},
  quizes: {},
  currentQuiz: null,
 };

const quizReducer = (state = initState, action) => {
  switch (action.type) {
  	case types.REQUEST_QUIZES:
  	  return { ...state, isFetching: true };
    case types.RECEIVE_QUIZES:
      //tobe corrected as quizlist was changed to an object instead of an array.
      return { ...state, quizlist: [...state.quizlist, ...action.payload.quizlist], isFetching: false };
    case types.SELECT_QUIZ:
      return { ...state, currentQuiz: action.payload.quiz};
    case types.ADD_QUIZ:
      const _newQuiz = quiz(undefined, action);
      return { 
        ...state,
        quizes: { ...state.quizes,
          [action.payload.quiz]: { ..._newQuiz, ...action.payload.quizData }}};
    case types.SYNC_QUIZ:
      const newQuizes = { ...state.quizes, [action.payload.newQuizId]: state.quizes[action.payload.oldQuizId]};
      delete newQuizes[action.payload.oldQuizId]
      return { ...state, quizes: newQuizes }
    case types.SET_TITLE:
    case types.INVALIDATE:
    case types.PERMIT_EDIT:
    case types.ADD_PROBLEM:
    case types.REMOVE_PROBLEM:
    case types.SET_CURRENT_PROBLEM:
    case types.SET_QUESTION_TEXT:
    case types.SET_QUESTION_MEDIA:
    case types.ADD_CHOICE:
    case types.EDIT_CHOICE_TEXT:
    case types.EDIT_CHOICE_MEDIA:
    case types.REMOVE_CHOICE:
    case types.SET_CORRECT:
      const _key = action.payload.quiz
      return { ...state, quizes: { ...state.quizes, [_key]: quiz(state.quizes[_key], action)}}
    default:
      return state;
  }
};

const initquizState = {
  title: null,
  isInvalidated: false,
  isMyQuiz: false,
  problems:{},
  currentProblem: 0,  
  isFetching: false,
 };

const quiz = (state=initquizState, action) => {
  switch (action.type) {
    case types.ADD_QUIZ:
      return state;
  	case types.PERMIT_EDIT:
  	  return { ...state, isMyQuiz: true}
    case types.SET_TITLE:
      return { ...state, title: action.payload.title};
    case types.INVALIDATE:
      return { ...state, isInvalidated: true}
    case types.ADD_PROBLEM:
      const _k = Object.keys(state.problems).length
      return { ...state, problems: { ...state.problems, [ _k ]: problem(undefined, action)}}    
    case types.REMOVE_PROBLEM:
      const _problems = { ...state.problems }
      delete _problems[action.payload.problem]
      return { ...state, problems: _problems }
    case types.SET_CURRENT_PROBLEM:
      return { ...state, currentProblem: action.payload.problem}
    case types.SET_QUESTION_TEXT:
    case types.SET_QUESTION_MEDIA:
    case types.ADD_CHOICE:
    case types.EDIT_CHOICE_TEXT:
    case types.EDIT_CHOICE_MEDIA:
    case types.REMOVE_CHOICE:
    case types.SET_CORRECT:
      const _key = action.payload.problem
      return { ...state, problems: { ...state.problems, [_key]: problem(state.problems[_key], action)}};
    default:
      return state;  
  }
}


const initProblemState = {
  question: null,
  choices: {},
  correct: null,
};

const problem = (state=initProblemState, action) => {
  switch(action.type) {
    case types.ADD_PROBLEM:
      return state;
    case types.SET_QUESTION_TEXT:
    case types.SET_QUESTION_MEDIA:
      return { ...state, question: question(state.question, action)};
    case types.ADD_CHOICE:
      const _k = Object.keys(state.choices).length 
      return { ...state, choices: { ...state.choices, [_k]: choice(undefined, action)}}
    case types.EDIT_CHOICE_TEXT:
    case types.SET_QUESTION_MEDIA:
      return { ...state, 
        choices: { 
          ...state.choices,
          [action.payload.choice]: choice(state.choices[action.payload.choice], action)}}
    case types.REMOVE_CHOICE:
    const _choices = { ...state.choices }
    delete _choices[action.payload.choice];
    return { ...state, choices: _choices};
    case types.SET_CORRECT:
      return { ...state, correct: action.payload.correctChoice}
    default:
      return state;  
  }
}

const initquestionState = {
	text: null,
	media: {},
}

const question = (state=initquestionState, action) => {
  switch (action.type) {
    case types.SET_QUESTION_TEXT:
      return { ...state, text: action.payload.questionText}
    default:
      return state;  
  }
}

const initChoiceState = {
  text: null,
  media: {},
}

const choice = (state=initChoiceState, action) => {
  switch (action.type) {
    case types.EDIT_CHOICE_TEXT:
      return { ...state, text: action.payload.choiceText}
    default:
      return state;  
  }
} 

export default quizReducer;

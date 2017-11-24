import {
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
} from '../../constants';

const initState = {
  isFetching: false,
  quizlist: {},
  quizes: {},
  currentQuiz: null,
 };

const quizReducer = (state = initState, action) => {
  switch (action.type) {
  	case REQUEST_QUIZES:
  	  return { ...state, isFetching: true };
    case RECEIVE_QUIZES:
      //tobe corrected as quizlist was changed to an object instead of an array.
      return { ...state, quizlist: [...state.quizlist, ...action.payload.quizlist], isFetching: false };
    case SELECT_QUIZ:
      return { ...state, currentQuiz: action.payload.quiz};
    case ADD_QUIZ:
      const _newQuiz = quiz(undefined, action);
      return { 
        ...state,
        quizes: { ...state.quizes,
          [action.payload.quiz]: { ..._newQuiz, ...action.payload.quizData }}};
    case SYNC_QUIZ:
      const newQuizes = { ...state.quizes, [action.payload.newQuizId]: state.quizes[action.payload.oldQuiId]};
      delete newQuizes[action.payload.oldQuiId]
      return { ...state, quizes: newQuizes }
    case SET_TITLE:
    case INVALIDATE:
    case PERMIT_EDIT:
    case ADD_PROBLEM:
    case REMOVE_PROBLEM:
    case SET_CURRENT_PROBLEM:
    case SET_QUESTION_TEXT:
    case SET_QUESTION_MEDIA:
    case ADD_CHOICE:
    case EDIT_CHOICE_TEXT:
    case EDIT_CHOICE_MEDIA:
    case REMOVE_CHOICE:
    case SET_CORRECT:
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
    case ADD_QUIZ:
      return state;
  	case PERMIT_EDIT:
  	  return { ...state, isMyQuiz: true}
    case SET_TITLE:
      return { ...state, title: action.payload.title};
    case INVALIDATE:
      return { ...state, isInvalidated: true}
    case ADD_PROBLEM:
      const _k = Object.keys(state.problems).length
      return { ...state, problems: { ...state.problems, [ _k ]: problem(undefined, action)}}    
    case REMOVE_PROBLEM:
      const _problems = { ...state.problems }
      delete _problems[action.payload.problem]
      return { ...state, problems: _problems }
    case SET_CURRENT_PROBLEM:
      return { ...state, currentProblem: action.payload.problem}
    case SET_QUESTION_TEXT:
    case SET_QUESTION_MEDIA:
    case ADD_CHOICE:
    case EDIT_CHOICE_TEXT:
    case EDIT_CHOICE_MEDIA:
    case REMOVE_CHOICE:
    case SET_CORRECT:
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
    case ADD_PROBLEM:
      return state;
    case SET_QUESTION_TEXT:
    case SET_QUESTION_MEDIA:
      return { ...state, question: question(state.question, action)};
    case ADD_CHOICE:
      const _k = Object.keys(state.choices).length 
      return { ...state, choices: { ...state.choices, [_k]: choice(undefined, action)}}
    case EDIT_CHOICE_TEXT:
    case SET_QUESTION_MEDIA:
      return { ...state, 
        choices: { 
          ...state.choices,
          [action.payload.choice]: choice(state.choices[action.payload.choice], action)}}
    case REMOVE_CHOICE:
    const _choices = { ...state.choices }
    delete _choices[action.payload.choice];
    return { ...state, choices: _choices};
    case SET_CORRECT:
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
    case SET_QUESTION_TEXT:
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
    case EDIT_CHOICE_TEXT:
      return { ...state, text: action.payload.choiceText}
    default:
      return state;  
  }
} 

export default quizReducer;

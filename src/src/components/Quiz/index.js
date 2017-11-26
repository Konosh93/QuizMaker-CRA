import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import {
  BrowserRouter as Router,
  withRouter,
  Route,
} from 'react-router-dom';
import style from './index.css';
import utils from './utils';
import QuizNavigation from '../QuizNavigation';
import QuizTaker from '../QuizTaker';
import QuizMaker from '../QuizMaker';
import QuizList from '../QuizList';
import * as actions from '../../actions';


const mapStateToProps = state => {
  const store = state.get('quiz')
  const quizlist = store ? store.quizlist : {};
  const currQuizId = store.currentQuiz || 'new-quiz';
  const quizes = store.quizes || {};
  const currQuiz = quizes[currQuizId] || {};
  const title = currQuiz.title || '';
  const problems = currQuiz.problems || {};
  const currProblemId = currQuiz.currentProblem || 0;
  const currProblem = problems[currProblemId] || {};
  const question = currProblem.question || {};
  const choices =  currProblem.choices || {};
  const correct = currProblem.correct || 'none';
  return {
    store,
    quizlist,
    currQuizId,
    quizes,
    currQuiz,
    title,
    problems,
    currProblemId,
    currProblem,
    question,
    choices,
    correct,
  }
}


const mapDispatchToProps = dispatch => (
  {
    requestQuizes: () => dispatch(actions.requestQuizes()),
    receiveQuizes: quizlist => dispatch(actions.receiveQuizes(quizlist)),
    selectQuiz: quiz => dispatch(actions.selectQuiz(quiz)),
    addQuiz: (quiz, data) => dispatch(actions.addQuiz(quiz, data)),
    submitQuiz: quiz => dispatch(actions.submitQuiz(quiz)),
    invalidate: quiz => dispatch(actions.invalidate(quiz)),
    permitEdit: quiz => dispatch(actions.permitEdit(quiz)),
    setTitle: (quiz, title) => dispatch(actions.setTitle(quiz, title)),
    addProblem: (quiz) => dispatch(actions.addProblem(quiz)),
    removeProblem: (quiz, problem) => dispatch(actions.removeProblem(quiz, problem)),
    setCurrentProblem: (quiz, problem) => dispatch(actions.setCurrentProblem(quiz, problem)),
    addChoice: (quiz, problem) => dispatch(actions.addChoice(quiz, problem)),
    removeChoice: (quiz, problem, choice) => dispatch(actions.removeChoice(quiz, problem, choice)),
    setCorrect: (quiz, problem, correctChoice) => dispatch(actions.setCorrect(quiz, problem, correctChoice)),
    setQuestionText: (quiz, problem, questionText) => dispatch(actions.setQuestionText(quiz, problem, questionText)),
    editChoiceText: (quiz, problem, choice, choiceText) => dispatch(actions.editChoiceText(quiz, problem, choice, choiceText)),
  }
);






const Quiz = props => {
  const quizMakerProps = {
    currQuizId: props.currQuizId ,
    currQuiz: props.currQuiz ,
    title: props.title ,
    problems: props.problems ,
    currProblemId: props.currProblemId ,
    currProblem: props.currProblem ,
    question: props.question ,
    choices: props.choices ,
    correct: props.correct ,
    selectQuiz: props.selectQuiz ,
    addQuiz: props.addQuiz ,
    submitQuiz: props.submitQuiz ,
    invalidate: props.invalidate ,
    setTitle: props.setTitle ,
    addProblem: props.addProblem ,
    removeProblem: props.removeProblem ,
    setCurrentProblem: props.setCurrentProblem ,
    addChoice: props.addChoice ,
    removeChoice: props.removeChoice ,
    setCorrect: props.setCorrect ,
    setQuestionText: props.setQuestionText ,
    editChoiceText: props.editChoiceText ,
  }

  const quizTakerProps = {
    currQuizId: props.currQuizId,
    currQuiz: props.currQuiz,
    title: props.title,
    currProblemId: props.currProblemId,
    question: props.question,
    choices: props.choices,
    correct: props.correct,
    selectQuiz: props.selectQuiz,
    submitQuiz: props.submitQuiz,
    setCurrentProblem: props.setCurrentProblem,
    setCorrect: props.setCorrect,
  }
  return (
      <div className="quiz">
        <QuizNavigation match={props.match}/>
          <QuizList selectQuiz={props.selectQuiz} quizes={props.quizes}/>
          <Route 
            exact path={`${props.match.url}/make`} 
            render={othoerProps => <QuizMaker { ...othoerProps} { ...quizMakerProps}/>}
          />
          <Route 
            exact path={`${props.match.url}/take`}
            render={otherProps => <QuizTaker { ...otherProps} { ...quizTakerProps} />}
          />
        </div>
  );
}

Quiz.propTypes = {
  store: propTypes.object.isRequired,
  quizlist: propTypes.object.isRequired,
  currQuizId: propTypes.string.isRequired,
  quizes: propTypes.object.isRequired,
  currQuiz: propTypes.object.isRequired,
  title: propTypes.string.isRequired,
  problems: propTypes.object.isRequired,
  currProblemId: propTypes.number.isRequired,
  currProblem: propTypes.object.isRequired,
  question: propTypes.object.isRequired,
  choices: propTypes.object.isRequired,
  correct: propTypes.string.isRequired,
  match: propTypes.object,
  requestQuizes: propTypes.func.isRequired,
  receiveQuizes: propTypes.func.isRequired,
  selectQuiz: propTypes.func.isRequired,
  addQuiz: propTypes.func.isRequired,
  submitQuiz: propTypes.func.isRequired,
  invalidate: propTypes.func.isRequired,
  permitEdit: propTypes.func.isRequired,
  setTitle: propTypes.func.isRequired,
  addProblem: propTypes.func.isRequired,
  removeProblem: propTypes.func.isRequired,
  setCurrentProblem: propTypes.func.isRequired,
  addChoice: propTypes.func.isRequired,
  removeChoice: propTypes.func.isRequired,
  setCorrect: propTypes.func.isRequired,
  setQuestionText: propTypes.func.isRequired,
  editChoiceText: propTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
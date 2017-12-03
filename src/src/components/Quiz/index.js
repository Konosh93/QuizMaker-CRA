import React from 'react';
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
import QuizDrafts from '../QuizDrafts';

const Quiz = props => {
  const quizMakerProps = {
    currentQuizId: props.currentQuizId ,
    currentQuiz: props.currentQuiz,
    title: props.title ,
    currentProblemId: props.currentProblemId ,
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
    setQuestion: props.setQuestion ,
    setChoice: props.setChoice ,
  }

  const quizTakerProps = {
    currentQuizId: props.currentQuizId,
    title: props.title,
    currentProblemId: props.currentProblemId,
    question: props.question,
    choices: props.choices,
    correct: props.correct,
    selectQuiz: props.selectQuiz,
    submitQuiz: props.submitQuiz,
    setCurrentProblem: props.setCurrentProblem,
    setCorrect: props.setCorrect,
  }
  const quizListProps = {
    selectQuiz: props.selectQuiz,
    quizes: props.quizes,
    fetchQuizes: props.fetchQuizes,
  }
  const quizDraftsProps = {
    selectQuiz: props.selectQuiz,
    addQuiz: props.addQuiz,
  }
  return (
      <div className="quiz">
        <QuizNavigation match={props.match}/>
          <Route 
            path={`${props.match.url}/list`} 
            render={othoerProps => <QuizList { ...othoerProps} { ...quizListProps}/>}
          />
          <Route 
            path={`${props.match.url}/make`} 
            render={othoerProps => <QuizMaker { ...othoerProps} { ...quizMakerProps}/>}
          />
          <Route 
            path={`${props.match.url}/take`}
            render={otherProps => <QuizTaker { ...otherProps} { ...quizTakerProps} />}
          />
          <Route 
            path={`${props.match.url}/drafts`}
            render={otherProps => <QuizDrafts { ...otherProps} { ...quizDraftsProps} />}
          />
        </div>
  );
}

Quiz.propTypes = {
  currentQuizId: propTypes.string,
  currentQuiz: propTypes.object,
  quizes: propTypes.object,
  title: propTypes.string,
  currentProblemId: propTypes.number,
  question: propTypes.object,
  choices: propTypes.object,
  correct: propTypes.string,
  match: propTypes.object,
  requestQuizes: propTypes.func.isRequired,
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
  setQuestion: propTypes.func.isRequired,
  setChoice: propTypes.func.isRequired,
};
export default Quiz;
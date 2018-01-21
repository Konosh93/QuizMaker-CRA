import React from 'react';
import propTypes from 'prop-types';
import {
  BrowserRouter as Router,
  withRouter,
  Route,
  Switch,
} from 'react-router-dom';
import style from './index.css';
import utils from './utils';
import QuizNavigation from '../QuizNavigation';
import QuizTaker from '../QuizTaker';
import QuizMaker from '../QuizMaker';
import QuizList from '../QuizList';
import QuizDrafts from '../QuizDrafts';
import Positioner from '../Positioner';
import QuizResult from '../QuizResult';

const Quiz = props => {
  const quizMakerProps = {
    quiz: props.quiz,
    title: props.title ,
    currentProblemId: props.currentProblemId ,
    question: props.question ,
    choices: props.choices ,
    correct: props.correct ,
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
    fetchOneQuiz: props.fetchOneQuiz,
    quiz: props.quiz,
    title: props.title,
    currentProblemId: props.currentProblemId,
    question: props.question,
    choices: props.choices,
    correct: props.correct,
    selectQuiz: props.selectQuiz,
    submitAnswers: props.submitAnswers,
    setCurrentProblem: props.setCurrentProblem,
    setCorrect: props.setCorrect,
    history: props.history,
  }
  const quizListProps = {
    selectQuiz: props.selectQuiz,
    quizList: props.quizList,
    fetchQuizes: props.fetchQuizes,
    fetchMyQuizes: props.fetchMyQuizes,
  }
  const quizDraftsProps = {
    addQuiz: props.addQuiz,
  }
  const quizResultProps = {
    quiz: props.quiz,
    score: props.score,
  }
  const { width, height } = props;
  return (
      <div className="quiz">
        <div className="quiz__intro">
          <div className="quiz__intro__image"><img src={require('../../assets/logo.png')} className="quiz__intro__logo" /></div>
          <div className="quiz__intro__text">You can use quiz-survey to create great looking quizes and surveys</div>
        </div>
        <div className="quiz__body">
            <Switch>
              <Route 
                path={`${props.match.url}/list`} 
                render={otherProps => <QuizList { ...otherProps} { ...quizListProps}/>}
              />
              <Route 
                path={`${props.match.url}/make`} 
                render={otherProps => <QuizMaker { ...otherProps} { ...quizMakerProps}/>}
              />
              <Route 
                path={`${props.match.url}/take/:slug`}
                render={otherProps => <QuizTaker { ...otherProps} { ...quizTakerProps} />}
              />
              <Route 
                path={`${props.match.url}/drafts`}
                render={otherProps => <QuizDrafts { ...otherProps} { ...quizDraftsProps} />}
              />
              <Route 
                path={`${props.match.url}/result`}
                render={otherProps => <QuizResult { ...otherProps} { ...quizResultProps} />}
              />             
            </Switch>
  
          </div>
        </div>
  );
}

Quiz.propTypes = {
  quiz: propTypes.object,
  quizList: propTypes.arrayOf(propTypes.object),
  score: propTypes.number,
  title: propTypes.string,
  currentProblemId: propTypes.number,
  question: propTypes.object,
  choices: propTypes.object,
  correct: propTypes.string,
  match: propTypes.object.isRequired,
  history: propTypes.object.isRequired,
  requestQuizes: propTypes.func.isRequired,
  fetchQuizes: propTypes.func.isRequired, 
  fetchMyQuizes: propTypes.func.isRequired, 
  fetchOneQuiz: propTypes.func.isRequired, 
  addQuiz: propTypes.func.isRequired,
  submitQuiz: propTypes.func.isRequired,
  submitAnswers: propTypes.func.isRequired,
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
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
};
export default Quiz;
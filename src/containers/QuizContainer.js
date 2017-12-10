import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Quiz from '../components/Quiz';
import * as actions from '../actions';


const mapStateToProps = state => {
  const { width, height } = state.get('device');
  const quizReducer = state.get('quizes')
  const { quiz, quizList, score } = quizReducer || {};
  const { title, problems, currentProblemId } = quiz || {};
  const currentProblem = problems ? problems[currentProblemId] : null;
  const { question, choices, correct } = currentProblem || {};
  return {
    quiz,
    quizList,
    score,
    title,
    currentProblemId,
    question,
    choices,
    correct,
    width,
    height,
  }
}

const mapDispatchToProps = dispatch => (
  {
    requestQuizes: () => dispatch(actions.requestQuizes()),
    fetchQuizes: () => dispatch(actions.fetchQuizes()),
    fetchMyQuizes: () => dispatch(actions.fetchMyQuizes()),
    fetchOneQuiz: slug => dispatch(actions.fetchOneQuiz(slug)),    
    addQuizList: quizList => dispatch(actions.addQuizList(quizList)),
    addQuiz: quiz => dispatch(actions.addQuiz(quiz)),
    submitQuiz: quiz => dispatch(actions.submitQuiz(quiz)),
    submitAnswers: quiz => dispatch(actions.submitAnswers(quiz)),
    invalidate: () => dispatch(actions.invalidate()),
    permitEdit: () => dispatch(actions.permitEdit()),
    setTitle: title => dispatch(actions.setTitle(title)),
    addProblem: () => dispatch(actions.addProblem()),
    removeProblem: () => dispatch(actions.removeProblem()),
    setCurrentProblem: (problem) => dispatch(actions.setCurrentProblem(problem)),
    addChoice: () => dispatch(actions.addChoice()),
    removeChoice: choice => dispatch(actions.removeChoice(choice)),
    setCorrect: (correctChoice) => dispatch(actions.setCorrect(correctChoice)),
    setQuestion: (questionState) => dispatch(actions.setQuestion(questionState)),
    setChoice: (choice, choiceText) => dispatch(actions.setChoice(choice, choiceText)),
  }
);

const QuizContainer = props => <Quiz { ...props } />

QuizContainer.propTypes = {
  quiz: propTypes.object,
  quizlist: propTypes.arrayOf(propTypes.object),
  score: propTypes.number,
  title: propTypes.string,
  currentProblemId: propTypes.number,
  question: propTypes.object,
  choices: propTypes.object,
  correct: propTypes.string,
  match: propTypes.object,
  requestQuizes: propTypes.func.isRequired,
  fetchQuizes: propTypes.func.isRequired, 
  fetchMyQuizes: propTypes.func.isRequired, 
  fetchOneQuiz: propTypes.func.isRequired, 
  addQuiz: propTypes.func.isRequired,
  addQuizList: propTypes.func.isRequired,
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
export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer);
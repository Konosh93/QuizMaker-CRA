import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Quiz from '../components/Quiz';
import * as actions from '../actions';


const mapStateToProps = state => {
  const { width, height } = state.get('device');
  const quiz = state.get('quiz')
  const { currentQuizId, quizes } = quiz || {};
  const currentQuiz = (quizes && currentQuizId) ? quizes[currentQuizId] : null;
  const { title, problems, currentProblemId } = currentQuiz || {};
  const currentProblem = problems ? problems[currentProblemId] : null;
  const { question, choices, correct } = currentProblem || {};
  return {
    currentQuizId,
    currentQuiz,
    quizes,
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
    selectQuiz: quiz => dispatch(actions.selectQuiz(quiz)),
    addQuiz: (quiz, data) => dispatch(actions.addQuiz(quiz, data)),
    submitQuiz: quiz => dispatch(actions.submitQuiz(quiz)),
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
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(QuizContainer);
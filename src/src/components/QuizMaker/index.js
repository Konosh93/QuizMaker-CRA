import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import style from './index.css';
import QuizTitleForm from '../QuizTitleForm';
import Problem from '../Problem';
import Button from '../Button';
import * as actions from '../../actions';
import * as utils from '../../utils';

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

class QuizMaker extends React.Component {
  constructor() {
    super();
    this.submitQuiz = this.submitQuiz.bind(this);
    this.addChoice = this.addChoice.bind(this);
    this.removeChoice = this.removeChoice.bind(this);
    this.editChoiceText = this.editChoiceText.bind(this);
    this.setCorrect = this.setCorrect.bind(this);
    this.setQuestionText = this.setQuestionText.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.moveToNextProblem = this.moveToNextProblem.bind(this);
    this.moveToPreviousProblem = this.moveToPreviousProblem.bind(this);
  }

  componentWillMount(){
    if (!this.props.currQuiz) {
      this.props.addQuiz('new-quiz', {title: ''})
    }
    this.props.selectQuiz('new-quiz');
  }

  componentWillReceiveProps() {
    
  }

  submitQuiz(e) {
    e.preventDefault();
    console.log(this.props.currQuiz)
    const transformedQuiz = utils.quizTransformer({ [this.props.currQuizId]: this.props.currQuiz});
    this.props.submitQuiz({ [this.props.currQuizId]: transformedQuiz})
  }

  setTitle(e) {
    e.preventDefault();
    this.props.setTitle(this.props.currQuizId, e.target.value)
  }

  setCorrect(e, c, t) {
    e.preventDefault();
    if (!t) return;
    this.props.setCorrect(this.props.currQuizId, this.props.currProblemId, c);
  }

  addChoice(e) {
    e.preventDefault();
    this.props.addChoice(this.props.currQuizId, this.props.currProblemId);
  }

  removeChoice(e, c) {
    e.preventDefault();
    this.props.removeChoice(this.props.currQuizId, this.props.currProblemId, c)
  }
  
  editChoiceText(e, c) {
    e.preventDefault();
    this.props.editChoiceText(this.props.currQuizId, this.props.currProblemId, c, e.target.value);
  }

  setQuestionText(e) {
    e.preventDefault();
    this.props.setQuestionText(this.props.currQuizId, this.props.currProblemId, e.target.value);
  }

  moveToNextProblem(e) {
    e.preventDefault();
    if (!this.props.question.text || this.props.question.text === '') return;
    this.props.addProblem(this.props.currQuizId);
    this.props.setCurrentProblem(this.props.currQuizId, this.props.currProblemId+1);
  }

  moveToPreviousProblem(e) {
    e.preventDefault();
    if (this.props.currProblemId === 0) return;
    this.props.setCurrentProblem(this.props.currQuizId, this.props.currProblemId - 1);
  }

  render() {
    return (
      <div className="quiz-maker">
        <div className="quiz-maker__title">
          <QuizTitleForm
            setTitle={this.setTitle}
            title={this.props.title || ''}
          />
        </div>
        <div className="quiz-maker__problem">
          <Problem 
            setCorrect={this.setCorrect}
            editChoiceText={this.editChoiceText}
            setQuestionText={this.setQuestionText}
            addChoice={this.addChoice}
            removeChoice={this.removeChoice}
            moveToNextProblem={this.moveToNextProblem} 
            moveToPreviousProblem={this.moveToPreviousProblem} 
            no={this.props.currProblemId + 1}
            question={this.props.question}
            choices={this.props.choices}
            correct={this.props.correct}

            />
        </div>
        <div className="quiz-maker__submit">
          <Button text="Submit quiz" handleClick={this.submitQuiz} />
        </div>
      </div>
    );
  }
}

QuizMaker.propTypes = {
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
export default connect(mapStateToProps, mapDispatchToProps)(QuizMaker);

import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import style from './index.css';
import QuizTitleForm from '../QuizTitleForm';
import Problem from '../Problem';
import Button from '../Button';
import * as actions from '../../actions';
import * as utils from '../../utils';

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
    const transformedQuiz = utils.quizTransformer({ [this.props.currQuizId]: this.props.currQuiz});
    this.props.submitQuiz(transformedQuiz)
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
        <Button
          handleClick={this.submitQuiz}
          className="quiz-maker__button-submit"
        >Submit Quiz
        </Button>
        </div>
    );
  }
}

QuizMaker.propTypes = {
  currQuizId: propTypes.string.isRequired,
  currQuiz: propTypes.object.isRequired,
  title: propTypes.string.isRequired,
  currProblemId: propTypes.number.isRequired,
  question: propTypes.object.isRequired,
  choices: propTypes.object.isRequired,
  correct: propTypes.string.isRequired,
  selectQuiz: propTypes.func.isRequired,
  submitQuiz: propTypes.func.isRequired,
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
export default QuizMaker;

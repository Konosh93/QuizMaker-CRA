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
    this.setChoice = this.setChoice.bind(this);
    this.setCorrect = this.setCorrect.bind(this);
    this.setQuestion = this.setQuestion.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.moveToNextProblem = this.moveToNextProblem.bind(this);
    this.moveToPreviousProblem = this.moveToPreviousProblem.bind(this);
    this.initiateQuiz = this.initiateQuiz.bind(this);
  }

  componentWillMount(){
  }

  componentWillReceiveProps() {
    
  }

  submitQuiz(e) {
    e.preventDefault();
    if (!this.props.currentQuiz) return;
    this.props.submitQuiz({ ...this.props.currentQuiz, _id: this.props.currentQuizId});
  }

  setTitle(e) {
    e.preventDefault();
    this.props.setTitle(e.target.value)
  }

  setCorrect(e, c) {
    e.preventDefault();
    this.props.setCorrect(c);
  }

  addChoice(e) {
    e.preventDefault();
    this.props.addChoice();
  }

  removeChoice(e, c) {
    e.preventDefault();
    this.props.removeChoice(c)
  }
  
  setChoice(c, editorState) {
    this.props.setChoice(c, editorState);
  }

  setQuestion(editorState) {
    this.props.setQuestion(editorState);
  }

  moveToNextProblem(e) {
    e.preventDefault();
    this.props.addProblem(this.props.currentQuizId);
    this.props.setCurrentProblem(this.props.currentProblemId+1);
  }

  moveToPreviousProblem(e) {
    e.preventDefault();
    if (this.props.currentProblemId === 0) return;
    this.props.setCurrentProblem(this.props.currentProblemId - 1);
  }

  initiateQuiz () {
    this.props.addQuiz('new-quiz', {title: ''});
    this.props.selectQuiz('new-quiz');
    this.props.addProblem('new-quiz');
  }

  render() {
    const { question, choices } = this.props;
    if (!question) {
      return (
          <Button className="" handleClick={this.initiateQuiz}>
            Make new Quiz
          </Button>
      );
    } 
    return (
      <div className="quiz-maker">
        <Button className="" handleClick={this.initiateQuiz}>
          Make new Quiz
        </Button>
        <div className="quiz-maker__title">
          <QuizTitleForm
            setTitle={this.setTitle}
            title={this.props.title || ''}
          />
        </div>
        <div className="quiz-maker__problem">
          <Problem 
            setCorrect={this.setCorrect}
            setChoice={this.setChoice}
            setQuestion={this.setQuestion}
            addChoice={this.addChoice}
            removeChoice={this.removeChoice}
            moveToNextProblem={this.moveToNextProblem} 
            moveToPreviousProblem={this.moveToPreviousProblem} 
            no={this.props.currentProblemId + 1}
            question={question}
            choices={choices}
            correct={this.props.correct}

            />
        </div>
        <Button
          handleClick={this.submitQuiz}
          className="quiz-maker__button submit"
        >Submit Quiz
        </Button>
        </div>
    );
  }
}

QuizMaker.propTypes = {
  currentQuizId: propTypes.string,
  currentQuiz: propTypes.object,
  title: propTypes.string,
  currentProblemId: propTypes.number,
  question: propTypes.object,
  choices: propTypes.object,
  correct: propTypes.string,
  selectQuiz: propTypes.func.isRequired,
  submitQuiz: propTypes.func.isRequired,
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
export default QuizMaker;

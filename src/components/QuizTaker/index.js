import React from 'react';
import propTypes from 'prop-types';
import style from './index.css';
import QuizTakerChoices from '../QuizTakerChoices';
import { Link } from 'react-router-dom';
import ProblemNav from '../ProblemNav';
import Button from '../Button';
import TextDisplay from '../TextDisplay';
import * as actions from '../../actions';
import * as utils from '../../utils';

class QuizTaker extends React.Component {
  constructor() {
    super();
    this.submitAnswers = this.submitAnswers.bind(this);
    this.setCorrect = this.setCorrect.bind(this);
    this.moveToNextProblem = this.moveToNextProblem.bind(this);
    this.moveToPreviousProblem = this.moveToPreviousProblem.bind(this);
  }

  componentWillMount(){
    const { match, fetchOneQuiz } = this.props;
    const { params } = match;
    const { slug } = params;
    fetchOneQuiz(slug);console.log(slug);
  }

  componentWillReceiveProps() {
    
  }

  submitAnswers(e) {
    e.preventDefault();
    const { submitAnswers, quiz, history } = this.props;
    submitAnswers({ ...quiz});
    history.push('/quiz/result')
  }


  setCorrect(e, c, t) {
    e.preventDefault();
    if (!t) return;
    this.props.setCorrect(c);
    setTimeout(() => this.moveToNextProblem(e), 1000);
  }


  moveToNextProblem(e) {
    e.preventDefault();
    const { quiz, currentProblemId } = this.props;
    if (!quiz.problems[currentProblemId + 1]) return;
    this.props.setCurrentProblem(this.props.currentProblemId + 1);
  }

  moveToPreviousProblem(e) {
    e.preventDefault();
    this.props.setCurrentProblem(this.props.currentProblemId - 1);
  }
  render() {
    const {
      title,
      currentProblemId,
      question,
      choices,
      correct,
    } = this.props;
    if (!question) {
      return null;
    }
    return (
      <div className="quiz-taker">
        <div className="quiz-taker__title">{title}</div>
        <div className="quiz-taker__body">
          <div className="quiz-taker__problems-count">{currentProblemId+1}</div>
          <TextDisplay className="quiz-taker__question"
            editorState={question}
          />
          <QuizTakerChoices 
            className="quiz-taker__choices"
            choices={choices}
            setCorrect={this.setCorrect}
            correct={correct}
          />
          <ProblemNav 
            className="quiz-taker__navigation"
            moveToNext={this.moveToNextProblem}
            moveToPrevious={this.moveToPreviousProblem}
          />
        </div>
        <Button 
          className="quiz-taker__button submit"
          handleClick={this.submitAnswers}
        >Submit
        </Button>
      </div>
    );  	
  }

}

QuizTaker.propTypes = {
  quiz: propTypes.object,
  title: propTypes.string,
  currentProblemId: propTypes.number,
  question: propTypes.object,
  choices: propTypes.object,
  correct: propTypes.string,
  fetchOneQuiz: propTypes.func.isRequired,
  submitAnswers: propTypes.func.isRequired,
  setCurrentProblem: propTypes.func.isRequired,
  setCorrect: propTypes.func.isRequired,
};
export default QuizTaker;

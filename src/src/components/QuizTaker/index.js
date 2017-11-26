import React from 'react';
import propTypes from 'prop-types';
import style from './index.css';
import QuizTakerChoices from '../QuizTakerChoices';
import ProblemNav from '../ProblemNav';
import Button from '../Button';
import * as actions from '../../actions';
import * as utils from '../../utils';

class QuizTaker extends React.Component {
  constructor() {
    super();
    this.submitQuiz = this.submitQuiz.bind(this);
    this.setCorrect = this.setCorrect.bind(this);
    this.moveToNextProblem = this.moveToNextProblem.bind(this);
    this.moveToPreviousProblem = this.moveToPreviousProblem.bind(this);
  }

  componentWillMount(){
    if (!this.props.currQuiz) {
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


  setCorrect(e, c, t) {
    e.preventDefault();
    if (!t) return;
    this.props.setCorrect(this.props.currQuizId, this.props.currProblemId, c);
  }


  moveToNextProblem(e) {
    e.preventDefault();
    this.props.setCurrentProblem(this.props.currQuizId, this.props.currProblemId+1);
  }

  moveToPreviousProblem(e) {
    e.preventDefault();
    this.props.setCurrentProblem(this.props.currQuizId, this.props.currProblemId - 1);
  }
  render() {
    return (
        <div className="quiz-taker">
        <div className="quiz-taker__title">{this.props.title}</div>
        <div className="quiz-taker__body">
          <div className="quiz-taker__problem">
            <div className="quiz-taker__problems-count">{this.props.currentProblem}</div>
            <div className="quiz-taker__question">{this.props.question.text}</div>
            <QuizTakerChoices 
              className="quiz-taker__choices"
              choices={this.props.choices}
              setCorrect={this.setCorrect}
              correct={this.props.correct}
            />
          </div>
          <ProblemNav 
            className="quiz-taker__navigation"
            moveToNext={this.moveToNextProblem}
            moveToPrevious={this.moveToPreviousProblem}
          />
      </div>
        <Button 
          className="quiz-taker__submit"
          handleClick={e => e.preventDefault()}
        >{"Submit"}</Button>
      </div>
    );  	
  }

}

QuizTaker.propTypes = {
  currQuizId: propTypes.string.isRequired,
  currQuiz: propTypes.object.isRequired,
  title: propTypes.string.isRequired,
  currProblemId: propTypes.number.isRequired,
  question: propTypes.object.isRequired,
  choices: propTypes.object.isRequired,
  correct: propTypes.string.isRequired,
  selectQuiz: propTypes.func.isRequired,
  submitQuiz: propTypes.func.isRequired,
  setCurrentProblem: propTypes.func.isRequired,
  setCorrect: propTypes.func.isRequired,
};
export default QuizTaker;

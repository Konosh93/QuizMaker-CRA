import React from 'react';
import propTypes from 'prop-types';
import style from './index.css';
import ProblemForm from '../ProblemForm';
import ProblemNav from '../ProblemNav';

const Problem = ({
  setCorrect,
  addChoice,
  removeChoice,
  setQuestionText,
  editChoiceText,
  no,
  question,
  choices,
  correct,
  moveToNextProblem,
  moveToPreviousProblem,
}) => {
  return (
    <div className="problem">
    Problem no {no}
      <ProblemForm
        setCorrect={setCorrect}
        setQuestionText={setQuestionText}
        editChoiceText={editChoiceText}
        addChoice={addChoice}
        removeChoice={removeChoice}
        question={question}
        choices={choices}
        correct={correct}
      />
      <ProblemNav 
        className="problem__nav"
        moveToNext={moveToNextProblem}
        moveToPrevious={moveToPreviousProblem}
      />
    </div>
  );
}


Problem.propTypes = {
  setCorrect: propTypes.func.isRequired,
  addChoice: propTypes.func.isRequired,
  removeChoice: propTypes.func.isRequired,
  setQuestionText: propTypes.func.isRequired,
  editChoiceText: propTypes.func.isRequired,
  moveToNextProblem: propTypes.func.isRequired,
  moveToPreviousProblem: propTypes.func.isRequired,
  no: propTypes.number.isRequired,
  question: propTypes.object.isRequired,
  choices: propTypes.object.isRequired,
  correct: propTypes.string.isRequired,
};
export default Problem;

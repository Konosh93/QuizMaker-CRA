import React from 'react';
import propTypes from 'prop-types';
import style from './index.css';
import ProblemForm from '../ProblemForm';
import Button from '../Button';

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
      <div className="problem__nav">
        <div className="problem__nav__previous">
          <Button
            text="Previous Problem"
            handleClick={moveToPreviousProblem}
          />
        </div>
        <div className="problem__nav__next">
          <Button
            text=" Next Problem"
            handleClick={moveToNextProblem}
          />
        </div>
      </div>
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

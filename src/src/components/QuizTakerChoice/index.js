import React from 'react';
import propTypes from 'prop-types';
import TextInput from '../TextInput';
import RadioButton from '../RadioButton';
import style from './index.css';

const QuizTakerChoice = ({
  setCorrect,
  answer,
  correct,
}) => {
  let selected = false;
  if (correct === answer.id && answer.text) {
    selected = true;
  } 
  return (
    <div className="choice">
      <div className="choice__radio">
        <RadioButton handleClick={(e) => { setCorrect(e, answer.id, answer.text); }} selected={selected} />
      </div>
      <div className="choice__answer">
        {answer.text}
      </div>
    </div>
  );
};

QuizTakerChoice.propTypes = {
  answer: propTypes.object.isRequired,
  correct: propTypes.string.isRequired,
  setCorrect: propTypes.func.isRequired,
};

export default QuizTakerChoice;

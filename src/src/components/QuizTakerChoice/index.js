import React from 'react';
import propTypes from 'prop-types';
import TextDisplay from '../TextDisplay';
import RadioButton from '../RadioButton';
import style from './index.css';

const QuizTakerChoice = ({
  setCorrect,
  answer,
  correct,
}) => {
  let selected = false;
  if (correct === answer.id) {
    selected = true;
  } 
  return (
    <div className="quiz-taker-choice">
      <div className="quiz-taker-choice__radio">
        <RadioButton handleClick={(e) => { setCorrect(e, answer.id, answer.choice); }} selected={selected} />
      </div>
      <div className="quiz-taker-choice__answer">
        <TextDisplay
          editorState={answer.choice}
        />
      </div>
    </div>
  );
};

QuizTakerChoice.propTypes = {
  answer: propTypes.object,
  correct: propTypes.string,
  setCorrect: propTypes.func.isRequired,
};

export default QuizTakerChoice;

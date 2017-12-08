import React from 'react';
import propTypes from 'prop-types';
import TextDisplay from '../TextDisplay';
import Button from '../Button';
import style from './index.css';

const QuizTakerChoice = ({
  setCorrect,
  answer,
  correct,
}) => {
  let selected = null;
  if (correct === answer.id) {
    selected = 'quiz-taker-choice--selected';
  } 
  return (
    <Button 
      className="quiz-taker-choice__button"
      handleClick={(e) => setCorrect(e, answer.id, answer.choice)}
    >
        <TextDisplay
          className={`${selected}`} 
          editorState={answer.choice}
        />
    </Button>
  );
};

QuizTakerChoice.propTypes = {
  answer: propTypes.object,
  correct: propTypes.string,
  setCorrect: propTypes.func.isRequired,
};

export default QuizTakerChoice;

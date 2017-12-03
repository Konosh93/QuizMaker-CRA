import React from 'react';
import propTypes from 'prop-types';
import QuizTakerChoice from '../QuizTakerChoice';
import style from './index.css';


const QuizTakerChoices = ({
  setCorrect,
  choices,
  correct,
  className,
}) => {
  const keys = choices ? Object.keys(choices) : null;
  const choiceElements = keys ? keys.map(k => (
    <div key={k} className={`choices__choice ${className}`}>
      <QuizTakerChoice
        setCorrect={setCorrect}
        answer={{id: k, choice: choices[k].choice}}
        correct={correct}
      />
    </div>
  )) : null;
  return (
    <div className="choices">
      { choiceElements }
    </div>
  );
};

QuizTakerChoices.propTypes = {

  setCorrect: propTypes.func.isRequired,
  choices: propTypes.object,
  correct: propTypes.string,
  className: propTypes.string,
};

export default QuizTakerChoices;

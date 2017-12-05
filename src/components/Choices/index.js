import React from 'react';
import propTypes from 'prop-types';
import Choice from '../Choice';
import style from './index.css';


const Choices = ({
  setCorrect,
  removeChoice,
  choices,
  correct,
  setChoice,
  className,
}) => {
  const keys = choices ? Object.keys(choices) : null;
  const choiceElements = keys ? keys.map(k => (
    <div key={k} className="choices__choice">
      <Choice
        setCorrect={setCorrect}
        answer={{id: k, choice: choices[k].choice}}
        correct={correct}
        setChoice={setChoice}
        removeChoice={removeChoice}
      />
    </div>
  )) : null;
  return (
    <div className={`choices ${className}`}>
      { choiceElements }

    </div>
  );
};

Choices.propTypes = {

  setCorrect: propTypes.func.isRequired,
  removeChoice: propTypes.func.isRequired,
  choices: propTypes.object,
  correct: propTypes.string,
  setChoice: propTypes.func.isRequired,
};

export default Choices;

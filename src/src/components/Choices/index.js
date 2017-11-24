import React from 'react';
import propTypes from 'prop-types';
import Choice from '../Choice';
import style from './index.css';


const Choices = ({
  setCorrect,
  addChoice,
  removeChoice,
  choices,
  correct,
  editChoiceText,
}) => {
  const keys = choices ? Object.keys(choices) : null;
  const choiceElements = keys ? keys.map(k => (
    <div key={k} className="choices__choice">
      <Choice
        setCorrect={setCorrect}
        answer={{id: k, text: choices[k].text}}
        correct={correct}
        editChoiceText={editChoiceText}
        removeChoice={removeChoice}
      />
    </div>
  )) : null;
  return (
    <div className="choices">
      { choiceElements }
      <div style={{ width:'60px', height: '40px', backgroundColor: 'red'}} onClick={addChoice}>Add Choice</div>
    </div>
  );
};

Choices.propTypes = {

  setCorrect: propTypes.func.isRequired,
  addChoice: propTypes.func.isRequired,
  removeChoice: propTypes.func.isRequired,
  choices: propTypes.object.isRequired,
  correct: propTypes.string.isRequired,
  editChoiceText: propTypes.func.isRequired,
};

export default Choices;

import React from 'react';
import propTypes from 'prop-types';
import TextInput from '../TextInput';
import RadioButton from '../RadioButton';
import style from './index.css';

const Choice = ({
  setCorrect,
  answer,
  correct,
  editChoiceText,
  removeChoice,
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
        <TextInput
          type="text"
          name={answer.id}
          value={answer.text || ''}
          placeholder="Enter answer here ..."
          handleChange={(e)=> {editChoiceText(e, answer.id)}}
        />
      </div>
      <div className="choice__delete" onClick={(e) => {removeChoice(e, answer.id)}}>Delete</div>
    </div>
  );
};

Choice.propTypes = {
  answer: propTypes.object.isRequired,
  correct: propTypes.string.isRequired,
  setCorrect: propTypes.func.isRequired,
  editChoiceText: propTypes.func.isRequired,
  removeChoice: propTypes.func.isRequired,
};

export default Choice;

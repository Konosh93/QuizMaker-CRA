import React from 'react';
import propTypes from 'prop-types';
import TextInput from '../TextInput';
import RadioButton from '../RadioButton';
import Popover from '../Popover';
import ChoicePopoverTrigger from '../ChoicePopoverTrigger';
import ChoicePopoverPanel from '../ChoicePopoverPanel';
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
      <div className="choice__answer">
        <TextInput
          type="text"
          name={answer.id}
          value={answer.text || ''}
          placeholder="Enter answer here ..."
          handleChange={(e)=> {editChoiceText(e, answer.id)}}
        />
      </div>
      <Popover className="choice__popover">
        <ChoicePopoverTrigger className="choice__choice-popover-trigger"/>
        <ChoicePopoverPanel 
          className="choice__choice-popover-panel"
          removeChoice={removeChoice}
          setCorrect={setCorrect}
          answer={answer}
        />
      </Popover>
      
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

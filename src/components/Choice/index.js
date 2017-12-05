import React from 'react';
import propTypes from 'prop-types';
import TextEditor from '../TextEditor';
import RadioButton from '../RadioButton';
import Popover from '../Popover';
import ChoicePopoverTrigger from '../ChoicePopoverTrigger';
import ChoicePopoverPanel from '../ChoicePopoverPanel';
import style from './index.css';

const Choice = ({
  setCorrect,
  answer,
  correct,
  setChoice,
  removeChoice,
}) => {
  let selected = null;
  if (correct === answer.id && answer.choice) {
    selected = 'choice__answer--right-answer';
  } 
  if (!answer.choice) {
    return null;
  }
  return (
    <div className="choice">
      <div className={`choice__answer ${selected}`}>
        <TextEditor
          editorState={answer.choice}
          placeHolder={'Enter a choice ...'}
          onChange={editorState => setChoice(answer.id, editorState)}
        />
      </div>
      <Popover className="choice__popover">
        <ChoicePopoverTrigger className="choice__choice-popover-trigger"/>
        <ChoicePopoverPanel 
          className="choice__choice-popover-panel"
          removeChoice={removeChoice}
          setCorrect={setCorrect}
          choiceId={answer.id}
        />
      </Popover>
      
    </div>
  );
};

Choice.propTypes = {
  answer: propTypes.object,
  correct: propTypes.string,
  setCorrect: propTypes.func.isRequired,
  setChoice: propTypes.func.isRequired,
  removeChoice: propTypes.func.isRequired,
};

export default Choice;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './index.css';
import Button from '../Button';

const ChoicPopoverPanel = ({
  className,
  removeChoice,
  choiceId,
  setCorrect,
}) => (
  <div className={`choice-popover-panel ${className}`} >
    <Button  className="choice-popover-panel__button" handleClick={(e) => removeChoice(e, choiceId)}>
      <i className="fa fa-times" /> Delete
    </Button>
    <Button 
      className="choice-popover-panel__button choice-popover-panel__button--set-correct"  
      handleClick={(e) => setCorrect(e, choiceId)}>
        <i className="fa fa-check" /> Set Correct
    </Button>
  </div>
);

ChoicPopoverPanel.propTypes = {
  setCorrect: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  choiceId: PropTypes.string.isRequired,
  removeChoice: PropTypes.func.isRequired,
};

export default ChoicPopoverPanel;
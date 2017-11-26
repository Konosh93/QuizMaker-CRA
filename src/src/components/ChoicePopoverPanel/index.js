import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './index.css';
import Button from '../Button';

const ChoicPopoverPanel = ({
  className,
  removeChoice,
  answer,
  setCorrect,
}) => (
  <div className={`choice-popover-panel ${className}`} >
    <Button  className="choice-popover-panel__button" handleClick={(e) => removeChoice(e, answer.id)}>
      <i className="fa fa-times" /> Delete
    </Button>
    <Button role="button"
      className="choice-popover-panel__button choice-popover-panel__button--set-correct"  
      handleClick={(e) => setCorrect(e, answer.text, answer.id)}>
        <i className="fa fa-check" /> Set Correct
    </Button>
  </div>
);

ChoicPopoverPanel.propTypes = {
  setCorrect: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  answer: PropTypes.object.isRequired,
  removeChoice: PropTypes.func.isRequired,
};

export default ChoicPopoverPanel;
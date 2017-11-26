import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './index.css';
import Button from '../Button';


const propTypes = {
  className: PropTypes.string.isRequired,
};


const ChoicePopoverTrigger = ({
  className,
}) => <Button 
        className={`choice-popover-trigger ${className}`}
        handleClick={(e) => e.preventDefault()}
      >
        <i className="fa fa-bars" aria-hidden="true" />
      </Button>

ChoicePopoverTrigger.propTypes = propTypes;

export default ChoicePopoverTrigger;
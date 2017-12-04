import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './index.css';
import Button from '../Button';


const propTypes = {
  className: PropTypes.string.isRequired,
};


const NavQuizPopoverTrigger = ({
  className,
}) => <Button 
        className={`choice-popover-trigger__button ${className}`}
        handleClick={(e) => e.preventDefault()}
      >
        <i className="fa fa-university fa-2x" aria-hidden="true"/>
      </Button>

NavQuizPopoverTrigger.propTypes = propTypes;

export default NavQuizPopoverTrigger;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './index.css';
import Button from '../Button';

const NavQuizPopoverPanel = ({
  className,children 
}) => (
  <div className={`nav-quiz-popover-panel ${className}`}>
    {children}
  </div>
);

NavQuizPopoverPanel.propTypes = {
  className: PropTypes.string.isRequired,
};

export default NavQuizPopoverPanel;
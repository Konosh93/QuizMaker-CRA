import React from 'react';
import propTypes from 'prop-types';
import style from './index.css';


const Button = props => {
  const {
    handleClick,
    children,
    className,
    role,
  } = props;

  return (
    <div className={`button ${className}`} onClick={handleClick} role={role || 'button'}>
      { children }
    </div>
  );
};

Button.propTypes = {
  handleClick: propTypes.func.isRequired,
  children: propTypes.node,
  className: propTypes.string.isRequired,
  role: propTypes.string,
};

export default Button;

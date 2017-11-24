import React from 'react';
import propTypes from 'prop-types';
import style from './index.css';


const Button = props => {
  const {
    handleClick,
    text,
  } = props;

  return (
    <div className="btn">
      <button onClick={handleClick}>
        { text }
      </button>
    </div>
  );
};

Button.propTypes = {
  handleClick: propTypes.func.isRequired,
  text: propTypes.string,
};

export default Button;

import React from 'react';
import propTypes from 'prop-types';
import style from './index.css';


const RadioButton = ({
  selected,
  handleClick,
}) => {
  const innerStyle = {
    backgroundColor: selected ? 'green' : false,
  };
  return (
    <div className="radio-button">
      <div className="radio-button-outer">
        <div className="radio-button-inner" style={innerStyle} onClick={handleClick} />
      </div>
    </div>
  );
};

RadioButton.propTypes = {
  selected: propTypes.bool,
  handleClick: propTypes.func,
};

export default RadioButton;

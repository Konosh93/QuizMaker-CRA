import React from 'react';
import propTypes from 'prop-types';
import style from './index.css';
import Button from '../Button';


const ProblemNav = ({
  moveToNext,
  moveToPrevious,
   className,
}) => {


  return (
    <div className={`problem-nav ${className}`}>
      <Button
        className="problem-nav__button"
        handleClick={moveToPrevious}
      ><i className="fa fa-arrow-left" aria-hidden="true" />
      </Button>
      <Button
        className="problem-nav__button problem-nav__button--next"
        handleClick={moveToNext}
      ><i className="fa fa-arrow-right" aria-hidden="true" />
      </Button>
    </div>
  );
};

ProblemNav.propTypes = {
  moveToNext: propTypes.func.isRequired,
  moveToPrevious: propTypes.func.isRequired,
  className: propTypes.string.isRequired,
};

export default ProblemNav;

import React from 'react';
import PropTypes from 'prop-types';
import style from './index.css';
import NavButton from '../NavButton';

const Navigation = ({
	user,
	className,
}) => (
  <div className={`navigation ${className}`}>
    <NavButton uri="/"><i className="fa fa-home fa-2x" aria-hidden="true" /></NavButton>
    <NavButton uri="/quiz"><i className="fa fa-question-circle fa-2x" aria-hidden="true"/> QUIZ</NavButton>
    <NavButton uri="/auth"><i className="fa fa-user fa-2x" aria-hidden="true" /> Hello, {user? user.name : 'there!'}</NavButton>
  </div>
);

Navigation.propTypes = {
  user: PropTypes.object,
  className: PropTypes.string.isRequired,
}
export default Navigation;

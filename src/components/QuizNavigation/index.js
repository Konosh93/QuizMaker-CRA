import React from 'react';
import propTypes from 'prop-types';
import style from './index.css';
import QuizNavButton from '../QuizNavButton';

const QuizNavigation = ({
	match
}) => (
  <div className="quiz-menu">
    <QuizNavButton text="List" uri={`${match.url}/list`} />
    <QuizNavButton text="New" uri={`${match.url}/make`} />
    <QuizNavButton text="Unsaved" uri={`${match.url}/drafts`} />
  </div>
);

QuizNavigation.propTypes = {
  match: propTypes.object,
}

export default QuizNavigation;

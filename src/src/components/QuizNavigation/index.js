import React from 'react';
import propTypes from 'prop-types';
import style from './index.css';
import QuizNavButton from '../QuizNavButton';

const QuizNavigation = ({
	match
}) => (
  <div className="quiz-navigation">
    <QuizNavButton text="See quizzes list" uri={`${match.url}/list`} />
    <QuizNavButton text="Make a quiz" uri={`${match.url}/make`} />
    <QuizNavButton text="Drafts" uri={`${match.url}/drafts`} />
  </div>
);

QuizNavigation.propTypes = {
  match: propTypes.object,
}

export default QuizNavigation;

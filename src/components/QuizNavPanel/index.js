import React from 'react';
import propTypes from 'prop-types';
import style from './index.css';
import QuizNavButton from '../QuizNavButton';

const QuizNavPanel = ({
	match, width,
}) => {
  return (
    <div className={`quiz-nav-panel ${width <= 480 && "quiz-nav-panel--mobile"}`} style={{width: width*.8}}>
      <div className="quiz-nav-panel__item"><QuizNavButton text="List" uri="/quiz/list" /></div>
      <div className="quiz-nav-panel__item"><QuizNavButton text="New" uri="/quiz/make" /></div>
      <div className="quiz-nav-panel__item"><QuizNavButton text="Unsaved" uri="/quiz/drafts" /></div>
    </div>
  )
};

QuizNavPanel.propTypes = {
  match: propTypes.object,
}

export default QuizNavPanel;

import React from 'react';
import propTypes from 'prop-types';
import style from './index.css';
import Button from '../Button';
import { getQuizDraft } from '../../storage';
import {Link} from 'react-router-dom';



const QuizDrafts = ({
  addQuiz,
  selectQuiz, 
}) => {
  const draft = getQuizDraft();
  const {currentQuizId, currentQuiz} = draft || {};
  if (!currentQuizId || !currentQuiz) return null;
  return (
    <div className="quiz-list">
      <Link to="/quiz/make">
        <Button  
          handleClick={() => {addQuiz(currentQuizId, currentQuiz);selectQuiz(currentQuizId);}}
          className="quiz-list__button-select"
        >
          {currentQuiz.title || 'unsaved-draft'}
        </Button>
      </Link>
    </div>
  );
}

QuizDrafts.propTypes = {
  addQuiz: propTypes.func.isRequired,
  selectQuiz: propTypes.func.isRequired,
};
export default QuizDrafts;
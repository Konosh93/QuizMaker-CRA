import React from 'react';
import propTypes from 'prop-types';
import style from './index.css';
import Button from '../Button';
import { getQuizDraft } from '../../storage';
import {Link} from 'react-router-dom';
import { removeOneDraft } from '../../storage';



const QuizDrafts = ({
  addQuiz,
  selectQuiz, 
}) => {
  const noDrafts = (
    <div><li>There are no unsaved drafts.</li></div>
  );
  const draft = getQuizDraft();
  const {currentQuizId, currentQuiz} = draft || {};
  if (!currentQuizId || !currentQuiz) return noDrafts;;
  return (
    <div className="quiz-drafts">
    <h3>Unsaved Drafts</h3>
     <ul>
      <li><Link to="/quiz/make">
        <Button  
          handleClick={() => {addQuiz(currentQuizId, currentQuiz);selectQuiz(currentQuizId);}}
          className="quiz-drafts__title"
        >
          {currentQuiz.title || 'unsaved-draft'}
        </Button> 
        <Button  
          handleClick={() => removeOneDraft()}
          className="quiz-drafts__delete"
        >
          Delete
        </Button>
      </Link></li>
    </ul>
    </div>
  );
}

QuizDrafts.propTypes = {
  addQuiz: propTypes.func.isRequired,
  selectQuiz: propTypes.func.isRequired,
};
export default QuizDrafts;
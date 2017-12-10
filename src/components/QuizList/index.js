import React from 'react';
import propTypes from 'prop-types';
import style from './index.css';
import Button from '../Button';
import {Link} from 'react-router-dom';



const QuizList = ({
  quizList,
  addQuiz, 
  fetchQuizes,
  fetchMyQuizes
}) => {
  const quizlist = quizList.map(q => <Button  
    handleClick={e => e.preventDefault()}
    className="quiz-list__button-select"
    key={q.slug}>

      <Link to={`/quiz/take/${q.slug}`}>
    {q.title}</Link></Button>) 
  return (
    <div className="quiz-list">
      <Button handleClick={fetchQuizes} className="quiz-list__button-fetch" >Fetch All Quizes</Button>
      <Button handleClick={fetchMyQuizes} className="quiz-list__button-fetch" >Fetch My Quizes</Button>
      {quizlist}    
    </div>
  );
}

QuizList.propTypes = {
  quizList: propTypes.arrayOf(propTypes.object),
  fetchQuizes: propTypes.func.isRequired,
  fetchMyQuizes: propTypes.func.isRequired,
};
export default QuizList;
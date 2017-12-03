import React from 'react';
import propTypes from 'prop-types';
import style from './index.css';
import Button from '../Button';
import {Link} from 'react-router-dom';



const QuizList = ({
  quizes,
  selectQuiz, 
  fetchQuizes,
}) => {
  const ids = Object.keys(quizes);
  const quizlist = ids.map(id => <Link key={id} to="/quiz/take"><Button  
    handleClick={() => selectQuiz(id)}
    className="quiz-list__button-select">
    {quizes[id].title}</Button></Link>) 
  return (
    <div className="quiz-list">
      <Button handleClick={fetchQuizes} className="quiz-list__button-fetch" >FETCH QUIZES</Button>
      {quizlist}    
    </div>
  );
}

QuizList.propTypes = {
  quizes: propTypes.object.isRequired,
  selectQuiz: propTypes.func.isRequired,
};
export default QuizList;
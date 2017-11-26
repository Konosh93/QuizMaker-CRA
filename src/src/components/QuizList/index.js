import React from 'react';
import propTypes from 'prop-types';
import style from './index.css';
import Button from '../Button';
import {Link} from 'react-router-dom';



const QuizList = ({
  quizes,
  selectQuiz, 
}) => {
  const keys = Object.keys(quizes);
  const quizlist = keys.map(id => <Link key={id} to="/quiz/take"><Button  
    handleClick={() => selectQuiz(id)}
    className="quiz-list__item">
    {quizes[id].title}</Button></Link>) 
  return (
    <div>
      {quizlist}
    </div>
  );
}

QuizList.propTypes = {
  quizes: propTypes.object.isRequired,
  selectQuiz: propTypes.func.isRequired,
};
export default QuizList;
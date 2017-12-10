import React from 'react';
import propTypes from 'prop-types';
import style from './index.css';
import Button from '../Button';
import {Link} from 'react-router-dom';



const Results = ({
  quiz,
  score
}) => { 
  if (score === null) return <p>Please choose one quiz and submit your answers.</p>
  return (
    <div className="results">
    Your Score for <Link to={`/quiz/take/${quiz.slug}`}>{quiz.title}</Link> is { score }.
    <br />
    Thank you for taking the time to try out this service.   
    </div>
  );
}

Results.propTypes = {
  quiz: propTypes.object.isRequired,
  score: propTypes.number,
};
export default Results;
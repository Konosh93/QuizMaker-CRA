import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import style from './index.less';
import utils from './utils';

const QuizTaker = ({

}) => {
  return (
    <div className={style.quizTaker}>
    <p>Here we put the quiz to be taken</p>
    </div>
  );
}

QuizTaker.propTypes = {

};
export default QuizTaker;

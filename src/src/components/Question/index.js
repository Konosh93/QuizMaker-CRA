import React from 'react';
import propTypes from 'prop-types';
import TextInput from '../TextInput';
import style from './index.css';

const Question = ({
  setQuestionText,
  question,
  className,
}) => (
  <div className={`question ${className}`}>
    <TextInput
      type="text"
      name="question"
      value={question.text || ''}
      placeholder="Enter your question here ..."
      handleChange={setQuestionText}
    />
  </div>
);

Question.propTypes = {
  setQuestionText: propTypes.func.isRequired,
  question: propTypes.object.isRequired,
  className: propTypes.string,
};

export default Question;

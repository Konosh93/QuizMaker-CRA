import React from 'react';
import propTypes from 'prop-types';
import Form from '../Form';
import Question from '../Question';
import Choices from '../Choices';
import Button from '../Button';
import style from './index.css';

const ProblemForm = ({
  setCorrect,
  setQuestion,
  addChoice,
  removeChoice,
  setChoice,
  question,
  choices,
  correct,
}) => (
  <div className="problem-form">
      <Question
        className="problem-form__question"
        setQuestion={setQuestion}
        question={question}
      />
      <Choices
        className="problem-form__choices"
        setCorrect={setCorrect}
        setChoice={setChoice}
        addChoice={addChoice}
        removeChoice={removeChoice}
        choices={choices}
        correct={correct}
      />
    <Button 
      className="problem-form__button-plus" 
      handleClick={addChoice}>
       <i className="fa fa-plus" aria-hidden="true" /> Add choice
    </Button>
  </div>
);


ProblemForm.propTypes = {
  setCorrect: propTypes.func.isRequired,
  setQuestion: propTypes.func.isRequired,
  addChoice: propTypes.func.isRequired,
  removeChoice: propTypes.func.isRequired,
  setChoice: propTypes.func.isRequired,
  question: propTypes.object.isRequired,
  choices: propTypes.object,
  correct: propTypes.string,
};

export default ProblemForm;

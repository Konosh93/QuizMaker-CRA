import React from 'react';
import propTypes from 'prop-types';
import Form from '../Form';
import Question from '../Question';
import Choices from '../Choices';
import style from './index.css';

const ProblemForm = ({
  setCorrect,
  setQuestionText,
  addChoice,
  removeChoice,
  editChoiceText,
  question,
  choices,
  correct,
}) => (
  <div className="problem-form">
    <Form>
      <div className="problem-form__question">
        <Question
          setQuestionText={setQuestionText}
          question={question}
        />
      </div>
      <div className="problem-form__choices">
        <Choices
          setCorrect={setCorrect}
          editChoiceText={editChoiceText}
          addChoice={addChoice}
          removeChoice={removeChoice}
          choices={choices}
          correct={correct}
        />
      </div>
    </Form>
  </div>
);


ProblemForm.propTypes = {
  setCorrect: propTypes.func.isRequired,
  setQuestionText: propTypes.func.isRequired,
  addChoice: propTypes.func.isRequired,
  removeChoice: propTypes.func.isRequired,
  editChoiceText: propTypes.func.isRequired,
  question: propTypes.object.isRequired,
  choices: propTypes.object.isRequired,
  correct: propTypes.string.isRequired,
};

export default ProblemForm;

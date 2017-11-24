import React from 'react';
import propTypes from 'prop-types';
import Form from '../Form';
import TextInput from '../TextInput';
import style from './index.css';

const QuizTitleForm = props => {
  const {
    setTitle,
    title,
  } = props;
  return (
    <div className="quiz-title-form">
      <Form>
        <div className="quiz-title-form__input">
          <TextInput
            type="text"
            name="title"
            value={title}
            placeholder="Enter quiz title ..."
            handleChange={setTitle}
          />
        </div>
      </Form>
    </div>
  );
};

QuizTitleForm.propTypes = {
  title: propTypes.string.isRequired,
  setTitle: propTypes.func.isRequired,
};

export default QuizTitleForm;

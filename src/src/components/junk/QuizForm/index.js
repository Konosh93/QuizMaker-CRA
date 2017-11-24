import React from 'react';
import propTypes from 'prop-types';
import Form from '../Form';
import TextInput from '../TextInput';
import Button from '../Button';
import style from './index.less';

const QuizForm = props => {
  const {
    handleChange,
    handleSubmit,
    title,
  } = props;
  return (
    <div className={style.quizForm}>
      <Form>
        <div className={style.input}>
          <TextInput
            type="text"
            name="title"
            value={title}
            placeholder="Enter quiz title ..."
            handleChange={handleChange}
          />
        </div>
        <div className={style.input}>
          <Button
            handleClick={handleSubmit}
            text="SUBMIT"
          />
        </div>
      </Form>
    </div>
  );
};

QuizForm.propTypes = {
  title: propTypes.string,
  handleChange: propTypes.func.isRequired,
  handleSubmit: propTypes.func.isRequired,
};

export default QuizForm;

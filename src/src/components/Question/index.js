import React from 'react';
import propTypes from 'prop-types';
import TextInput from '../TextInput';
import TextEditor from '../TextEditor';
import style from './index.css';

const Question = ({
  setQuestion,
  question,
  className,
}) => {
  return (
    <div className={`question ${className}`}>
      <TextEditor
        editorState={question}
        placeholder="Enter your question here ..."
        onChange={setQuestion}
      />
    </div>
)};

Question.propTypes = {
  setQuestion: propTypes.func.isRequired,
  question: propTypes.object.isRequired,
  className: propTypes.string,
};

export default Question;

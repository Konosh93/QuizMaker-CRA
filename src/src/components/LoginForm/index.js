import React from 'react';
import propTypes from 'prop-types';
import Form from '../Form';
import TextInput from '../TextInput';
import Button from '../Button';
import style from './index.css';


const LoginForm = props => {
  const {
    data,
    handleChange,
    handleClick,
    toggleAction,
    user,
    message
  } = props;
  const label = data.isSignup ? message + ' Sign up with your email' : message + ' Login with your email';
  const header = user? `You are currently logged in as ${user.name}`: label;
  const buttonText = data.isSignup ? 'SIGNUP' : 'LOGIN';
  const toggleText = data.isSignup ? 'Already a member? login' : 'Not registered yet? signup';
  const nameField = data.isSignup ? (
    <div className="login-form__text">
      <TextInput
        type="text"
        name="name"
        value={data.name}
        placeholder="Enter your name ..."
        handleChange={handleChange}
      />
    </div>
  ) : null;

  return (
    <div className="login-form">
      <div className="login-form__box">
        <div className="login-form__label">
          <span>{header}</span>
        </div>
        <Form>
          {nameField}
          <div className="login-form__text">
            <TextInput
              type="email"
              name="email"
              value={data.email}
              placeholder="Enter your email ..."
              handleChange={handleChange}
            />
          </div>
          <div className="login-form__text">
            <TextInput
              type="password"
              name="password"
              value={data.password}
              placeholder="Enter your password ..."
              handleChange={handleChange}
            />
          </div>
            <Button
              className="login-form__button"
              handleClick={handleClick}
            >{buttonText}
            </Button>
          <hr />
          <div className="login-form__toggle">
            <span onClick={toggleAction}>{toggleText}</span>
          </div>
        </Form>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  data: propTypes.shape({
    name: propTypes.string.isRequired,
    email: propTypes.string.isRequired,
    password: propTypes.string.isRequired,
    isFetching: propTypes.bool.isRequired,
    isSignup: propTypes.bool.isRequired,
  }),
  handleChange: propTypes.func.isRequired,
  message: propTypes.string,
  handleClick: propTypes.func.isRequired,
  toggleAction: propTypes.func.isRequired,
};

export default LoginForm;

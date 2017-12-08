import React from 'react';
import propTypes from 'prop-types';
import Positioner from '../Positioner';
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
    width,
    height,
    message,
  } = props;
  const label = data.isSignup ? 'Sign up with your email' : message + ' - Login with your email';
  const header = user? `You are currently logged in as ${user.name}`: label;
  const buttonText = data.isSignup ? 'SIGNUP' : 'LOGIN';
  const toggleText = data.isSignup ? 'Already a member? login' : 'Not registered yet? signup';
  const nameField = data.isSignup ? (
    <TextInput
      type="text"
      name="name"
      value={data.name}
      placeholder="Enter your name ..."
      handleChange={handleChange}
    />
  ) : null;

  return (
    <Positioner width={width} height={height}>
    <div className="login-form">
      <span>{header}</span>
      {nameField}
      <TextInput
        type="email"
        name="email"
        value={data.email}
        placeholder="Enter your email ..."
        handleChange={handleChange}
      />
      <TextInput
        type="password"
        name="password"
        value={data.password}
        placeholder="Enter your password ..."
        handleChange={handleChange}
      />
      <Button
        className="login-form__button"
        handleClick={handleClick}
      >{buttonText}
      </Button>
      <hr />
        <Button handleClick={toggleAction}>{toggleText}</Button>
    </div></Positioner>
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

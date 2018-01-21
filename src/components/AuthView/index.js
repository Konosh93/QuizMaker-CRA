import React from 'react';
import propTypes from 'prop-types';
import LoginForm from '../LoginForm';
import Button from '../Button';
import Positioner from '../Positioner';
import style from './index.css';
import utils from './utils';


class Auth extends React.Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleAction = this.toggleAction.bind(this);
    this.state = {
      name:'',
      email: '',
      password: '',
      isSignup: false,
      isProgressing:false,
    };
  }
  componentWillReceiveProps(nextProps) {
    const { history } = this.props;
    if (nextProps.user) {
      if (!nextProps.user.name || !nextProps.user.token) {
        throw new Error('Something has gone terribly wrong');
      }
      history.push('/profile');
    }
  }

  handleClick(e) {
    utils.handleClick(e, this);
  }

  handleChange(e) {
    utils.handleChange(e,this)
  }

  toggleAction(e) {
    utils.toggleAction(e, this)
  }

  logout() {
    this.props.logout();
  }

  render() {

    const loginFormProps = {
      user: this.props.user,
      message: this.props.errors.message || '',
      data: {...this.state, isFetching: this.props.isFetching},
      handleChange: this.handleChange,
      handleClick: this.handleClick,
      toggleAction: this.toggleAction,
      width: this.props.width,
      height: this.props.height,
    }

    if (!this.props.user) return <LoginForm { ...loginFormProps } />     

    return (
    <div >
      <h3>Hello, {this.props.user.name}</h3>
      <p>You are currrently logged in.</p>
      <Button
        className="auth-view__logout-button"
        handleClick={this.logout}
      >Click here to logout
      </Button>        
    </div>

    );
  }
}

Auth.propTypes = {
  user: propTypes.object,
  errors: propTypes.object,
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
  history: propTypes.object.isRequired,
  login: propTypes.func.isRequired,
  signup: propTypes.func.isRequired,
  beginAuth: propTypes.func.isRequired,
};

export default Auth;

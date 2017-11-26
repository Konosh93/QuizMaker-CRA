import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from '../LoginForm';
import Button from '../Button';
import style from './index.css';
import * as actions from '../../actions';
import utils from './utils';

const mapStateToProps = state => ({
  user: state.get('auth').user,
  errors: state.get('auth').errors || {},
  isFetching: state.get('auth').isFetching || false,
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(actions.loginAsync(email, password)),
  logout: () =>  dispatch(actions.logout()),
  signup: (name, email, password) => dispatch(actions.signupAsync(name, email, password)),
  beginAuth: () => dispatch(actions.beginAuth()),
});


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
    const loginForm = (
      <div className="auth__login-form">
        <LoginForm
          user={this.props.user}
          message={this.props.errors.message}
          data={{...this.state, isFetching: this.props.isFetching}}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          toggleAction={this.toggleAction}
        />
      </div>      
    );
    const logout = (
      <Button
        className="auth__logout"
        handleClick={this.logout}
      ><span>LOGOUT</span>
      </Button>
    );
    return (
      <div className="auth">
        {
          this.props.user? logout: loginForm
        }

      </div>
    );
  }
}

Auth.propTypes = {
  user: propTypes.object,
  history: propTypes.object.isRequired,
  login: propTypes.func.isRequired,
  signup: propTypes.func.isRequired,
  beginAuth: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

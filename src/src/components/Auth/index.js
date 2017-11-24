import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from '../LoginForm';
import style from './index.css';
import * as actions from '../../actions';
import utils from './utils';

const mapStateToProps = state => ({
  user: state.get('auth').user,
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(actions.loginAsync(email, password)),
  signup: (name, email, password) => dispatch(actions.signup(name, email, password)),
  beginAuth: () => dispatch(actions.beginAuth()),
});


class Auth extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleAction = this.toggleAction.bind(this);
    this.state = {
      name:'',
      email: '',
      password: '',
      isFetching: false,
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

  render() {
    return (
      <div className="auth">
        <div className="auth__login-form">
          <LoginForm
            user={this.props.user}
            data={{...this.state}}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            toggleAction={this.toggleAction}
          />
        </div>
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

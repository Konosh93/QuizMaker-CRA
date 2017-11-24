import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import style from './index.less';
import agent from '../../agent';

const mapStateToProps = state => ({
  user: state.get('auth').user,
});

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch({
    type: 'LOGIN', payload: agent.accounts.login(username, password) }),
});


class Auth extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      username: '',
      password: '',
      inProgress: false,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.inProgress || this.state.username === '' || this.state.password === '') return;
    this.setState({ inProgress: true });
    console.log('pass');
    const { login, history } = this.props;
    const { username, password } = this.state;
    login({ username, password });
    history.push('/profile');
  }

  handleChange(e) {
    e.preventDefault();
    if (e.target.name === 'username') {
      this.setState({
        username: e.target.value,
      });
    }
    if (e.target.name === 'password') {
      this.setState({
        password: e.target.value,
      });
    }
  }

  render() {
    return (
      <div>
        <div className={style.loginform}>
          <form >
            <input
              type="text"
              name="username"
              value={this.state.username}
              placeholder="Username"
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.handleChange}
            />
            <button onClick={this.handleSubmit}>LOGIN</button>
          </form>
        </div>
      </div>
    );
  }
}

Auth.propTypes = {
  history: propTypes.object.isRequired,
  login: propTypes.func.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));

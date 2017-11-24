import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import style from './index.less';
import * as actions from '../../actions';
import agent from '../../agent';

const mapStateToProps = state => (
  {
    auth: state.get('auth'),
  }
);

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    if (this.props.auth.user && this.props.auth.user.token) {
      actions.setTokenCookie(this.props.auth.user.token);
      agent.setToken(this.props.auth.user.token);
    }
  }

  render() {
    console.log(this.props.auth)
    const name = this.props.auth.user ? this.props.auth.user.name : null;
    const { history } = this.props;
    const message = this.props.auth.isAuthenticating? 'Authenticating ...' : `This is your profile! hi ${name}.`;
    return (
      <div className={style.profile}>
        {message}
        <div className={style['quiz-link']} onClick={() => history.push('/quiz')}>
          See Quizes
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  auth: propTypes.object,
  history: propTypes.object.isRequired,
};
export default connect(mapStateToProps)(Profile);

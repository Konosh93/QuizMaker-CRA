import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import style from './index.less';
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
  }

  render() {
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

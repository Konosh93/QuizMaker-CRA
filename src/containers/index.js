import React from 'react';
import { connect } from 'react-redux';
import style from './index.css';
import Root from '../components/Root';
import { recallUser, setSize, setScrollValue } from '../actions';

class App extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(recallUser());
    dispatch(setSize(document.documentElement.clientWidth, document.documentElement.clientHeight));
    window.addEventListener('resize', () => {
      dispatch(setSize(document.documentElement.clientWidth, document.documentElement.clientHeight));
    });
    window.addEventListener('scroll', () => dispatch(setScrollValue(window.scrollY)));
  }

  componentWillUnMount() {
    window.removeEventListener('resize');
    window.removeEventListener('scroll');
  }


  render() {
    return (
      <div className="container">
        <Root {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.get('auth').user,
});

export default connect(mapStateToProps)(App);

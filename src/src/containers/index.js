import React from 'react';
import { connect } from 'react-redux';
import style from './index.css';
import Routes from '../components/Routes';
import { recallUser } from '../actions';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      w: document.documentElement.clientWidth,
      h: document.documentElement.clientHeight,
    };
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(recallUser());
    window.addEventListener('resize', () => {
      this.setState({
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight,
      });
    });
  }

  componentWillUnMount() {
    window.removeEventListener('resize');
  }


  render() {
    let scale = this.state.w / this.state.h;
    scale = scale <= 1 ? scale : 1;
    return (
      <div className="container">
        <Routes {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.get('auth').user,
});

export default connect(mapStateToProps)(App);

import React from 'react';
// import PropTypes from 'prop-types';

import style from './index.less';
import Frame from '../../components/Frame';
import Hands from '../../components/Hands';

class Clock extends React.Component {
  constructor() {
    super();
    const timeInS = (Math.floor(Date.now() / 1000) % (12 * 60 * 60));
    this.state = {
      time: timeInS,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: this.state.time + 1,
      });
    }, 1000);
  }

  shouldComponentUpdate() {
    this.t = -1;
    if (this.t === this.state.time) {
      return false;
    }
    this.t = this.state.time;
    return true;
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div
        className={style.clock}
      >
        <Frame />
        <Hands time={this.state.time} />
      </div>
    );
  }
}

export default Clock;

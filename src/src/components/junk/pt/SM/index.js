import React from 'react';
import propTypes from 'prop-types';
import style from './index.less';


class Smart extends React.Component {
  constructor() {
    super();
    this.state = {
      item: '',
    };
  }

  componentWillReceiveProps(np) {

  }

  render() {

    return (
      <div className={style.smart}>

      </div>
    );
  }
}

Smart.propTypes = {
  item: propTypes.object,
  action: propTypes.func,
};

export default Smart;

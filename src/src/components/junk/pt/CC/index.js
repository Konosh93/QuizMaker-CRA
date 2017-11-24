import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import style from './index.less';


const mapStateToProps = state => (
  {
    item: state.get('item'),
  }
);

const mapDispatchToProps = dispatch => (
  {
    action:dispatch({type: , payload: }),
  }
);

class Container extends React.Component {
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
      <div className={style.container}>

      </div>
    );
  }
}

Container.propTypes = {
  item: propTypes.object,
  action: propTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(Container);

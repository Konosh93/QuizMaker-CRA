import React from 'react';
import propTypes from 'prop-types';
import style from './index.less';


const Dumb = () => (
  <div className={style.dumb}>
    This is dumb!
  </div>
);

Dumb.propTypes = {
	item: propTypes.object,
}

export default Dumb;

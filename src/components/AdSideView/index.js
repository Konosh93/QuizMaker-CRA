import React from 'react';
import propTypes from 'prop-types';
import style from './index.css';
import utils from './utils';

const AdSideView = props => {
  return (
    <div className="ad-side-view">
      <p>Getting information from your customers and audiance is crucial for your value delivery</p>
      <p>"Customers are always unsatisfied", find out the areas where you can make improvements by asking for feedback </p>
      <p>Make the process intuitive and natural to get the responses that will enable you to compete better</p>
    </div>
  );
}
AdSideView.propTypes = {
  user: propTypes.object,
  errors: propTypes.object,
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
  history: propTypes.object.isRequired,
  login: propTypes.func.isRequired,
  signup: propTypes.func.isRequired,
  beginAuth: propTypes.func.isRequired,
};

export default AdSideView;

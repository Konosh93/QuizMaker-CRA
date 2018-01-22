import React from 'react';
import AdSideView from '../AdSideView';
import style from './index.css';


const AdView = props => {
  const isMobile = props.width <= 480;
  const inspirationSideView = !isMobile ? (
    <div className="ad-view__inspiration__side-view">
      <AdSideView />
    </div> 
  ) : null;
  const introSideView = !isMobile ? (
    <div className="ad-view__intro__side-view">
      <div>You can use quiz-survey to create great looking quizes and surveys</div>
    </div> 
  ) : null;
  return (
    <div className="ad-view">
      <div className="ad-view__intro">
        <div className="ad-view__intro__image"><img src={require('../../assets/logo.png')} className="ad-view__intro__logo" /></div>
        { introSideView }
      </div>
      <div className="ad-view__inspiration">
        <div className="ad-view__inspiration__img">
          <img src="https://elearningindustry.com/wp-content/uploads/2014/04/ed0b0c31c412f7d67bd39119503bb394.jpg" />
        </div>
        {inspirationSideView}
      </div>
    </div>
  )
};
export default AdView;

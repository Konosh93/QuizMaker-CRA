import React from 'react';
import AdView from '../AdView';
import style from './index.css';


const Home = props => {
  const isMobile = props.width <= 480;
  console.log(isMobile);
  return (
    <div className="home">
      <div className={`home__message ${isMobile && 'home__message--mobile'}`}>
        <div className="home__title">Create quizes and surveys with ease</div>
        <div className="home__description">
          Feel free to make awesome quizes and surveys and share them with your audiance and customers.
        </div>
      </div>
      <AdView width={props.width}/>
    </div>
  )
};
export default Home;

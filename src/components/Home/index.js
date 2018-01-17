import React from 'react';
import Positioner from '../Positioner';
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
        <p className="home__p">This is a small app made with React and Express.</p>
        <p className="home__p">It is a basic quiz-creator that allows users to register, create quizes and share them with other people.</p>
        <p className="home__p">If you are interested in seeing the code check <a href="https://github.com/Konosh93/QuizMaker-CRA/">this GitHub repository</a> .
        </p>
      </div>
    </div>
  )
};
export default Home;

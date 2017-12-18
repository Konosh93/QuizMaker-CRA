import React from 'react';
import Positioner from '../Positioner';
import style from './index.css';


const Home = () => (
  <Positioner >
    Hello,
    <br />
    <p>This is a small app made with React and Express.</p>
    <p>It is a basic quiz-creator that allows users to register, create quizes and share them with other people.</p>
    <p>If you are interested in seeing the code check <a href="https://github.com/Konosh93/QuizMaker-CRA/">this GitHub repository</a> .
    </p>
  </Positioner>
);
export default Home;

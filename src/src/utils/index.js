import Cookies from 'universal-cookie';
import agent from '../agent';

export const setTokenCookie = token => {
  const cookies = new Cookies();
  cookies.set('token', token, { path: '/', maxAge: 86400 });
};


const isPlainObject = obj => (typeof obj === 'object' && !Array.isArray(obj));
const hasSingleProperty = obj => Object.keys(obj).length === 1;
const getSolePropertyfromObject = obj => obj[Object.keys(obj)[0]];
const convertObjectToArray = obj => {
  let keys = Object.keys(obj);
  const arr = keys.map(k => ( Object.assign(obj[k], {id: k})));
  return arr;
}

const convertArrytoObject = arr => {
  let obj = {};
  arr.forEach( v => obj[v.id]=v);
  return obj
}

export const quizTransformer = quiz => {
  if (!isPlainObject(quiz)) {
    throw new Error('quiz must be plain javascript object');
  }
  if (!hasSingleProperty(quiz)) {
    throw new Error('invalid object properties');
  }
  var id = Object.keys(quiz)[0];
  var _quiz = getSolePropertyfromObject(quiz);
  if (!_quiz.title || !_quiz.problems) {
    throw new Error('required fields not found');
  }
  if (typeof _quiz.title !== 'string' || !isPlainObject(_quiz.problems)) {
    throw new Error('provided data is invalid');
  }
  var _problems = convertObjectToArray(_quiz.problems)
  _problems = _problems.map((p, k) => {
    if (!p.question || !p.choices) {
      return ;
    }
    return { 
      id: k,
      question: p.question,
      choices: convertObjectToArray(p.choices),
      correct: p.correct,
    }
  });
  var _quiz = Object.assign({}, { id, title: _quiz.title, problems: _problems })
  console.log(JSON.stringify(_quiz));
  return _quiz;
}






export const inverseQuizTransformer = quiz => {
  console.log(quiz)
  var id = quiz._id;
  if (!quiz.title || !quiz.problems) {
    throw new Error('required fields not found');
  }
  if (typeof quiz.title !== 'string' || !Array.isArray(quiz.problems)) {
    throw new Error('provided data is invalid');
  }
  var _problems = quiz.problems.map(p => {
    if (!p.question || !p.choices) {
      return p;
    }
    return { 
      id: p.id,
      question: p.question,
      choices: convertArrytoObject(p.choices),
      correct: p.correct,
    }
  });
  var _problemsObject = convertArrytoObject(_problems);
  var _quiz = Object.assign({}, { id, title: quiz.title, problems: _problemsObject })
  console.log(JSON.stringify(_quiz));
  return _quiz;
}
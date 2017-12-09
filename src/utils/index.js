import Cookies from 'universal-cookie';
import { convertToRaw, convertFromRaw, EditorState, ContentState } from 'draft-js';
import agent from '../agent';
  const cookies = new Cookies();

export const tokenAuth = {
  set:  (name, value, options) => cookies.set(name, value, options),
  get:  name => cookies.get(name),
  remove:  (name, options) => cookies.remove(name, options),
}

const isPlainObject = obj => (typeof obj === 'object' && !Array.isArray(obj));
const hasSingleProperty = obj => Object.keys(obj).length === 1;
const getSolePropertyfromObject = obj => obj[Object.keys(obj)[0]];
const convertChoicesToArrayOfRaw = choices => {
  let _choices = convertObjectToArray(choices);
  _choices = _choices.map(c => ({
    id: c.id,
    choice: convertToRaw(c.choice.getCurrentContent()),
  }))
  return _choices;
}

const convertChoicesFromArrayOfRaw = choices => {
  let _choices = choices.map(c => ({
    id: c.id,
    choice: createEditorState(c.choice),
  }))
  _choices = convertArrayToObject(_choices);
  return _choices;
}

const convertObjectToArray = obj => {
  let keys = Object.keys(obj);
  const arr = keys.map(k => ( Object.assign(obj[k], {id: k})));
  return arr;
}

const convertArrayToObject = arr => {
  let obj = {};
  arr.forEach( v => obj[v.id]=v);
  return obj
}

export const convertToServerFormat = quiz => {
  const { _id, title, problems } = quiz;
  if (!_id || !title || !problems) return;
  let _problems = convertObjectToArray(problems)
  _problems = _problems.map((p, k) => {
    if (!p.question || !p.choices)  return ;
    return { 
      id: k,
      question: convertToRaw(p.question.getCurrentContent()),
      choices: convertChoicesToArrayOfRaw(p.choices),
      correct: p.correct,
    }
  }); 
  return { _id, title, problems: _problems };
}




const createEditorState = raw => {
  const contentState = convertFromRaw(raw);
  const editorState = EditorState.createWithContent(contentState);
  return editorState;
}


export const convertToReduxFormat = quiz => {
  const { _id, title, problems } = quiz;
  if (!_id || !title || !problems) return;
  let _problems = problems.map(p => {
    if (!p.question || !p.choices) return;
    return { 
      id: p.id,
      question: createEditorState(p.question),
      choices: convertChoicesFromArrayOfRaw(p.choices),
      correct: p.correct,
    }
  }); 
  _problems = convertArrayToObject(_problems);
  return { _id, title, problems: _problems }

}

export const extractAnswers = quiz => {
  const { _id, title, problems } = quiz;
  if (!_id || !title || !problems) return;
  let _problems = convertObjectToArray(problems)
  _problems = _problems.map((p, k) => {
    if (!p.question || !p.choices)  return ;
    return { 
      id: k.toString(),
      correct: p.correct,
    }
  }); 
  return { _id, problems: _problems };
}
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


const convertToClientFormat = quiz => {
  const { _id, title, problems, slug } = quiz;
  if (!_id || !title || !problems || !slug) return;
  let _problems = problems.map(p => {
    if (!p.question || !p.choices) return;
    return { 
      id: p.id,
      question: p.question,
      choices: p.choices,
      correct: null, //quiz-taker should not know the correct answer.
    }
  }); 
  return { _id, title, slug, problems: _problems }

}

const extractAnswers = quiz => {
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

module.exports = {
  convertToClientFormat,
  extractAnswers,
}